import { projects } from "../../data/projects";
import { useRef } from "react";

const ITEM_H = 65;
const GAP = 3;
const STEP = ITEM_H + GAP;

export default function ProjectsCarousel({
  selectedProject,
  onSelectProject,
  onClickProject,
}) {
  const n = projects.length;
  const half = Math.floor(n / 2);

  const selectedIndex = projects.indexOf(selectedProject);
  const getOffset = (index) => ((index - selectedIndex + half + n) % n) - half;

  const lastWheelRef = useRef(0);

  const onProjectImageClick = (project, distance) => {
    if (distance === 0) {
      onClickProject(project);
    } else {
      onSelectProject(project);
    }
  };
  const onWheel = (e) => {
    if (Math.abs(e.deltaY) < 10) return;
    if (Date.now() - lastWheelRef.current < 100) return;
    lastWheelRef.current = Date.now();

    const direction = e.deltaY > 0 ? 1 : -1;
    onSelectProject(projects[(selectedIndex + direction + n) % n]);
  };

  return (
    <div
      onWheel={onWheel}
      className="basis-5/9 relative min-h-[calc(100dvh-8vh)] overflow-hidden"
    >
      {projects.map((project, index) => {
        const offset = getOffset(index);
        const distance = Math.abs(offset);

        return (
          <div
            key={project.slug}
            onClick={() => onProjectImageClick(project, distance)}
            className={`absolute inset-x-0 mx-auto w-12/13 bg-white transition-all duration-500 ease-in-out ${
              distance === 0
                ? "opacity-80 cursor-pointer"
                : distance === 1
                  ? "cursor-pointer opacity-40"
                  : "pointer-events-none opacity-0"
            }`}
            style={{
              height: `${ITEM_H}vh`,
              top: `calc(50% - ${ITEM_H / 2}vh)`,
              transform: `translateY(${offset * STEP}vh) scale(${distance === 0 ? 1 : 0.9})`,
            }}
          />
        );
      })}
    </div>
  );
}

import { projects } from "../../data/projects";
import { useEffect, useRef } from "react";
import ProjectsCarouselNavigator from "./ProjectsCarouselNavigator";

const ITEM_W = 65;
const GAP = 3;
const STEP_PCT = ((ITEM_W + GAP) / ITEM_W) * 100;

const WHEEL_COOLDOWN = 400;
const PASS_THROUGH_GRACE = 250;
const VISIBLE_RATIO = 0.95;

const isMostlyVisible = (el) => {
  const r = el.getBoundingClientRect();
  const w = Math.min(r.right, window.innerWidth) - Math.max(r.left, 0);
  const h = Math.min(r.bottom, window.innerHeight) - Math.max(r.top, 0);
  if (w <= 0 || h <= 0) return false;
  return (w * h) / (r.width * r.height) >= VISIBLE_RATIO;
};

export default function ProjectsCarousel({
  selectedProject,
  onSelectProject,
  onClickProject,
}) {
  const n = projects.length;
  const selectedIndex = projects.indexOf(selectedProject);

  const rootRef = useRef(null);
  const lastNavRef = useRef(0);
  const lastPassRef = useRef(0);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const canStep = (dir) => {
      const next = selectedIndex + dir;
      return next >= 0 && next < n;
    };
    const step = (dir) => onSelectProject(projects[selectedIndex + dir]);

    const onWheel = (e) => {
      if (e.ctrlKey) return; // trackpad pinch-zoom, leave it alone

      const horizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY);
      const delta = horizontal ? e.deltaX : e.deltaY;
      if (delta === 0) return;

      const now = Date.now();
      const dir = delta > 0 ? 1 : -1;
      const cooling = now - lastNavRef.current < WHEEL_COOLDOWN;

      if (horizontal) {
        e.preventDefault();
      } else {
        const ownsScroll =
          isMostlyVisible(el) &&
          now - lastPassRef.current > PASS_THROUGH_GRACE &&
          (canStep(dir) || cooling);

        if (!ownsScroll) {
          lastPassRef.current = now;
          return;
        }
        e.preventDefault();
      }

      if (cooling || Math.abs(delta) < 10 || !canStep(dir)) return;
      lastNavRef.current = now;
      step(dir);
    };

    const onKeyDown = (e) => {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;

      const t = e.target;
      if (
        t.isContentEditable ||
        ["INPUT", "TEXTAREA", "SELECT"].includes(t.tagName)
      )
        return;
      if (!isMostlyVisible(el)) return; // e.g. camera is panned to details

      const dir = e.key === "ArrowRight" ? 1 : -1;
      if (canStep(dir)) step(dir);
    };

    // non-passive so preventDefault() works
    el.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKeyDown);
    return () => {
      el.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedIndex, n, onSelectProject]);

  const onProjectImageClick = (project, distance) => {
    if (distance === 0) {
      onClickProject(project);
    } else {
      onSelectProject(project);
    }
  };

  return (
    <div
      ref={rootRef}
      className="basis-12/15 flex flex-col justify-center gap-6"
    >
      <div className="relative w-full h-full overflow-hidden">
        {projects.map((project, index) => {
          const offset = index - selectedIndex; // no wrap-around
          const distance = Math.abs(offset);

          return (
            <div
              key={project.slug}
              onClick={() => onProjectImageClick(project, distance)}
              className={`absolute top-0 h-full bg-white transition-all duration-500 ease-in-out ${
                distance === 0
                  ? "opacity-80 cursor-pointer"
                  : distance === 1
                    ? "cursor-pointer opacity-40"
                    : "pointer-events-none opacity-0"
              }`}
              style={{
                width: `${ITEM_W}%`,
                left: `${50 - ITEM_W / 2}%`,
                transform: `translateX(${offset * STEP_PCT}%) scale(${distance === 0 ? 1 : 0.9})`,
              }}
            />
          );
        })}
      </div>

      <ProjectsCarouselNavigator
        projects={projects}
        selectedIndex={selectedIndex}
        onSelect={(index) => onSelectProject(projects[index])}
      />
    </div>
  );
}

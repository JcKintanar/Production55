import { useNavigate, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { useState } from "react";
import ProjectMediaCarousel from "../components/carousel/ProjectMediaCarousel";
import ProjectsCarousel from "../components/carousel/ProjectsCarousel";

export default function Gallery() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [currentSelectedProject, setCurrentSelectedProject] = useState(
    projects.find((project) => project.slug === slug) ?? projects[0],
  );

  const panCameraToLeft = () => navigate(`/gallery`);
  const panCameraToRight = (project) => navigate(`/gallery/${project.slug}`);

  const isProjectDetail = Boolean(slug);
  const cameraX = isProjectDetail ? 100 : 0;

  const mediaItems = (currentSelectedProject.media ?? []).flatMap((group) => [
    ...(group.video ? [{ type: "video", src: group.video }] : []),
    ...(group.images ?? []).map((src) => ({ type: "image", src })),
  ]);

  const onProjectNameClick = (selectedProject) => {
    setCurrentSelectedProject(selectedProject);
  };

  return (
    <section className="overflow-hidden">
      <div
        className="flex w-max transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${cameraX}vw)` }}
      >
        <div className="content-center min-h-lvh w-screen shrink-0 pt-[5vh]">
          <div className="h-full flex flex-col">
            {/* projects carousel */}
            <ProjectsCarousel
              selectedProject={currentSelectedProject}
              onClickProject={panCameraToRight}
              onSelectProject={onProjectNameClick}
            />
            {/* project brief details */}
            <div className="flex flex-col h-full">
              {currentSelectedProject && (
                <div className="mt-[3vh] mx-auto">
                  <div
                    key={currentSelectedProject.projectName}
                    className="animate-fade-in w-full text-center"
                  >
                    <div className="text-4xl">
                      {currentSelectedProject.projectName}
                    </div>
                    <div className="text-2xl font-prodFont">
                      {currentSelectedProject.briefDesc}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* TODO: make layout of project details */}
        <div className="w-screen shrink-0 flex flex-col">
          {/* back button */}
          <div className="absolute top-[3vh] left-[103vw] z-20">
            <button
              onClick={panCameraToLeft}
              className="group relative text-2xl cursor-pointer text-white transition-colors hover:text-prod-pink"
            >
              Back
              <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-right scale-x-0 bg-prod-pink transition-transform duration-300 ease-in-out group-hover:origin-left group-hover:scale-x-100" />
            </button>
          </div>

          {/* project media */}
          <ProjectMediaCarousel
            key={currentSelectedProject.slug}
            items={mediaItems}
            visible={isProjectDetail}
          />

          {/* project details */}
          <div className="basis-3/15">
            <div className="flex flex-col">
              {currentSelectedProject.artists != null ? (
                <div className="flex justify-center text-2xl">
                  {currentSelectedProject.projectName} by{" "}
                  {currentSelectedProject.artists}
                </div>
              ) : (
                <div className="mt-4 flex justify-center text-2xl">
                  {currentSelectedProject.projectName}
                </div>
              )}
              <div className="opacity-60 flex text-lg justify-center">
                {currentSelectedProject.client} |{"  "}
                {currentSelectedProject.director}
              </div>
              <div className="mt-3 text-lg mx-auto max-w-4xl text-center">
                {currentSelectedProject.fullDesc}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

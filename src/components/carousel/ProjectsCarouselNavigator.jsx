export default function ProjectsCarouselNavigator({
  projects,
  selectedIndex,
  onSelect,
}) {
  return (
    <nav
      aria-label="Project navigation"
      className="flex items-center justify-center"
    >
      {projects.map((project, index) => {
        const active = index === selectedIndex;

        return (
          <button
            key={project.slug}
            type="button"
            onClick={() => onSelect(index)}
            aria-label={`Go to ${project.projectName}`}
            aria-current={active ? "true" : undefined}
            className="group cursor-pointer p-2"
          >
            <span
              className={`block h-2 w-2 rounded-full transition-all duration-300 ease-in-out ${
                active
                  ? "scale-150 bg-prod-pink"
                  : "bg-white/40 group-hover:bg-white/80"
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
}

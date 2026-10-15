const ProductionHousePreview = () => {
  const projects = [
    {
      title: "CINEMATIC NOIR",
      year: "2025",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1",
    },
    {
      title: "URBAN VISTAS",
      year: "2026",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728",
    },
    {
      title: "THE LAST FRAME",
      year: "2024",
      image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen ">
      <main className="px-6 md:px-12 py-10 space-y-24">
        <section className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.4em] text-pink-400">
                Production 55
              </p>
              <h2 className="text-5xl md:text-6xl font-extrabold uppercase leading-tight">
                A premium creative studio for bold film and brand stories.
              </h2>
              <p className="max-w-xl text-gray-300 text-lg leading-8">
                From cinematic campaigns to immersive branded content,
                Production 55 delivers striking visuals, purposeful narrative,
                and uncompromising style.
              </p>
            </div>
            <div className="space-y-4">
              <div className="h-56 bg-[#ED037C] rounded-3xl shadow-[0_20px_80px_rgba(237,3,124,0.25)]"></div>
              <div className="h-56 bg-white rounded-3xl border border-gray-300"></div>
              <div className="h-56 bg-black rounded-3xl border border-white"></div>
            </div>
          </div>
        </section>

        <section id="films" className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-8">
            <div>
              <p className="text-pink-400 uppercase tracking-[0.4em] text-sm">
                Featured Work
              </p>
              <h3 className="text-4xl font-bold uppercase">Films</h3>
            </div>
            <p className="max-w-xl text-gray-400">
              A curated selection of recent productions with elevated visual
              direction and narrative clarity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <article
                key={index}
                className="group overflow-hidden rounded-3xl border border-gray-800 bg-[#0b0b0b] transition-all hover:-translate-y-1"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-2xl font-semibold uppercase tracking-tight">
                    {project.title}
                  </h4>
                  <p className="mt-2 text-sm text-gray-500 uppercase tracking-[0.2em]">
                    {project.year}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="library" className="max-w-6xl mx-auto">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div>
              <p className="text-pink-400 uppercase tracking-[0.4em] text-sm">
                Library
              </p>
              <h3 className="text-4xl font-bold uppercase">
                Collections + Archives
              </h3>
              <p className="mt-6 text-gray-300 leading-8">
                Explore our curated selection of mood boards, editorial stills,
                and visual research. Production 55 pairs cinematic imagery with
                a refined color system to support premium brand stories.
              </p>
            </div>
            <div className="grid gap-6">
              <div className="rounded-3xl border border-gray-800 bg-[#111] p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
                  Aesthetic
                </p>
                <p className="mt-4 text-lg text-white">
                  Modern, bold, dramatic, and elegantly minimal.
                </p>
              </div>
              <div className="rounded-3xl border border-gray-800 bg-[#111] p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
                  Mood
                </p>
                <p className="mt-4 text-lg text-white">
                  High contrast, sleek type, and cinematic lighting.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="color-scheme" className="max-w-6xl mx-auto">
          <p className="text-pink-400 uppercase tracking-[0.4em] text-sm">
            Color Scheme
          </p>
          <h3 className="text-4xl font-bold uppercase mb-10">
            Production 55 Palette
          </h3>
          <div className="space-y-4">
            <div className="rounded-3xl bg-[#ED037C] p-10 text-white font-semibold uppercase tracking-[0.25em]">
              #ED037C
            </div>
            <div className="rounded-3xl bg-white p-10 text-black font-semibold uppercase tracking-[0.25em] border border-gray-200">
              #FFFFFF
            </div>
            <div className="rounded-3xl bg-black p-10 text-white font-semibold uppercase tracking-[0.25em] border border-gray-700">
              #000000
            </div>
          </div>
        </section>

        <section id="contact" className="max-w-6xl mx-auto">
          <div className="rounded-[2rem] border border-gray-800 bg-[#080808] p-10">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
              <div>
                <p className="text-pink-400 uppercase tracking-[0.4em] text-sm">
                  Contact
                </p>
                <h3 className="text-4xl font-bold uppercase">
                  Work with Production 55
                </h3>
              </div>
              <div className="text-right">
                <p className="text-gray-400">hello@production55.com</p>
                <p className="text-gray-400">+1 212 555 0155</p>
              </div>
            </div>
            <p className="mt-8 text-gray-300 max-w-2xl leading-8">
              Let’s create memorable campaigns, films, and digital experiences
              with premium visual direction and a sharp creative identity.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductionHousePreview;

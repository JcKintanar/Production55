const Films = () => {
  const films = [
    { title: 'Noir Midnight', type: 'Short Film', year: '2025', description: 'A stylized thriller built around mood, motion, and heavy contrast lighting.' },
    { title: 'City Pulse', type: 'Branded Visual', year: '2026', description: 'A fast-paced city story that blends editorial direction with cinematic staging.' },
    { title: 'Glass Horizon', type: 'Commercial', year: '2024', description: 'A polished product narrative with rich color and refined atmospherics.' },
  ];

  return (
    <section className="bg-black text-white min-h-screen px-6 md:px-12 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="text-pink-400 uppercase tracking-[0.4em] text-sm">Films</p>
          <h2 className="text-5xl md:text-6xl font-black uppercase max-w-3xl">Every film is a unique world with its own visual language.</h2>
          <p className="mt-6 text-gray-300 max-w-2xl leading-8">Production 55 creates cinematic experiences that feel premium and unforgettable. Each project is designed with a custom aesthetic, tailored story, and strong emotional structure.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {films.map((film, index) => (
            <article key={index} className="rounded-[2rem] border border-gray-800 bg-[#090909] p-8 hover:border-pink-400 transition-all">
              <p className="text-sm uppercase tracking-[0.3em] text-gray-500">{film.type}</p>
              <h3 className="mt-4 text-3xl font-bold uppercase">{film.title}</h3>
              <p className="mt-3 text-gray-400">{film.description}</p>
              <p className="mt-6 text-xs uppercase tracking-[0.35em] text-gray-500">{film.year}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Films;

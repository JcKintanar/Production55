const Library = () => {
  const items = [
    { title: 'Brand Moodboard', detail: 'A curated visual palette of shape, texture, and cinematic color that defines the studio identity.' },
    { title: 'Type System', detail: 'A bold typographic system with heavy caps, tight tracking, and refined spacing for premium editorial layouts.' },
    { title: 'Visual Research', detail: 'A library of high-contrast stills, fashion-inspired frames, and tactile film-inspired scenes.' },
  ];

  return (
    <section className="bg-black text-white min-h-screen px-6 md:px-12 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="text-pink-400 uppercase tracking-[0.4em] text-sm">Library</p>
          <h2 className="text-5xl md:text-6xl font-black uppercase max-w-3xl">Unique assets, references, and visual direction for the brand.</h2>
          <p className="mt-6 text-gray-300 max-w-2xl leading-8">The Production 55 library is built to support creative briefs, mood development, and high-end storytelling across film, editorial, and digital media.</p>
        </div>

        <div className="space-y-6">
          {items.map((item, index) => (
            <article key={index} className="rounded-[2rem] border border-gray-800 bg-[#080808] p-8 hover:border-pink-400 transition-all">
              <h3 className="text-3xl font-bold uppercase">{item.title}</h3>
              <p className="mt-4 text-gray-400 leading-8">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Library;

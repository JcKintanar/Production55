const Contact = () => {
  return (
    <section className="bg-black text-white min-h-screen px-6 md:px-12 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <p className="text-pink-400 uppercase tracking-[0.4em] text-sm">Contact</p>
          <h2 className="text-5xl md:text-6xl font-black uppercase max-w-3xl">A unique creative collaboration begins with one message.</h2>
          <p className="mt-6 text-gray-300 max-w-2xl leading-8">Production 55 offers custom film direction, brand storytelling, and full creative production support. Reach out if you want an elevated visual identity, cinematic commercial, or branded content strategy.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-gray-800 bg-[#080808] p-10">
            <p className="text-pink-400 uppercase tracking-[0.4em] text-sm">Studio HQ</p>
            <p className="mt-4 text-xl text-white">New York, NY</p>
            <p className="mt-8 text-gray-400">Our studio works with premium brands to deliver films, campaigns, and digital experiences that feel modern, polished, and cinematic.</p>
          </div>

          <div className="rounded-[2rem] border border-gray-800 bg-[#080808] p-10 space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-pink-400">Email</p>
              <p className="mt-2 text-lg text-white">hello@production55.com</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-pink-400">Phone</p>
              <p className="mt-2 text-lg text-white">+1 212 555 0155</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-pink-400">Unique note</p>
              <p className="mt-2 text-gray-400">Every project starts with a three-step visual brief, moodboard research, and a signature pink accent built into the core identity system.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

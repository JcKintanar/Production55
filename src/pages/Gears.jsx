import { Link } from 'react-router-dom';
import gears from '../data/gears';

const Gears = () => {
  return (
    <section className="bg-black text-white min-h-screen px-6 md:px-12 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="text-pink-400 uppercase tracking-[0.4em] text-sm">Gears</p>
          <h2 className="text-5xl md:text-6xl font-black uppercase max-w-3xl">Equipment available for rent and production use.</h2>
          <p className="mt-6 text-gray-300 max-w-2xl leading-8">Showcase your premium kit with the studio-ready gear that supports cinematic shoots, branded content, and high-end production workflows.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {gears.map(item => (
            <Link
              key={item.id}
              to={`/gears/${item.id}`}
              className="rounded-[2rem] border border-gray-800 bg-[#080808] p-8 transition-all hover:border-pink-400 hover:bg-[#111]"
            >
              <p className="text-pink-400 uppercase tracking-[0.35em] text-sm">{item.category}</p>
              <h3 className="mt-4 text-3xl font-bold uppercase">{item.name}</h3>
              <p className="mt-4 text-gray-400 leading-8">{item.description}</p>
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] overflow-hidden border border-gray-800 bg-[#080808]">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80"
            alt="Production 55 equipment"
            className="w-full h-[420px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Gears;

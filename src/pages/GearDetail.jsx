import { useParams, Link } from 'react-router-dom';
import gears from '../data/gears';

const GearDetail = () => {
  const { id } = useParams();
  const item = gears.find(gear => gear.id === id);

  if (!item) {
    return (
      <section className="bg-black text-white min-h-screen px-6 md:px-12 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-pink-400 uppercase tracking-[0.4em] text-sm">Equipment</p>
          <h2 className="text-5xl font-black uppercase">Equipment not found</h2>
          <p className="mt-6 text-gray-400">Please go back to the gear list and select an available item.</p>
          <Link to="/gears" className="mt-8 inline-block rounded-full border border-pink-400 px-8 py-4 text-sm uppercase tracking-[0.25em] text-pink-400 hover:bg-pink-400 hover:text-black transition">Back to Gears</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-black text-white min-h-screen px-6 md:px-12 py-12">
      <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div className="space-y-8">
          <p className="text-pink-400 uppercase tracking-[0.4em] text-sm">Equipment</p>
          <h1 className="text-5xl md:text-6xl font-black uppercase">{item.name}</h1>
          <p className="text-gray-400 uppercase tracking-[0.35em] text-sm">{item.category}</p>
          <p className="text-lg text-gray-300 leading-8">{item.details}</p>
          <div className="rounded-[2rem] overflow-hidden border border-gray-800 bg-[#080808]">
            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
          </div>
          <div className="space-y-6">
            <p className="text-gray-300 leading-8">{item.description}</p>
          </div>
          <div className="rounded-[2rem] overflow-hidden border border-gray-800 bg-[#080808]">
            <video className="w-full" controls>
              <source src={item.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <Link to="/gears" className="inline-block rounded-full border border-pink-400 px-8 py-4 text-sm uppercase tracking-[0.25em] text-pink-400 hover:bg-pink-400 hover:text-black transition">Back to Gears</Link>
        </div>
      </div>
    </section>
  );
};

export default GearDetail;

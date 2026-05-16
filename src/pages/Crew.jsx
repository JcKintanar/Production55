import { Link } from 'react-router-dom';
import crew from '../data/crew';

const Crew = () => {
  return (
    <section className="bg-black text-white min-h-screen px-6 md:px-12 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 grid gap-10 lg:grid-cols-[1.3fr_0.9fr] items-center">
          <div>
            <p className="text-pink-400 uppercase tracking-[0.4em] text-sm">Crew</p>
            <h2 className="text-5xl md:text-6xl font-black uppercase max-w-3xl">Meet the team behind Production 55.</h2>
            <p className="mt-6 text-gray-300 max-w-2xl leading-8">Our crew brings distinct craft, strong creative direction, and experienced production leadership to every brand and film project.</p>
          </div>

          <div className="rounded-[2rem] overflow-hidden border border-gray-800 bg-[#080808]">
            <img
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80"
              alt="Production 55 crew group"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="rounded-[2rem] overflow-hidden border border-gray-800 mb-12">
          <video className="w-full h-full" controls>
            <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {crew.map(member => (
            <Link
              key={member.id}
              to={`/crew/${member.id}`}
              className="rounded-[2rem] border border-gray-800 bg-[#080808] p-6 transition-all hover:border-pink-400 hover:bg-[#111]"
            >
              <div className="rounded-[2rem] overflow-hidden border border-gray-900 mb-6">
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
              </div>
              <p className="text-pink-400 uppercase tracking-[0.35em] text-sm">{member.role}</p>
              <h3 className="mt-4 text-3xl font-bold uppercase">{member.name}</h3>
              <p className="mt-4 text-gray-400 leading-8">{member.bio}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Crew;

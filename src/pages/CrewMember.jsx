import { useParams, Link } from 'react-router-dom';
import crew from '../data/crew';

const CrewMember = () => {
  const { id } = useParams();
  const member = crew.find(person => person.id === id);

  if (!member) {
    return (
      <section className="bg-black text-white min-h-screen px-6 md:px-12 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-pink-400 uppercase tracking-[0.4em] text-sm">Crew</p>
          <h2 className="text-5xl font-black uppercase">Crew member not found</h2>
          <p className="mt-6 text-gray-400">Please return to the crew list and select a valid profile.</p>
          <Link to="/crew" className="mt-8 inline-block rounded-full border border-pink-400 px-8 py-4 text-sm uppercase tracking-[0.25em] text-pink-400 hover:bg-pink-400 hover:text-black transition">Back to Crew</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-black text-white min-h-screen px-6 md:px-12 py-12">
      <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div className="space-y-8">
          <p className="text-pink-400 uppercase tracking-[0.4em] text-sm">Crew Profile</p>
          <h1 className="text-5xl md:text-6xl font-black uppercase">{member.name}</h1>
          <p className="text-gray-400 uppercase tracking-[0.35em] text-sm">{member.role}</p>
          <p className="text-lg text-gray-300 leading-8">{member.bio}</p>
          <div className="rounded-[2rem] border border-gray-800 overflow-hidden">
            <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
          </div>
          <div className="space-y-6">
            <p className="text-gray-300 leading-8">{member.story}</p>
            <blockquote className="border-l-4 border-pink-400 pl-6 text-gray-300 italic">“{member.quote}”</blockquote>
          </div>
          <div className="rounded-[2rem] overflow-hidden border border-gray-800 bg-[#080808]">
            <video className="w-full" controls>
              <source src={member.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <Link to="/crew" className="inline-block rounded-full border border-pink-400 px-8 py-4 text-sm uppercase tracking-[0.25em] text-pink-400 hover:bg-pink-400 hover:text-black transition">Back to Crew</Link>
        </div>
      </div>
    </section>
  );
};

export default CrewMember;

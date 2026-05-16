import { Link } from 'react-router-dom';

const NotFound = () => (
  <section className="bg-black text-white min-h-screen px-6 md:px-12 py-12">
    <div className="max-w-4xl mx-auto text-center">
      <p className="text-pink-400 uppercase tracking-[0.4em] text-sm">404</p>
      <h2 className="mt-6 text-5xl font-black uppercase">Page not found</h2>
      <p className="mt-6 text-gray-400 leading-8">The page you were looking for does not exist. Return to the main site to explore films, library resources, and contact details.</p>
      <Link to="/" className="inline-block mt-8 rounded-full border border-pink-400 px-8 py-4 text-sm uppercase tracking-[0.25em] text-pink-400 hover:bg-pink-400 hover:text-black transition">Back to Home</Link>
    </div>
  </section>
);

export default NotFound;

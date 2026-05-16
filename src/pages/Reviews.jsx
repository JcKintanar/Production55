import { Link } from 'react-router-dom';

const Reviews = () => {
  return (
    <section className="bg-black text-white min-h-screen px-6 md:px-12 py-12">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <p className="text-pink-400 uppercase tracking-[0.4em] text-sm">Reviews</p>
            <h1 className="text-5xl md:text-6xl font-black uppercase max-w-3xl">Trusted by clients on Google.</h1>
            <p className="mt-6 text-gray-300 max-w-2xl leading-8">Our review page connects visitors directly to Google Reviews so they can read verified client feedback and discover why Production 55 is the trusted choice for premium film and branding work.</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.google.com/search?sca_esv=edd980de39096df0&sxsrf=ANbL-n4yoPwQAlScS8s3spfvghdIhwSpGQ:1778264459027&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOWkQFwREsHdUxCGWtcLAOD1qeSj4a3TNBUXN9z34KuRnCb4ZlvB4AHpZ0wQG826_NfcEbwxQ16A0skPcCqwyNVfrXrjqBSmCVKo-RG0MjL68k3_W8rhEGqk2VYEaR7qn2HvWqQ8%3D&q=Production+55+Multimedia+Services+Reviews&sa=X&ved=2ahUKEwi2pparp6qUAxUtxDgGHdPSFogQ0bkNegQINhAH&biw=958&bih=918&dpr=1"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-pink-400 bg-pink-400 px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-black transition hover:bg-white"
              >
                Read Google Reviews
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-white hover:text-black"
              >
                Book a consultation
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-gray-800 overflow-hidden bg-[#080808]">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
              alt="Client review on Google"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {[
            {
              name: 'Sofia Alvarez',
              text: 'Production 55 delivered a high-end campaign with flawless execution. The team was responsive and the final film exceeded our expectations.',
              rating: 5,
            },
            {
              name: 'Marcus Lee',
              text: 'Working with Production 55 was a seamless experience. Their crew knew how to bring our brand story to life with polish and energy.',
              rating: 5,
            },
            {
              name: 'Nina Patel',
              text: 'A professional studio with exceptional creative direction. The final edits were cinematic and perfectly on-brand.',
              rating: 5,
            },
          ].map((review, index) => (
            <article key={index} className="rounded-[2rem] border border-gray-800 bg-[#080808] p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-pink-400 flex items-center justify-center text-black font-black">{review.name.charAt(0)}</div>
                <div>
                  <h3 className="text-xl font-bold uppercase">{review.name}</h3>
                  <p className="text-pink-400 uppercase tracking-[0.25em] text-xs">Google review</p>
                </div>
              </div>
              <p className="text-gray-300 leading-8">“{review.text}”</p>
              <div className="mt-6 flex gap-1 text-yellow-300">
                {Array.from({ length: review.rating }).map((_, starIndex) => (
                  <span key={starIndex}>★</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="rounded-[2rem] border border-gray-800 p-8 bg-[#080808]">
          <h2 className="text-3xl font-bold uppercase">Google Reviews connection</h2>
          <p className="mt-4 text-gray-300 leading-8">This page is designed to drive visitors directly to your Google Reviews profile. The button above opens your Google Reviews search so prospects can see verified feedback and ratings in one place.</p>
          <p className="mt-4 text-gray-400">If you already have a Google Business profile, replace the review link with your exact business listing URL to make the connection even stronger.</p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

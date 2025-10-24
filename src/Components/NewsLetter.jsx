import React from "react";
import newsletterImg from "../assets/newsletter.jpg";

const Newsletter = () => {
  return (
    <div className="container mx-auto px-4 md:px-10 lg:px-20">
      <div className="bg-white/10 py-8 px-4 md:px-8 my-8 flex flex-col md:flex-row items-center gap-8 rounded-4xl">
        <div className="md:w-1/2 w-full">
          <img
            src={newsletterImg}
            alt="Subscribe for Updates"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="md:w-1/2 w-full bg-white/20 p-8 rounded-2xl">
          <h3 className="text-4xl font-semibold mb-4">Stay Updated!</h3>
          <p className="text-white/60 text-xl mb-6">
            Subscribe to our newsletter for winter pet care tips, offers, and
            updates.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 py-3 rounded-lg bg-[#006E5C]/50 focus:outline-none focus:ring-1 ring-yellow-400/50 px-5"
              required
            />
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-[#006E5C] font-semibold px-6 py-3 rounded-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

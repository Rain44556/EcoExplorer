import { useState } from "react";


const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with ${email}`);
    setEmail('');
  };

  return (
    <section className="bg-green-100 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 sm:text-4xl">
          Stay Updated with Eco Explore
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto sm:text-xl">
          Subscribe to our newsletter to get the latest updates, eco-tips, and adventure news right in your inbox.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="px-6 py-3 w-80 sm:w-96 text-gray-800 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            required
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-semibold transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;

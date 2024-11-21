

const AboutUs = () => {
  return (
    <section className="py-16 bg-gray-100 my-20">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 sm:text-4xl">
          About Us
        </h2>
        <p className="text-lg text-gray-600 mb-8 sm:text-xl max-w-3xl mx-auto">
          We are a passionate team committed to promoting eco-friendly adventures. Our mission is to connect people with nature while making a positive impact on the environment. Join us on this journey of discovery and sustainability!
        </p>
        <div className="flex justify-center items-center">
          <img 
            src="https://i.ibb.co.com/B4D7K3R/istockphoto-1443245439-612x612.jpg" 
            alt="Team Image" 
            className="w-32 h-32 rounded-full border-4 border-green-500 shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

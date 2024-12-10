import { useEffect, useState } from "react";


const EcoProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() =>{
      fetch("./products.json")
      .then(res => res.json())
      .then(data => setProducts(data))
  },[])

  
  return (
<>

<section className="bg-green-50 py-12">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">
      Eco Products
    </h2>
    <p className="text-lg text-gray-600 text-center mb-12">
      Explore our range of sustainable and eco-friendly products designed to help you make a positive impact on the planet.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

{
  products.map((product) =>(
    <div 
    key={product.id}
    className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
        <img
          src={product.image}
          alt="Reusable Bottle"
          className="w-52 object-cover h-56 mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h3>
        <p className="text-gray-600 mb-4">
        {product.description}
        </p>
      </div>
  ))
}
    </div>
    <div className="text-center mt-12">
      <button className="bg-green-600 text-white px-6 py-3 text-lg rounded-lg shadow-lg hover:bg-green-700 transition w-full">
        View All Products
      </button>
    </div>
  </div>
</section>


</>
  );
};

export default EcoProducts;

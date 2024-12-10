import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


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
    <h2 className="text-4xl font-titleFont font-bold text-gray-800 text-center mb-6">
      Eco Products
    </h2>
    <p className="text-lg text-gray-600 text-center mb-12">
      Explore our range of sustainable and eco-friendly products designed to help you make a positive impact on the planet.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

{
  products.map((product) =>(
    <div 
    key={product.id}
    className="bg-green-100 shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
        <img
          src={product.image}
          alt="Reusable Bottle"
          className="w-52 object-cover h-56 mx-auto mb-4"
        />
        <h3 className="text-sm font-titleFont font-semibold text-green-800 mb-2">{product.title}</h3>
        <p className="text-gray-500 mb-4 text-sm">
        {product.description}
        </p>
      </div>
  ))
}
    </div>
    <div className="text-center mt-12">
      <Link to={"/allEcoProducts"} className="btn w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
              All Products
              </Link>
    </div>
  </div>
</section>


</>
  );
};

export default EcoProducts;

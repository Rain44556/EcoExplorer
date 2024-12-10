
import { useEffect, useState } from "react";

const AllEcoProducts = () => {
        const [allProducts, setAllProducts] = useState([]);

        useEffect(() =>{
            fetch("./allEcoProduct.json")
            .then(res => res.json())
            .then(data => setAllProducts(data))
        },[])
      
      
        return (
      <>
      
      <section className="bg-green-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {
        allProducts.map((product) =>(
          <div 
          key={product.id}
          className="bg-green-100 shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
              <img
                src={product.image}
                alt="Reusable Bottle"
                className="w-52 object-cover h-56 mx-auto mb-4"
              />
              <h3 className="text-sm font-semibold text-green-800 mb-2 font-titleFont">{product.title}</h3>
              <p className="text-gray-500 mb-4 text-sm">
              {product.description}
              </p>
            </div>
        ))
      }
          </div>
        </div>
      </section>
      
      
      </>
    );
};

export default AllEcoProducts;
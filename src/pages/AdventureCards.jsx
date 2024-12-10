// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import { Link, } from "react-router-dom";

const AdventureCards = () => {
  const [adventureCards, setAdventureCards] = useState([]);
  useEffect(() =>{
      fetch("./adventure.json")
      .then(res => res.json())
      .then(data => setAdventureCards(data))
  },[])

  // console.log(adventureCards);
  return (
    <>
      <h1 className="text-center text-3xl font-bold py-10 font-titleFont">Adventure Experiences</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {adventureCards.map((adventure) => (
          <div
            key={adventure.id}
            className="border p-5 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <h2 className="text-xl text-center font-bold text-green-700 py-4">
              {adventure.title}
            </h2>
            <img
              src={adventure.image}
              
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <ul className="list-disc list-inside text-gray-700 mb-4">
                {adventure.ecoFriendlyFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <Link to={`/adventure/${adventure.id}`} className="btn w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
              Explore Now
              </Link>
            </div>
          </div>
        ))}
      </div>

    </>
  );
};

export default AdventureCards;
import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const AdventureDetails = () => {
    const { id } = useParams();
    const cardId = parseInt(id);

    const detailsData = useLoaderData();
    const findCard = detailsData.find(card => (card.id) === cardId)
    const {image, shortDescription, adventureCost, bookingAvailability, location, duration, adventureLevel, includedItems, maxGroupSize, specialInstructions, id: currentId } = findCard;
    // console.log(findCard);
    return (
        <div>
            <nav className="w-10/12 mx-auto py-8"><Navbar></Navbar></nav>
            <main className="w-10/12 mx-auto grid grid-cols-6 gap-5">
                <section className="col-span-4">
                    <div className="card lg:card-side bg-base-100 shadow-xl">
                        <figure>
                            <img
                                src={image}
                                alt="adventure" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Basic Information</h2>
                            <p>{shortDescription}</p>
                            <p className="flex gap-20"><span className="font-semibold">Location: </span> {location}</p>
                            <p className="flex gap-20"><span className="font-semibold">Duration:</span> {duration}</p>
                            <p className="flex gap-20"><span className="font-semibold">Adventure Level:</span> {adventureLevel}</p>
                            <p className="flex gap-20"><span className="font-semibold">Included:</span> {includedItems}</p>
                            <p className="flex gap-20"><span className="font-semibold">Group Limit:</span> {maxGroupSize}</p>
                            <p className="flex gap-20"><span className="font-semibold">Cost:</span> {adventureCost}</p>
                            <p className="flex gap-20"><span className="font-semibold">Booking Status:</span> {bookingAvailability === true ? "Available" : "Sorry! Not Available right now!"}</p>
                            <div className="card-actions">
                                <Link to={"/"} className="btn w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">Talk With Expert</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="col-span-2"><span className="font-bold">Special Instruction:</span> 
                    {
                        specialInstructions.map((instruction, index) => <p
                        key={index}>{instruction}</p>)
                    }
                    </section>
            </main>
        </div>
    );
};

export default AdventureDetails;
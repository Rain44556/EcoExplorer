import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Modal from 'react-modal';
import React from "react";

const AdventureDetails = () => {
    const { id } = useParams();
    const cardId = parseInt(id);

    const detailsData = useLoaderData();
    // console.log(detailsData);
    const findCard = detailsData.find(card => (card.id) === cardId)
    const {image, shortDescription, adventureCost, bookingAvailability, location, duration, adventureLevel, includedItems, maxGroupSize, specialInstructions } = findCard;
    // console.log(findCard);



    //Talk with expert modal
    const [modalIsOpen, setModalIsOpen] = React.useState(false);

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: '400px'
        },
      };

      function openModal() {
        setModalIsOpen(true);
    }

    
const navigate = useNavigate()
function closeModal() {
    setModalIsOpen(false);
    navigate("/");

}

    const handleTalkWithExpert = () => { 
        const presentTime = new Date();
        const presentHour = presentTime.getHours();

        if(presentHour >= 10 && presentHour <= 20){
            window.open("https://meet.google.com/tej-noyn-hxj");
        }else{
            openModal(); 
            setModalIsOpen(true);
        }
    }


    return (
        <div>
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
                                <button onClick={handleTalkWithExpert} className="btn w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">Talk With Expert</button>
                            </div>

                  
                              <Modal
                              isOpen={modalIsOpen}
                              // onAfterOpen={afterOpenModal}
                              onRequestClose={closeModal}
                              style={customStyles}
                              contentLabel="Example Modal"
                             
                          >
                              <div className='text-center py-7'>
                              <p className="text-gray-600">
                              Time slots for our consultations are <strong>10:00 AM</strong> and{" "}
              <strong>8:00 PM</strong>. During these hours, please come!
            </p>
                              </div>
                              <button onClick={closeModal} className='w-full px-4 py-2 my-3 border rounded-lg text-green-700 font-semibold focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent'>close</button>
                          </Modal>
                  

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
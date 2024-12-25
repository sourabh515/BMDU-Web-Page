import React, { useState } from 'react';

function PlanCard() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const plans = [
    { 
      id: 1, 
      image: './1.png', 
      planDetails: (
        <>
          <span>₹ 19 </span>
          <span style={{ textDecoration: 'line-through' }}>₹ 59</span>
        </>
      ), 
      planAccess: '1 Form access', 
      planValidity: 'then ₹59/form' 
    },
    { 
      id: 2, 
      image: './2.png', 
      planDetails: (
        <>
          <span>₹ 199 </span>
          <span style={{ textDecoration: 'line-through' }}>₹ 299</span>
        </>
      ), 
      planAccess: '2 Form access', 
      planValidity: 'then ₹79/form' 
    },
    { 
      id: 3, 
      image: './3.png', 
      planDetails: (
        <>
          <span>₹ 99 </span>
          <span style={{ textDecoration: 'line-through' }}>₹ 149</span>
        </>
      ), 
      planAccess: 'Monthly Plan', 
      planValidity: 'then ₹149/form' 
    },
    { 
      id: 4, 
      image: './3.png', 
      planDetails: (
        <>
          <span>₹ 99 </span>
          <span style={{ textDecoration: 'line-through' }}>₹ 199</span>
        </>
      ), 
      planAccess: '5 Form access', 
      planValidity: 'then ₹199/form' 
    }
  ];

  const handlePlanClick = (plan) => {
    setModalContent(plan);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalContent('');
  };

  return (
    <div className="plan w-full relative">
      {/* Modal background blur */}
      {showModal && (
        <div className="modal-overlay absolute inset-0 bg-black opacity-70"></div>
      )}

      {/* Modal content */}
      {showModal && (
        <div className="modal-content absolute mt-5 ml-3 w-[350px] bg-white p-8 rounded shadow-lg">
          <div className="modal-header flex justify-between">
            <h3 className="text-xl font-bold">Plan Details</h3>
            <button onClick={handleCloseModal} className="text-red-500">X</button>
          </div>
          <div className="modal-body">
            <p><strong>Price:</strong> {modalContent.planDetails}</p>
            <p><strong>Access:</strong> {modalContent.planAccess}</p>
            <p><strong>Validity:</strong> {modalContent.planValidity}</p>
          </div>
        </div>
      )}

      {/* Plans list */}
      {plans.map((plan) => (
        <div key={plan.id} className='flex flex-row gap-3 mb-4'>
          <div className="container">
            <img src={plan.image} alt={`Plan ${plan.id}`} />
          </div>
          <div className='buttons text-white'>
            <button
              onClick={() => handlePlanClick(plan)}
              className='bg-[#1564ad] w-[100px] mt-4 p-2 rounded'>
              Plan Details
            </button>
            <button
              onClick={() => handlePlanClick(plan)}
              className='bg-[#D73140] w-[100px] mt-4 p-2 rounded'>
              Get Plan
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PlanCard;

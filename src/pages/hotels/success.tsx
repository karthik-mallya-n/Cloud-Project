import Link from 'next/link';
import React from 'react';

const ThankYouCard: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-[#003580] text-white rounded-lg p-8 shadow-md">
        <h1 className="text-3xl font-bold mb-4">Thank you for booking on our platform!</h1>
        <p className="text-lg mb-8">We have emailed you the booking details.</p>
        
       <Link href={`/`}><button className="bg-white text-[#003580] py-2 px-4 rounded-md">Back to Home</button></Link>
      </div>
    </div>
  );
};

export default ThankYouCard;

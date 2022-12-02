import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {
  const cardData = [
    {
      id: 1,
      name: 'Opening Hours',
      time: 'Open 9.00 am to 5.00pm ',
      des: 'Monday to Thursday',
      icon: clock,
      bgClass: 'bg-gradient-to-r from-red-400 to-yellow-400',
    },
    {
      id: 2,
      name: 'Our Locations',
      time: 'Dhaka, Bangladesh',
      des: 'Monday to Thursday',
      icon: marker,
      bgClass: 'bg-gradient-to-r from-yellow-400 to-red-300',
    },
    {
      id: 3,
      name: 'Contact Us',
      time: 'Phone: +880 123 456789 ',
      des: 'Monday to Thursday',
      icon: phone,
      bgClass: 'bg-gradient-to-r from-red-400 to-gray-400',
    },
  ];

  return (
    <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {cardData.map((card) => (
        <InfoCard key={card.id} card={card}></InfoCard>
      ))}
    </div>
  );
};

export default InfoCards;

import React from 'react';

export const RatingStars = ({ rating }) => {
  // Calculate the number of filled stars based on the rating
  const filledStars = Math.round(rating); // Round to the nearest whole number
  const totalStars = 5; // Total number of stars to display

  return (
    <div className="flex items-center">
      {[...Array(totalStars)].map((_, index) => (
        <i
          key={index}
          className={`text-lg bi ${index < filledStars ? 'bi-star-fill text-yellow-500' : 'bi-star text-yellow-500'} mr-1`}
        ></i>
      ))}
    </div>
  );
};

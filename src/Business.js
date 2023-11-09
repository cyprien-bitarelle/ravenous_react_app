import React from "react";

const business = {
  imageSrc:
    "https://cdn.pixabay.com/photo/2021/04/26/12/31/kebab-6208833_1280.jpg",
  name: "Nabab",
  address: "404 road Forbidden",
  city: "Somewhere",
  state: "France",
  zipCode: "10101",
  category: "Turkish",
  rating: 4,
  reviewCount: 90,
};

export default function Business() {
  return (
    <>
      <div>
        <img src={business.imageSrc} alt="A Doner Kebab" />
        <h3>{business.name}</h3>
        <p>{business.address}</p>
        <p>{business.city}</p>
        <p>
          {business.state} {business.zipCode}
        </p>
        <p>{business.category}</p>
        <p>{business.rating}</p>
        <p>{business.reviewCount}</p>
      </div>
    </>
  );
}

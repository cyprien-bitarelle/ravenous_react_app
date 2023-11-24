import React from "react";
import styles from "./Business.module.css";

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
      <div className={styles.card}>
        <img
          className={styles.cardImgTop}
          src={business.imageSrc}
          alt="A Doner Kebab"
        />
        <h3 className={styles.cardTitle}>{business.name}</h3>
        <ul className={styles.cardBody}>
          <li>{business.rating}</li>
          <li>{business.reviewCount}</li>
          <li>{business.category}</li>
          <li>
            {business.state} {business.zipCode}
          </li>
          <li>{business.city}</li>
          <li>{business.address}</li>
        </ul>
      </div>
    </>
  );
}

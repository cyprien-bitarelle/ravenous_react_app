import React from "react";
import styles from "./Business.module.css";

export default function Business({ business }) {
  return (
    <>
      {
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
      }
    </>
  );
}

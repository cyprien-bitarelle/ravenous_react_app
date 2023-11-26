import React from "react";
import Business from "../Business/Business";
import styles from "./BusinessList.module.css";

export default function BusinessList({ businesses }) {
  return (
    <>
      <div className={styles.container}>
        {businesses.map((business) => {
          return <Business business={business} key={business.name} />;
        })}
      </div>
    </>
  );
}

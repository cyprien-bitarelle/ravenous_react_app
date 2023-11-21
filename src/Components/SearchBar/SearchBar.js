import React from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  return (
    <>
      <p>Best Match</p>
      <p>Highest Rated</p>
      <p>Most Reviewed</p>
      <div className={styles.form}>
        <input className={styles.inputs} placeholder="Search Businesses" />
        <input className={styles.inputs} placeholder="Where?" />
        <input className={styles.inputs} type="button" value="Let's Go" />
      </div>
    </>
  );
}

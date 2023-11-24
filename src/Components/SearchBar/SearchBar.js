import React from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  return (
    <>
      <div className={styles.searchBar}>
        <ul className={styles.sortedBy}>
          <li>Best Match</li>
          <li>Highest Rated</li>
          <li>Most Reviewed</li>
        </ul>
        <div className={styles.form}>
          <input className={styles.inputs} placeholder="Search Businesses" />
          <input className={styles.inputs} placeholder="Where?" />
          <input className={styles.inputs} type="button" value="Let's Go" />
        </div>
      </div>
    </>
  );
}

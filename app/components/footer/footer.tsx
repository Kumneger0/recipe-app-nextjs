import React from "react";
import styles from "./footer.module.css";
export default function Footer(): JSX.Element {
  return (
    <div className={styles.container}>
      <div>
        <span>&copy;</span>
        <span>Recipe 2023</span>
      </div>
    </div>
  );
}

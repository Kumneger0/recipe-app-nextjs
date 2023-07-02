"use client";
import React from "react";
import styles from "./header.module.css";
import BasicModal from "../Modal/modal";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}
          className={styles.container}
        >
          <a className={styles.navLogo} href="/">
            Tasty
          </a>
          <BasicModal />
        </div>
      </header>
    </>
  );
}

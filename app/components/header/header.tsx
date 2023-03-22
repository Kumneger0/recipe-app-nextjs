"use client";
import React from "react";
import styles from "./header.module.css";
import BasicModal from "../Modal/modal";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <a className={styles.navLogo} href="/">
            Tasty
          </a>
          <BasicModal />
        </div>
      </header>
    </>
  );
}

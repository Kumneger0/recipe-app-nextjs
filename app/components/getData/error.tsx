"use client";
import React from "react";
import styles from "./error.module.css";
import Link from "next/link";
import Button from "@mui/material/Button";
export default function Error() {
  return (
    <div
      className={styles.errorContainer}
      style={{
        width: "80%",
        height: `${innerHeight - innerHeight * 0.3}px`,
      }}
    >
      <div>oops! There was an error</div>
      <Link className={styles.BackToHomeLink} href="/">
        <Button>Back To Home page</Button>
      </Link>
    </div>
  );
}

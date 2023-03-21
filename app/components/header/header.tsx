"use client";
import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";

export default function Header() {
  return (
    <>
      <Navbar className="navBar position-fixed w-100" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Tasty</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

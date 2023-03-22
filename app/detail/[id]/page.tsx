"use client";
import React from "react";
import Header from "@/app/components/header/header";
import Container from "react-bootstrap/Container";
import Detail from "./detail";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Metadata } from "next";
import Footer from "@/app/components/footer/footer";
export const metadata: Metadata = {
  title: "dynamic rote",
  description: "no decription",
};
export default function page({ params }: any) {
  const { id } = params;
  const queryClient = new QueryClient();

  return (
    <>
      <div>
        <Header />
      </div>
      <Container className="mt-5">
        <QueryClientProvider client={queryClient}>
          <Detail id={id} />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </Container>
      <Footer />
    </>
  );
}

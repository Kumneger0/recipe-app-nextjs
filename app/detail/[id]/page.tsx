"use client";
import React from "react";
import Header from "@/app/components/header/header";
import Detail from "./detail";
import { QueryClientProvider, QueryClient } from "react-query";
import Footer from "@/app/components/footer/footer";

export default function page({ params }: any) {
  const { id } = params;
  const queryClient = new QueryClient();

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="mt-5">
        <QueryClientProvider client={queryClient}>
          <Detail id={id} />
        </QueryClientProvider>
      </div>
      <Footer />
    </>
  );
}

"use client";
import React from "react";
import Detail from "./detail";
import { QueryClientProvider, QueryClient } from "react-query";

export default function page({ params }: any) {
  const { id } = params;
  const queryClient = new QueryClient();

  return (
    <>
      <div className="mt-5">
        <QueryClientProvider client={queryClient}>
          <Detail id={id} />
        </QueryClientProvider>
      </div>
    </>
  );
}

"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import GetData from "../getData/getData";
import { ReactQueryDevtools } from "react-query/devtools";
import Container from "react-bootstrap/Container";
export default function Querywrapper() {
  const queryClient = new QueryClient();

  return (
    <>
      <Container>
        <QueryClientProvider client={queryClient}>
          <GetData />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Container>
    </>
  );
}

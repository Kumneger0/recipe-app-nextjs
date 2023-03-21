import React, { Suspense } from "react";
import GetData from "../getData/getData";
import "./queryWrapper.css";
import Loading from "../getData/loading";
import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary";
import Error from "../getData/error";
// const GetData = lazy(() => import("../getData/getData"));
export default function Querywrapper(): JSX.Element {
  return (
    <>
      {/* <ErrorBoundary> */}
      <Suspense fallback={<Loading />}>
        {/*@ts-expect-error Server Component*/}

        <GetData />
      </Suspense>
      {/* </ErrorBoundary> */}
    </>
  );
}

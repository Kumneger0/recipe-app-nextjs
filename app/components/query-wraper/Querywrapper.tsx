import React, { Suspense } from "react";
import GetData from "../getData/getData";
import "./queryWrapper.css";
import Loading from "../getData/loading";
export default function Querywrapper(): JSX.Element {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <GetData />
      </Suspense>
    </>
  );
}

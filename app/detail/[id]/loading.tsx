import React from "react";
import "./loading.css";

export default function Loading() {
  return (
    <>
      {" "}
      <div className="container w-100 mt-4">
        <div className="row w-100 d-flex justify-content-center ">
          <div className="skeleton skeleton-name slug fs-2"></div>
          <div className="skeleton skeleton-description"></div>
          <div className="skeleton skeleton-description"></div>
          <div className="skeleton skeleton-description-last"></div>
        </div>
        <div className="row m-3 d-flex ">
          <div className="col col-md-3 col-sm-8 ">
            {/* eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element */}
            <img className="skeleton skeleton-image" />
          </div>
          <div className="col d-flex col-sm-12 col-md-9 justify-content-center">
            <div
              className="skeleton skeleton-card"
              style={{ width: "100%", height: "600px" }}
            >
              <div className="btn-header d-flex w-100 justify-content-around">
                <div className="skeleton skeleton-btn"></div>
                <div className="skeleton skeleton-btn"></div>
                <div className=" skeleton skeleton-btn"></div>
              </div>
              <div>
                <div>
                  <div className="nutrition fs-3 w-100"></div>
                  <div className="w-100 d-flex justify-content-center flex-column"></div>
                </div>

                <div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

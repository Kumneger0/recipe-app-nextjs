/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./loading.css";
import "bootstrap/dist/css/bootstrap.min.css";
const placeholderForSkeletonLoading = [1, 2, 3, 4, 5, 6, 7, 8, 9];
export default function Loading(): JSX.Element {
  return (
    <div className="w-100">
      <div className="wrapper mt4">
        <div className="mt-5">
          <h3 className="skeleton skeleton-all-recipe all-reciepe"></h3>
          <div className="d-flex flex-wrap w-100 justify-content-center">
            {placeholderForSkeletonLoading.map((reciepe: any, indx) => {
              return (
                <div
                  key={indx}
                  className="skeleton skeleton-card m-4 p-2 overflow-hidden w-25 cards"
                >
                  {/* @eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    style={{ width: "100%", height: "auto" }}
                    src={reciepe.thumbnail_url}
                    className="skeleton skeleton-img thumbnail w-100 w-100"
                  />
                  <div>
                    <span className="w-100 overflow-hidden text-black"></span>
                    <div className="skeleton skeleton-description d-flex text-black">
                      <span className="skeleton skeleton-time-info m-1"></span>{" "}
                      <span className="skeleton skeleton-time m-1"></span>
                    </div>
                    <div className="skeleton skeleton-rate rating text-black">
                      {" "}
                      <span></span>
                    </div>
                    <div></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

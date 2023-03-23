"use client";
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./loading.css";
const placeholderForSkeletonLoading = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
export default function Loading(): JSX.Element {
  return (
    <div className="conatainer">
      <div className="wrapper">
        <div className="">
          <h3 className="skeleton skeleton-all-recipe all-reciepe"></h3>
          <div className="skeletonFlexWrapper">
            {placeholderForSkeletonLoading.map((reciepe: any, indx) => {
              return (
                <div key={indx} className="skeleton skeleton-card  cards">
                  {/* @eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    style={{ width: "100%", height: "auto" }}
                    src={reciepe.thumbnail_url}
                    className="skeleton skeleton-img thumbnail w-100 w-100"
                  />
                  <div>
                    <span></span>
                    <div className="skeleton skeleton-description">
                      <span className="skeleton skeleton-time-info"></span>{" "}
                      <span className="skeleton skeleton-time"></span>
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

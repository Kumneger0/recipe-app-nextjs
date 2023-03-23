import React from "react";
import "./loading.css";

export default function Loading() {
  return (
    <>
      {" "}
      <div className="detailSeletonContainer">
        <div>
          <div className="skeleton skeleton-name slug"></div>
          <div className="skeleton skeleton-description"></div>
          <div className="skeleton skeleton-description"></div>
          <div className="skeleton skeleton-description-last"></div>
        </div>
        <div className="loadingFlexWrapper">
          <div className="skeleton skeleton-image">
            {/* eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element */}
            <img className="skeleton image" />
          </div>
          <div className="skeleton skeleton-card">
            <div>
              <div className="btn-header">
                <div className="skeleton skeleton-btn"></div>
                <div className="skeleton skeleton-btn"></div>
                <div className=" skeleton skeleton-btn"></div>
              </div>
              <div>
                <div>
                  <div className="nutrition"></div>
                  <div></div>
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

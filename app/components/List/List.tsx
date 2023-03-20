import React from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import "./list.css";
import { Recipes } from "@/app/types";
import Image from "next/image";
export default function List({ reciepe }: Recipes) {
  return (
    <div className="wrapper mt4">
      <div className="mt-5">
        <h3 className="all-reciepe">All recipes</h3>
        <div className="d-flex flex-wrap w-100 justify-content-center">
          {reciepe.map((reciepe: any) => {
            return (
              <div
                key={reciepe.id}
                className="m-4 p-2 overflow-hidden w-25 cards"
              >
                <Link
                  className="text-decoration-none d-inline"
                  href={`/detail/${reciepe.id}`}
                >
                  <Image
                    width={600}
                    height={600}
                    alt="reciepe images"
                    style={{ width: "100%", height: "auto" }}
                    src={reciepe.thumbnail_url}
                    className="thumbnail w-100 w-100"
                  />
                  <div>
                    <span className="w-100 mt-1  bg-color overflow-hidden text-black">
                      {reciepe.name}
                    </span>
                    <div className="d-flex bg-color mt-1 text-black">
                      <span className="">Cook time </span>{" "}
                      <span className="ml-1 ">
                        -{reciepe.total_time_tier.display_tier}
                      </span>
                    </div>
                    <div className=" bg-color rating text-black">
                      {" "}
                      <span>rate</span> {reciepe.user_ratings.score}/1
                    </div>
                    <div></div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

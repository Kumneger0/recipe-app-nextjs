import "server-only";
import React from "react";
import Link from "next/link";
import "./list.css";
import { Recipes } from "@/app/types";
import Image from "next/image";
import MediaCard from "./card";
export default function List({ reciepe }: Recipes) {
  return (
    <div className="wrapper">
      <div>
        <h3 className="all-reciepe">All recipes</h3>
        <div className="flex-wrapper">
          {reciepe.map((reciepe: any) => {
            return (
              <div key={reciepe.id} className="cards">
                <MediaCard
                  data={{
                    img_url: reciepe.thumbnail_url,
                    item_id: reciepe.id,
                    item_name: reciepe.name,
                    cook_time: reciepe.total_time_tier.display_tier,
                    rate: reciepe.user_ratings.score,
                    description: reciepe.description,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
      <></>
    </div>
  );
}

/* <Link className="link" href={`/detail/${reciepe.id}`}>
                  <Image
                    width={600}
                    height={600}
                    alt="reciepe images"
                    style={{ width: "100%", height: "auto" }}
                    src={reciepe.thumbnail_url}
                    className="thumbnail w-100 w-100"
                  />
                  <div>
                    <span className="recipe-name">{reciepe.name}</span>
                    <div className="cook time">
                      <span className="">Cook time </span>{" "}
                      <span className="ml-1 ">
                        -{reciepe.total_time_tier.display_tier}
                      </span>
                    </div>
                    <div className=" bg-color rating">
                      {" "}
                      <span>rate</span> {reciepe.user_ratings.score}/1
                    </div>
                    <div></div>
                  </div>
                </Link>*/

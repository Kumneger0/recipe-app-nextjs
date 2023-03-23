import "server-only";
import React from "react";
import "./list.css";
import { Recipes } from "@/app/types";
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
                    cook_time: reciepe?.total_time_tier?.display_tier,
                    rate: reciepe?.user_ratings?.score,
                    description: reciepe?.description,
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

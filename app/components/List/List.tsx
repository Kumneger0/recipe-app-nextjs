import React from "react";
import Link from "next/link";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./list.css";
import { Recipes } from "@/app/types";
import Image from "next/image";
export default function List({ reciepe }: Recipes) {
  return (
    <div className="mt-3">
      <h3 className="all-reciepe">All recipes</h3>
      <div className="d-flex flex-wrap w-100 justify-content-center">
        {reciepe.map((reciepe: any) => {
          return (
            <Card key={reciepe.id} className="m-4 p-2 overflow-hidden w-25">
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
                <Card.Body>
                  <span className="w-100 overflow-hidden">{reciepe.name}</span>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Link>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

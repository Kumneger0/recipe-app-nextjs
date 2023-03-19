"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Error from "@/app/components/getData/error";
import { useQuery, useQueryClient } from "react-query";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Metadata } from "next";
import Image from "next/image";
let isError: boolean;
let isSuccess: Boolean;
let data: any;
let isLoading: boolean;
async function fetchData(query: any) {
  const id = query.queryKey[0];
  const options = {
    method: "GET",
    url: "https://tasty.p.rapidapi.com/recipes/get-more-info",
    params: { id },
    headers: {
      "X-RapidAPI-Key": "d0ca022650mshf6f29a711c5a66dp113cb4jsnb35e2dd638b5",
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };

  const url = new URL("https://tasty.p.rapidapi.com/recipes/get-more-info");
  const searchParams = url.searchParams;
  searchParams.append("id", id);
  const responce = await fetch(url.href, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d0ca022650mshf6f29a711c5a66dp113cb4jsnb35e2dd638b5",
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  });
  if (responce.ok) return await responce.json();
  throw Error();
}

export default function Detail({ id }: any): JSX.Element {
  const query = useQueryClient();
  ({ isError, isSuccess, isLoading, data } = useQuery({
    queryKey: id,
    queryFn: (id) => fetchData(id),
  }));
  if (isError) return <Error />;
  if (isLoading) return <span className="mt-3">please wait</span>;
  console.log(data);
  return (
    <>
      <div className="container w-100 mt-4">
        <div className="row w-100 d-flex justify-content-center ">
          <div className="slug fs-2">{data?.name}</div>
          <div className="description">{data?.description}</div>
        </div>
        <div className="row d-flex ">
          <div className="col col-md-3 col-sm-8 ">
            <Image
              src={data?.thumbnail_url}
              width="400"
              height="600"
              alt="reciepe image"
            />
          </div>
          <div className="col  d-flex col-sm-12 col-md-9 justify-content-center">
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <Card.Title>Instruction</Card.Title>
                {data?.instructions.map((ins: any, i: number) => {
                  return (
                    <div className="m-3" key={ins.id}>
                      <span className="fs-5">{`step ${i + 1}`}</span>
                      <Card.Text>{ins.display_text}</Card.Text>
                    </div>
                  );
                })}
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export const metadata: Metadata = {
  title: data?.data.name,
  description: data?.data.slug,
};

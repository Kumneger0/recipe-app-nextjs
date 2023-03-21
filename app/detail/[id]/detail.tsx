"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Error from "@/app/components/getData/error";
import { useQuery, useQueryClient } from "react-query";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Loading from "./loading";
import { Metadata } from "next";
import Link from "next/link";
import ReactPlayer from "react-player/lazy";
import Image from "next/image";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import OutlinedCard from "./card";
import "./detail.css";
let isError: boolean;
let isSuccess: Boolean;
let data: any;
let isLoading: boolean;
async function fetchData(query: any) {
  const id = query.queryKey[0];
  const responce = await fetch(`/api/detail/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(responce);
  if (responce.ok) return await responce.json();
  throw Error();
}

export default function Detail({ id }: any): JSX.Element {
  const [selectedBtn, setSelectedBtn] = useState<string>("instructions");
  const query = useQueryClient();
  ({ isError, isSuccess, isLoading, data } = useQuery({
    queryKey: id,
    queryFn: (id) => fetchData(id),
  }));
  if (isError) return <Error />;
  if (isLoading) return <Loading />;
  console.log(data);
  return (
    <>
      <div className="container w-100 mt-4">
        <div className="row w-100 d-flex justify-content-center ">
          <Link className="backToTheList" href={"/"}>
            <ArrowBackIosNewIcon /> Back To The List
          </Link>
          <div className="slug fs-2">{data?.name}</div>
          <div className="description">{data?.description}</div>
        </div>
        <div className="row m-3 d-flex ">
          <div className="col img col-md-3 col-sm-8 ">
            <Image
              src={data?.thumbnail_url}
              width="400"
              height="600"
              alt="reciepe image"
              className="image"
            />
          </div>
          <div className="col d-flex col-sm-12 col-md-9 justify-content-center">
            <OutlinedCard
              data={{
                instruction: data.instructions,
                nutrition: data.nutrition,
                video: data.original_video_url,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

/* <Card style={{ width: "100%", height: "600px" }}>
              <div className="btn-header d-flex w-100 justify-content-around">
                <Button
                  style={{
                    background:
                      selectedBtn == "instructions"
                        ? "#fff"
                        : "rgb(143, 135, 250",
                    color: selectedBtn == "instructions" ? "black" : "#fff",
                  }}
                  className="btn"
                  variant="Secondary m-2 overflow-hidden"
                  onClick={() => setSelectedBtn("instructions")}
                >
                  Instructions
                </Button>
                <Button
                  style={{
                    background:
                      selectedBtn == "Neutreints"
                        ? "#fff"
                        : "rgb(143, 135, 250",
                    color: selectedBtn == "Neutreints" ? "black" : "#fff",
                  }}
                  className="btn"
                  variant="primary m-2 overflow-hidden"
                  onClick={() => setSelectedBtn("Neutreints")}
                >
                  Neutreints
                </Button>
                <Button
                  style={{
                    background:
                      selectedBtn == "video" ? "#fff" : "rgb(143, 135, 250",
                    color: selectedBtn == "video" ? "black" : "#fff",
                  }}
                  className="btn"
                  variant="primary m-2 overflow-hidden"
                  onClick={() => setSelectedBtn("video")}
                >
                  Video
                </Button>
              </div>
              <Card.Body style={{ width: "100%", height: "100%" }}>
                {selectedBtn == "instructions" &&
                  data?.instructions.map((ins: any, i: number) => {
                    return (
                      <div className="m-3" key={ins.id}>
                        <span className="fs-5">{`step ${i + 1}`}</span>
                        <Card.Text>{ins.display_text}</Card.Text>
                      </div>
                    );
                  })}
                {selectedBtn == "Neutreints" && (
                  <div>
                    <div className="nutrition fs-3 w-100">nutrition</div>
                    <div className="w-100 d-flex justify-content-center flex-column">
                      {Object.keys(data?.nutrition)
                        .sort()
                        .map((key: string, i: number) => {
                          return (
                            <>
                              <div
                                key={i}
                              >{`${key} ${data?.nutrition[key]}`}</div>
                            </>
                          );
                        })}
                    </div>
                  </div>
                )}

                {selectedBtn == "video" && (
                  <div>
                    <div>
                      <ReactPlayer
                        url={data?.original_video_url}
                        width="640"
                        controls={true}
                        pip={true}
                      />
                    </div>
                  </div>
                )}
              </Card.Body>
            </Card>*/

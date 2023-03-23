"use client";
import React, { useState } from "react";
import Error from "@/app/components/getData/error";
import { useQuery, useQueryClient } from "react-query";
import Loading from "./loading";
import Link from "next/link";
import Image from "next/image";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import OutlinedCard from "./card";
import styles from "./detail.module.css";
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
      <div className={styles.container}>
        <div>
          <Link className={styles.backToTheList} href={"/"}>
            <ArrowBackIosNewIcon /> Back To The List
          </Link>
          <div className={styles.name}>{data?.name}</div>
          <div className={styles.description}>{data?.description}</div>
        </div>
        <div className={styles.flex_wrapper}>
          <div className={`${styles.flex_item}, ${styles.item1}`}>
            <Image
              src={data?.thumbnail_url}
              width="400"
              height="600"
              alt="reciepe image"
              className={styles.image}
            />
          </div>
          <div className={styles.flex_item}>
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

import axios, { AxiosResponse } from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";
import List from "../List/List";
import Loading from "./loading";
import Error from "./error";
import { useEffect } from "react";

async function fetchData() {
  const url = new URL("https://tasty.p.rapidapi.com/recipes/list");
  const searchParams = url.searchParams;
  searchParams.append("from", "0");
  searchParams.append("size", "12");
  searchParams.append("tags", "under_30_minutes");
  const responce = await fetch(url.href, {
    method: "Get",
    headers: {
      "X-RapidAPI-Key": "d0ca022650mshf6f29a711c5a66dp113cb4jsnb35e2dd638b5",
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  });
  console.log(responce);
  if (responce.ok) return await responce.json();
  if (!responce.ok) return Error();
}

export default function GetData(): JSX.Element {
  useEffect(() => {}, []);
  const query = useQueryClient();
  const { isError, isSuccess, isLoading, data } = useQuery({
    queryKey: "allRecipe",
    queryFn: fetchData,
  });
  if (isError) return <Error />;
  if (isLoading) return <Loading />;
  return (
    <div>
      <List reciepe={data?.results} />
    </div>
  );
}

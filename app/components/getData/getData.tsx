"use client";
import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";
import List from "../List/List";

async function fetchData() {
  const options = {
    method: "GET",
    url: "https://tasty.p.rapidapi.com/recipes/list",
    params: { from: "0", size: "12", tags: "under_30_minutes" },
    headers: {
      "X-RapidAPI-Key": "d0ca022650mshf6f29a711c5a66dp113cb4jsnb35e2dd638b5",
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };

  const res = await axios.request(options);
  return res;
}

export default function GetData() {
  const query = useQueryClient();
  const { isError, isSuccess, isLoading, data } = useQuery({
    queryKey: "allRecipe",
    queryFn: fetchData,
  });
  if (isError) return <h1>there was an err</h1>;
  if (isLoading) return <h1>please wait</h1>;
  console.log(data?.data);
  if (isSuccess)
    return (
      <div>
        <List reciepe={data.data.results} />
      </div>
    );
}

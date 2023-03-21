import { NextResponse } from "next/server";
import axios from "axios";
export async function GET(request: Request) {
  const param = request.url.split("/").pop();
  console.log(param);

  const options = {
    method: "GET",
    url: "https://tasty.p.rapidapi.com/recipes/auto-complete",
    params: { prefix: param },
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };

  const responce = await axios.request(options);
  return NextResponse.json(responce.data);
}

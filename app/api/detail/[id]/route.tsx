import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const search = new URL(request.url).searchParams;
  console.log(search.get("id"));
  const id = request.url.split("/").pop();
  console.log(id);
  const url = new URL("https://tasty.p.rapidapi.com/recipes/get-more-info");
  url.searchParams.append("id", id);
  const responce = await fetch(url.href, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY!,
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  });
  const data = await responce.json();
  return NextResponse.json(data);
}

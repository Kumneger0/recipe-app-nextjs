import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const res = await fetch(
    "https://api.spoonacular.com/food/search?query=apple&number=2&apiKey=2b9e210b50ec4fa5be72b4add08eac68"
  );
  const data = await res.json();
  return NextResponse.json(data);
}

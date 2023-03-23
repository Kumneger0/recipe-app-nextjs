import List from "../List/List";
import Loading from "./loading";
import Error from "./error";

async function fetchData() {
  const url = new URL("https://tasty.p.rapidapi.com/recipes/list");
  const searchParams = url.searchParams;
  searchParams.append("from", "0");
  searchParams.append("size", "28");
  searchParams.append("tags", "under_30_minutes");
  const responce = await fetch(url.href, {
    method: "Get",
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY!,
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  });
  if (responce.ok) return await responce.json();
  if (!responce.ok) return Error;
}

export default async function GetData(): Promise<JSX.Element> {
  const data = await fetchData();
  console.log(data);
  return (
    <div>
      <List reciepe={data?.results} />
    </div>
  );
}

import List from "../List/List";
import Loading from "./loading";
import Error from "./error";

async function fetchData() {
  const url = new URL("https://tasty.p.rapidapi.com/recipes/list");
  const searchParams = url.searchParams;
  searchParams.append("from", "0");
  searchParams.append("size", "12");
  searchParams.append("tags", "under_30_minutes");
  const responce = await fetch(url.href, {
    cache: "no-cache",
    method: "Get",
    headers: {
      "X-RapidAPI-Key": "7320a25616mshc031aecbb8524e1p108be3jsn12c8d64b59d5",
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

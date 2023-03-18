import Header from "./components/header/header";
import Querywrapper from "./components/query-wraper/Querywrapper";

export default function Home() {
  return (
    <>
      <section>
        <Header />
      </section>
      <main>
        <Querywrapper />
      </main>
    </>
  );
}

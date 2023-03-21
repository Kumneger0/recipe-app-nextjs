import Header from "./components/header/header";
import Querywrapper from "./components/query-wraper/Querywrapper";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <>
      <section>
        <Header />
      </section>
      <main>
        <Querywrapper />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

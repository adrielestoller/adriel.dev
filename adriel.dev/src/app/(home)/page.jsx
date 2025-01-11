import home from "styles/home.module.css";
import Navbar from "components/navbar";

export const metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={home.container}>
        <h1>Hello World!</h1>
      </main>
    </>
  );
}

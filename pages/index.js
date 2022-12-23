import axios from "axios";
import Head from "next/head";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";

export default function Home({ pizzaList }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in Newyork</title>
        <meta name="description" content="Best pizza in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList pizzaList={pizzaList} />
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;


  
  const res = await axios.get("http://localhost:3000/api/products/");

  return { props: { pizzaList: res.data } };
};

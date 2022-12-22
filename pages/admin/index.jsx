import axios from "axios";
import Image from "next/image";
import styles from "../../styles/Admin.module.css";

const index = ({ orders, products }) => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Products</h1>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Image</th>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          {products.map((products) => (
            <tbody key={products._id}>
              <tr>
                <td>
                  <Image src={products.img} alt="" width={50} height={50} />
                </td>
                <td>PizzaID</td>
                <td>PizzaTitle</td>
                <td>$50</td>
                <td>
                  <button className={styles.button}>Edit</button>
                  <button className={styles.button}>Delete</button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <div className={styles.item}>
        <h1 className={styles.title}>Orders</h1>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{"573838653865386".slice(0, 5)}...</td>
              <td>John Doe</td>
              <td>$50</td>
              <td>paid</td>
              <td>preparing</td>
              <td>
                <button>Next Stage</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const productRes = await axios.get("http://localhost:3000/api/products/");
  const orderRes = await axios.get("http://localhost:3000/api/orders/");

  return {
    props: {
      orders: orderRes.data,
      products: productRes.data,
    },
  };
};

export default index;

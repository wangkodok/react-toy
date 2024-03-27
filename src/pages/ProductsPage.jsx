import { Link } from "react-router-dom";

const PRODUCTS = [
  {
    id: "p1",
    title: "Product 1",
  },
  {
    id: "p2",
    title: "Product 2",
  },
  {
    id: "p3",
    title: "Product 3",
  },
];

export default function ProductsPage() {
  return (
    <section>
      <h1># ProductsPage</h1>
      <Link to="/root">HomePage 이동</Link>
      <ul>
        {PRODUCTS.map((prod) => {
          console.log(prod.id);
          return (
            <li key={prod.id}>
              <Link to={`${prod.id}`}>{prod.title}</Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

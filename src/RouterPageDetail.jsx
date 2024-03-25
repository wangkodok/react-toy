import { useParams, Link } from "react-router-dom";

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

export default function RouterPageDetail() {
  const params = useParams();

  // 경로에서 "/products/:productId"로 정의하면 productId 사용

  return (
    <section>
      <h1># 상세 페이지</h1>
      <p>{params.productId}</p>
      <ul>
        {PRODUCTS.map((prod) => {
          return (
            <li key={prod.id}>
              <Link to={`/products/${prod.id}`}>{prod.title}</Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

import { useParams } from "react-router-dom";

export default function RouterPageDetail() {
  const params = useParams();

  // 경로에서 "/products/:productId"로 정의하면 productId 사용

  return (
    <section>
      <h1># 상세 페이지</h1>
      <p>{params.productId}</p>
      <ul>
        <li>
          <a href="">Detail 1</a>
        </li>
        <li>
          <a href="">Detail 2</a>
        </li>
        <li>
          <a href="">Detail 3</a>
        </li>
      </ul>
    </section>
  );
}

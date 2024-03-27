import { useParams, Link } from "react-router-dom";

export default function RouterPageDetail() {
  const params = useParams();

  // 경로에서 "/products/:productId"로 정의하면 productId 사용

  return (
    <section>
      <h1># 상세 페이지</h1>
      <p>{params.productId}</p>

      {/* relative="path" 상위 페이지로 이동 */}
      <Link to=".." relative="path">
        뒤로가기
      </Link>
    </section>
  );
}

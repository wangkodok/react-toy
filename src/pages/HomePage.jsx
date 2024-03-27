import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <section>
      <h1># HomePage</h1>
      <Link to="products">ProductsPage 이동</Link>
    </section>
  );
}

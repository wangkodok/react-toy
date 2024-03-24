import { Link } from "react-router-dom";

export default function RouterPageNavigation() {
  return (
    <section>
      <h1># Outlet</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">HomePage 이동</Link>
          </li>
          <li>
            <Link to="/products">ProductsPage 이동</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}

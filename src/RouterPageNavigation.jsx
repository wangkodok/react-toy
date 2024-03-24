import { Link, NavLink } from "react-router-dom";

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
          <li>
            <NavLink
              to="/company"
              className={({ isActive }) => {
                return isActive ? "a" : "b";
              }}
              style={({ isActive }) => {
                return {
                  color: isActive ? "pink" : "tan",
                };
              }}
              end
            >
              company 이동
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
}

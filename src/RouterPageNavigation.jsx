import { Link, NavLink, useNavigate } from "react-router-dom";

export default function RouterPageNavigation() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("products");
  }

  return (
    <section>
      <h1># Outlet</h1>
      <nav>
        <ul>
          <li>
            <Link to="">HomePage 이동</Link>
          </li>
          <li>
            <Link to="products">ProductsPage 이동</Link>
          </li>
          <li>
            <NavLink
              to="company"
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

      {/* 폼 제출 후 버튼에 사용, 로그인 버튼에 사용 */}
      <button onClick={navigateHandler}>
        useNavigate 이용하여 페이지 이동
      </button>
    </section>
  );
}

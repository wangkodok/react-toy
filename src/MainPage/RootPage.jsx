import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";

// import search from "../image/search.svg";
import react from "../image/react.png";
import { useState } from "react";

const Wrapper = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  font-optical-sizing: auto;
  font-weight: weight;
  font-style: normal;
  line-height: 1.5;

  .container {
    display: flex;
    height: 100vh;
  }

  .sidebar {
    width: 320px;
    background-color: #eee;
    overflow-y: auto;
    position: sticky;
    top: 0;

    .logo-area {
      position: sticky;
      top: 0;
      backdrop-filter: blur(15px);
      z-index: 1;
    }

    a {
      display: block;
      padding: 38px 32px;
      font-size: 20px;
      text-decoration: none;
      color: #000;
    }

    nav > ul > li > a {
      padding: 12px 32px;
      font-size: 16px;
    }

    nav > ul > li.on > a {
      background-color: #ddd;
    }

    nav > ul > li > a:hover {
      background-color: #ddd;
    }

    nav > ul > li > a > span {
      display: block;
      padding: 0 0 0 36px;
      background-image: url(${react});
      background-repeat: no-repeat;
      filter: grayscale(100%);
    }

    nav > ul > li.on > a > span {
      filter: grayscale(0%);
    }

    nav > ul > li > a:hover > span {
      filter: grayscale(0%);
    }
  }

  .content {
    width: calc(100% - 320px);
    overflow-y: auto;
    position: sticky;
    top: 0;
  }
`;

export default function RootPage() {
  const [sidebar, setSidebar] = useState("react");

  function handlerSidebarClick(item) {
    setSidebar(() => {
      return item;
    });
  }

  return (
    <Wrapper>
      <div className="container">
        <h1></h1>
        <div className="sidebar">
          <div className="logo-area">
            <Link to="/">CodeRepository&#40; &#41;&#59;</Link>
          </div>
          <nav>
            <ul>
              <li className={sidebar === "react" ? "on" : null}>
                <Link
                  to="react"
                  onClick={() => {
                    return handlerSidebarClick("react");
                  }}
                >
                  <span>리액트</span>
                </Link>
              </li>
              <li className={sidebar === "redux" ? "on" : null}>
                <Link
                  to=""
                  onClick={() => {
                    return handlerSidebarClick("redux");
                  }}
                >
                  <span>리액트</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="content">
          <section>
            <h2>콘텐츠</h2>
            {/* 하위 페이지를 렌더링하려면 상위 페이지에서 Outlet 사용하기 */}
          </section>
          <Outlet></Outlet>
        </div>
      </div>
    </Wrapper>
  );
}

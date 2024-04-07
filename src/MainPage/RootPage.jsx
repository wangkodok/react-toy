import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div``;

export default function RootPage() {
  return (
    <Wrapper>
      <div className="container main-container">
        <header className="header">
          <h1>헤더</h1>
        </header>
        <main className="main main-content">
          <section className="sec-content code-content">
            <h2>콘텐츠</h2>
            {/* 하위 페이지를 렌더링하려면 상위 페이지에서 Outlet 사용하기 */}
            <Outlet></Outlet>
          </section>
        </main>
        <footer className="footer">푸터</footer>
      </div>
    </Wrapper>
  );
}

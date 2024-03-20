import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "./reduxToolkitStore";

export default function ReduxToolkitLoginLogout() {
  const dispatch = useDispatch();

  function loginHandler() {
    dispatch(authActions.login());
  }

  function logoutHandler() {
    dispatch(authActions.logout());
  }

  const isAuth = useSelector((state) => {
    return state.auth.isAuthenticated;
  });

  return (
    <Fragment>
      <section>
        <h1>리덕스 툴킷 사용하여 인증 없이 로그인 / 로그아웃 만들기</h1>

        {/* 로그인 */}
        {!isAuth && (
          <>
            <div>로그인 후 이용 부탁드립니다.</div>
            <button onClick={loginHandler}>로그인</button>
          </>
        )}

        {/* 로그아웃 */}
        {isAuth && (
          <>
            <Nav />
            <button onClick={logoutHandler}>로그아웃</button>
          </>
        )}
      </section>
    </Fragment>
  );
}

function Nav() {
  return (
    <div>
      <p>뫙뫙뫙님 환영합니다.</p>
      <nav>
        <ul>
          <li>소개</li>
          <li>프로덕트</li>
          <li onClick={() => console.log("문의")}>문의</li>
        </ul>
      </nav>
    </div>
  );
}

import RouterPageNavigation from "./RouterPageNavigation";

export default function RouterPageError() {
  return (
    <>
      <RouterPageNavigation />
      <div>
        <h1>RouterPageError</h1>
        <p style={{ color: "#c01931" }}>404 오류: 잘못된 페이지입니다.</p>
      </div>
    </>
  );
}

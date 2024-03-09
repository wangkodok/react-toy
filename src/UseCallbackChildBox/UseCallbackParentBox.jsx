import { useState, useCallback } from "react";
import UseCallbackChildBox from "./UseCallbackChildBox";

export default function UseCallbackParentBox() {
  const [size, setSizes] = useState(100);
  const [isDark, setIsDark] = useState(false);

  // useCallback 사용하지 않으면 자식 컴포넌트 재렌더링
  // function createBoxStyle() {
  //   return {
  //     backgroundColor: "pink",
  //     width: `${size}px`,
  //     height: `${size}px`,
  //   };
  // }

  // useCallback 사용하면 자식 컴포넌트 불필요한 재렌더링 해결
  const createBoxStyle = useCallback(
    function () {
      return {
        backgroundColor: "pink",
        width: `${size}px`,
        height: `${size}px`,
      };
    },
    [size]
  );

  return (
    <section>
      <h1>
        # 부모 컴포넌트에서 자식 컴포넌트로 props 전달할 때 useCallback 사용
        연습
      </h1>
      <dir
        style={{
          backgroundColor: isDark ? "black" : "white",
        }}
      >
        <input
          type="number"
          value={size}
          onChange={(e) => setSizes(e.target.value)}
        />
        <button onClick={() => setIsDark(!isDark)}>테마 변경</button>
        <UseCallbackChildBox createBoxStyle={createBoxStyle} />
      </dir>
    </section>
  );
}

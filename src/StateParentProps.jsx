/* eslint-disable */
import { useState } from "react";

// 금액대
const numberCounts = [10, 100, 1000, 5000, 10000, 50000, 100000];

export default function StateParentProps() {
  const [count, setCount] = useState(0);

  // 금액 버튼
  function handleCountClick(numberIncrease) {
    setCount(count + numberIncrease);
  }

  // 숫자 콤마
  function decimalPoint(number) {
    return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <section>
      <h2># props, useState 부모 컴포넌트에서 상태 관리</h2>
      <p>더하기 계산</p>
      <p>총 {decimalPoint(count)}원</p>
      {numberCounts.map((numberCountItem, key) => {
        return (
          <Button
            key={key}
            countClick={handleCountClick}
            countNumber={numberCountItem}
            decimalPoint={decimalPoint}
          />
        );
      })}
    </section>
  );
}

function Button({ ...props }) {
  return (
    <button
      onClick={() => {
        props.countClick(props.countNumber);
      }}
    >
      {props.decimalPoint(props.countNumber)}원
    </button>
  );
}

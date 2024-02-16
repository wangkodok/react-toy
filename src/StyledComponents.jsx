import { useState } from "react";
import { styled } from "styled-components";
import Button from "./StyledButton";
import StyledSpanAndStrong from "./StyledSpanAndStrong";

const Area = styled.div`
  background-color: #d89f25;

  & p {
    background-color: #ae10ec;
  }

  & .desc {
    font-size: 20px;
  }

  /* 반응형 미디어쿼리 */
  @media screen and (min-width: 1000px) {
    background-color: #a0660e;

    & p {
      background-color: #10d2ec;
    }
  }
`;

const ControlContainer = styled.h2`
  background-color: ${(props) => {
    return props.$bg ? "#eee" : "#21be29";
  }};
  padding: 20px 0;
  font-size: 20px;
  font-weight: 700;
`;

const StyledComponent = styled.div`
  color: ${(props) => (props.$isError ? "#21be29" : "black")};
  font-size: ${(props) => (props.$isLarge ? "20px" : "16px")};
  background-color: ${(props) => props.$backgroundColor};
`;

export default function StyledComponents() {
  const [isButton, setIsButton] = useState(false);

  function onButton() {
    if (!isButton) {
      setIsButton(true);
    } else {
      setIsButton(false);
    }
  }

  return (
    <Area className="area">
      <ControlContainer $bg={isButton}># 스타일드 컴포넌트</ControlContainer>
      <p className="desc">npm install styled-components 설치</p>
      <Button onClick={onButton}>버튼</Button>
      <StyledComponent $isError={true} $isLarge={false} $backgroundColor="#000">
        This is a styled component.
      </StyledComponent>
      <StyledSpanAndStrong />
    </Area>
  );
}

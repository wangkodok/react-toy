import { styled } from "styled-components";

const Span = styled.span`
  display: inline-block;
  padding: 20px;
  color: #6be09c;
  border: 5px solid #3d0ee7;
`;

const Strong = styled.strong`
  display: inline-block;
  padding: 20px;
  color: #6be09c;
  border: 5px solid #f80b9d;
`;

export default function StyledSpanAndStrong() {
  return (
    <>
      <Span>1</Span>
      <Strong>2</Strong>
    </>
  );
}

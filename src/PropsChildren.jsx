export default function PropsChildren() {
  return <Children>컴포넌트 합성</Children>;
}

function Children({ children }) {
  return <div>{children}</div>;
}

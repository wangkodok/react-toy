import { useState, useEffect } from "react";

export default function UseCallbackChildBox({ createBoxStyle }) {
  const [style, setStyle] = useState({});

  useEffect(() => {
    console.log("박스 키우기");
    setStyle(createBoxStyle());
  }, [createBoxStyle]);

  return <div style={style}></div>;
}

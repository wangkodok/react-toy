// import "./TailwindCSS-index.css";

export default function TailwindCSS() {
  let TailwindCSS = "text-left text-lime-600 bg-teal-300 hover:bg-sky-700";

  // if () {
  // TailwindCSS = "text-left text-lime-600 bg-teal-300 hover:bg-sky-700";
  // }

  return (
    <div className="flex flex-col">
      <h2 className="font-bold font-title"># 테일윈드 CSS</h2>
      <p>npm install -D tailwindcss postcss autoprefixer</p>
      <p>npx tailwindcss init -p</p>
      <button className={TailwindCSS}>버튼</button>
      <div>This is a styled component.</div>
      <div>index.css 생성하여 Tailwind 지시어 추가한다.</div>
    </div>
  );
}

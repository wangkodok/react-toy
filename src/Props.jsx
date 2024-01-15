const Obj = [
  {
    title: "제목",
    description: "설명",
  },
];

export default function Props() {
  return (
    <div>
      <Text {...Obj[0]} />
    </div>
  );
}

function Text({ title, description }) {
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
    </>
  );
}

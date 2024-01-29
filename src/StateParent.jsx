import { useState } from "react";

export default function StateParent() {
  const [result, setResult] = useState({
    inputResult: "",
  });

  console.log(result);

  function handleSubmit(event) {
    const { name, value } = event.target;
    setResult({
      ...result,
      [name]: value,
    });
  }

  return (
    <section>
      <h1>useState</h1>
      <ul>
        <form>
          <label id="inputResult">입력란</label>
          <input type="text" name="inputResult" onChange={handleSubmit} />
          <button
            onClick={(event) => {
              event.preventDefault();
              console.log(result);
            }}
          >
            저장
          </button>
        </form>
        <StateChild result={result} />
      </ul>
    </section>
  );
}

function StateChild({ result }) {
  return <li>{result.inputResult}</li>;
}

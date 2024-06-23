import { useEffect, useState } from "react";

export default function App() {
  // State
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    // console.log(data.slip.advice);
    setAdvice(data.slip.advice);
    setCount((prevCount) => prevCount + 1);
  }

  // Effect
  useEffect(function () {
    getAdvice();
  }, []);

  return (
    // JSX
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <Message count={count} />
    </div>
  );
}

// Props
function Message(props) {
  return (
    <p>
      You have read <strong>{props.count}</strong> piecs of advice
    </p>
  );
}

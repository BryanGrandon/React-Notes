import { useEffect } from "react";

function CounterE() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Counter has been updated`);
  }, [count]);

  return (
    <>
      <p>Counter: {count}</p>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increase
      </button>
    </>
  );
}

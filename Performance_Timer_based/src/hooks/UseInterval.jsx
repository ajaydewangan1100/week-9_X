import { useEffect, useState } from "react";

function useInterval(fn, t) {
  useEffect(() => {
    const i = setInterval(() => {
      fn();
    }, t);

    return () => {
      clearInterval(i);
    };
  }, [t]);
}

function Interval() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount((c) => c + 1);
  }, 1000);

  return <>Interval Count: {count}</>;
}

export default Interval;

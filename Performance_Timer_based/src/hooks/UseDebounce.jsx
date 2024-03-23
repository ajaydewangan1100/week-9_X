import { useEffect, useState } from "react";

function useDebounce(value, t) {
  const [dValue, setDValue] = useState("");

  useEffect(() => {
    const timeoutValue = setTimeout(() => {
      setDValue(value);
    }, t);

    return () => {
      clearTimeout(timeoutValue);
    };
  }, [value, t]);

  return dValue;
}

function Debounce() {
  const [input, setInput] = useState("");
  const debounceValue = useDebounce(input, 1000);

  useEffect(() => {
    // Fetch things here
    // fetch()
  }, [debounceValue]);

  return (
    <>
      <input
        type="text"
        placeholder="Search.."
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <p>Debounce Value :{debounceValue}</p>
    </>
  );
}

export default Debounce;

import { useState } from "react";

function useArray(initial = []) {
  const [arr, setArr] = useState(initial);

  function add(item) {
    setArr((prev) => [...prev, item]);
  }

  function remove(item) {
    setArr((prev) => prev.filter((a) => a !== item));
  }

  function clear() {
    setArr([]);
  }

  return { arr, add, remove, clear };
}

export default useArray;

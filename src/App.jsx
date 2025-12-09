import { useState } from "react";

const App = () => {
  let [num, setnum] = useState(0);

  const incearse = () => {
    setnum(num + 1);
  };

  const decearse = () => {
    setnum(num - 1);
  };

  const Jump5Num = () => {
    setnum(num + 5);
  };

  return (
    <div className="parent">
      <h1>{num}</h1>
      <button onClick={incearse}>Incearse</button>
      <button onClick={decearse}>Decearse</button>
      <button onClick={Jump5Num}>Incearse By 5</button>
    </div>
  );
};

export default App;

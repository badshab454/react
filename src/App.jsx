import { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      {count}
      <button onClick={() => setCount(count + 10)}>Increment use button</button>
    </>
  );
};

export default App;

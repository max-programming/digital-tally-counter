import React, { useState } from "react";
import { Header, Counter } from "./comps";

const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
    window.navigator.vibrate(300);
  };
  return (
    <div>
      <Header setCount={setCount} />
      <main>
        <Counter count={count} increment={increment} />
      </main>
    </div>
  );
};

export default App;

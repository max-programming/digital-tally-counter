import React, { useState } from "react";
import { Header, Counter } from "./comps";
import { BrowserView, MobileView } from "react-device-detect";

const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
    window.navigator.vibrate(50);
  };
  return (
    <div>
      <BrowserView>
        <Header setCount={setCount} />
        <h2
          style={{
            color: "white",
            textAlign: "center",
            fontFamily: "sans-serif",
          }}
        >
          Please use it on a mobile device for a better view.
        </h2>
        <main>
          <Counter count={count} increment={increment} />
        </main>
      </BrowserView>
      <MobileView>
        <Header setCount={setCount} />
        <main>
          <Counter count={count} increment={increment} />
        </main>
      </MobileView>
    </div>
  );
};

export default App;

import React from "react";

const Counter = ({ count, increment }) => {
  return (
    <div className="counter" onClick={increment}>
      <div className="circle">
        <h1>{count}</h1>
      </div>
      {/* <div className="circle-wrap">
        <div className="circle">
          <div className="mask full">
            <div className="fill"></div>
          </div>

          <div className="mask half">
            <div className="fill"></div>
          </div>

          <div className="inside-circle">70%</div>
        </div>
      </div> */}
    </div>
  );
};

export default Counter;

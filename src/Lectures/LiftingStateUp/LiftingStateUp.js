import React, { useState } from "react";
import FirstChild from "./components/FirstChild";
import SecondChild from "./components/SecondChild";
import "./LiftingStateUp.scss";

function LiftingStateUp() {
  const [count, setCount] = useState(0);

  // addHandler

  // subtractHandler

  return (
    <div className="liftingStateUpParent">
      <div className="top">나는 부모</div>
      <div className="bottom">
        <FirstChild />
        <SecondChild count={count} />
      </div>
    </div>
  );
}

export default LiftingStateUp;

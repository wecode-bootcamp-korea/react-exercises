import React from "react";

function SecondChild(props) {
  return (
    <div className="secondChild">
      SecondChild
      <div>여기 내용을 변경해야 할 때</div>
      <div className="body">{props.count}</div>
    </div>
  );
}

export default SecondChild;

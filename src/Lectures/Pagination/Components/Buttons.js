import React from "react";
import { useNavigate } from "react-router-dom";
import "./Buttons.scss";

export default function Buttons() {
  const navigate = useNavigate();

  const clickBtn = (e) => {
    navigate(`/pagination?limit=20&offset=${(e.target.innerText - 1) * 20}`);
  };

  return (
    <div className="pageBtn">
      <button onClick={clickBtn}>1</button>
      <button onClick={clickBtn}>2</button>
      <button onClick={clickBtn}>3</button>
      <button onClick={clickBtn}>4</button>
      <button onClick={clickBtn}>5</button>
    </div>
  );
}

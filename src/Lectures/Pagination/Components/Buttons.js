import React from "react";
import { useNavigate } from "react-router-dom";
import "./Buttons.scss";

export default function Buttons() {
  const navigate = useNavigate();

  return (
    <div className="pageBtn">
      <button
        onClick={() => {
          navigate("/pagination?limit=20&offset=0");
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          navigate("/pagination?limit=20&offset=20");
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          navigate("/pagination?limit=20&offset=40");
        }}
      >
        3
      </button>
      <button
        onClick={() => {
          navigate("/pagination?limit=20&offset=60");
        }}
      >
        4
      </button>
      <button
        onClick={() => {
          navigate("/pagination?limit=20&offset=80");
        }}
      >
        5
      </button>
    </div>
  );
}

import React from "react";
import Parent from "./Parent";
import FetchError from "./FetchError";
import "./index.scss";

export default function Index() {
  return (
    <div>
      <Parent />
      {/* <FetchError /> */}
    </div>
  );
}

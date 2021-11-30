import React, { useState, useEffect } from "react";

export default function FetchError() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("/message.json")
      .then((res) => res.json())
      .then((res) => {});
  }, []);

  return (
    <div>
      {data.message.map((msg) => {
        return <li>{msg}</li>;
      })}
    </div>
  );
}

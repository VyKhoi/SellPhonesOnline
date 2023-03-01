import React, { useState, useEffect } from "react";

import axios from "axios";
function Test() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8000/khoi/oke").then((response) => {
      setMessage(response.data.message);
    });
  }, []);

  return (
    <div>
      <h2>data ơ đây</h2>
      <h1>{message}</h1>
    </div>
  );
}
export default Test;

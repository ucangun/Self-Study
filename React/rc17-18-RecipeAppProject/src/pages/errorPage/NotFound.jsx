import React, { useState, useEffect } from "react";
import Main from "./NotFoundStyle";
import { Navigate } from "react-router-dom";

const NotFound = () => {
  const [count, setCount] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((count) => (count === 0 ? count : count - 1));
    }, 1000);
    if (count === 0) clearInterval(timer);
  }, []);

  if (count === 0) {
    return <Navigate to="/home" />;
  }

  return (
    <Main>
      <h3>Something went wrong...</h3>
      <p>
        Within <span>{count}</span> seconds. you will be redirected to the home
        page!
      </p>
    </Main>
  );
};

export default NotFound;

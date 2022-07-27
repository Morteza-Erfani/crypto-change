import React from "react";

// Gifs
import spinner from "../gif/Loading_icon.gif";

const Loader = () => {
  return (
    <div>
      <img src={spinner} alt="loading" />
      <h1>Loading...</h1>
    </div>
  );
};

export default Loader;

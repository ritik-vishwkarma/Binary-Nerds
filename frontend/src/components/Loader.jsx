import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader">
      {[...Array(8)].map((_, index) => (
        <div key={index} className={`box box${index}`}>
          <div></div>
        </div>
      ))}
      <div className="ground">
        <div></div>
      </div>
    </div>
  );
};

export default Loader;

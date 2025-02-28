import React from "react";

const Spinner = ({ size = "w-4 h-4" }) => {
  return (
    <div className={`border-2 border-t-transparent border-white flex items-center justify-center rounded-full animate-spin ${size}`}></div>
  );
};

export default Spinner;

import React from "react";

const PageLoader = ({ size = "w-6 h-6" }) => {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div
        className={`border-2 border-t-transparent border-white flex items-center justify-center rounded-full animate-spin ${size}`}
      ></div>
    </div>
  );
};

export default PageLoader;
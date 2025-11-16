import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-yellow-400"></div>
    </div>
  );
};

export default LoadingSpinner;

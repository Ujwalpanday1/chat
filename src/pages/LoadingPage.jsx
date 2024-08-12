import React from 'react';


const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="text-center">
        <div className="w-16 h-16 border-t-4 border-white border-solid rounded-full animate-spin"></div>
        <h1 className="mt-4 text-white text-2xl font-semibold">Loading, please wait...</h1>
      </div>
    </div>
  );
};

export default LoadingPage;

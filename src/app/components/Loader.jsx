import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center fixed inset-0 bg-white z-50">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );
};

export default Loader;

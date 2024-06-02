import React from "react";

const Grid = ({ className }: { className?: string }) => {
  return (
    <div className="grid grid-cols-4  gap-4">
      {[...Array(16)].map((_, index) => (
        <div
          key={index}
          className="bg-gray-200 flex-center w-12 h-12 md:w-16 md:h-16 rounded-lg shadow-md"
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
};

export default Grid;

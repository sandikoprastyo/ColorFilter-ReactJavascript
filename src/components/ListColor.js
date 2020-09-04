import React from "react";
import "../assets/style/ListColor.css";

/* function and props from parent*/
const ListColor = ({ filter, data }) => {
  /* variable logic */
  const color = data
    .filter((colors) => {
      return colors.color.toLowerCase().indexOf(filter.toLowerCase()) >= 0;
    })
    .map((colors, i) => {
      return (
        <div
          key={i}
          className={
            colors.color + " text-black px-10 py-10 felx justify-center"
          }
        >
          <span>{colors.color}</span>
        </div>
      );
    });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 bg-gray-600 flex justify-center">
      {/* return variable logic */}
      {color}
    </div>
  );
};

export default ListColor;

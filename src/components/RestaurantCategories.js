import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategories = ({ data, showItems, setShowItems }) => {

  const handleClick = () => {
    setShowItems();
  };

  return (
    <div>
      <div className="w-6/12 mx-auto p-4 m-4 bg-gray-100 rounded-lg shadow-md">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span
            className="font-bold text-lg cursor-pointer"
          >
            {data.title} ({data.itemCards.length})
          </span>
          <span>{showItems ? "▲" : "▼"}</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategories;

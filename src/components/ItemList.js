import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {

const dispatch = useDispatch();

const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
}

  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item.card.info.id}
            className="p-2 m-2 text-left border-gray-200 border-b-2 flex justify-between"
          >
            <div className="w-9/12">
              <div>
                <h3 className="font-bold text-lg">{item.card.info.name}</h3>
                <span className="text-gray-600 font-extralight">
                  {" "}
                  ₹
                  {item.card.info.defaultPrice
                    ? (item.card.info.defaultPrice / 100).toFixed(2)
                    : item.card.info.price / 100}
                </span>
              </div>
              <div>
                <p className="text-gray-600 font-thin">{item.card.info.description}</p>
              </div>
            </div>
            <div className="w-3/12">
            <div className="absolute">
                <button className="px-4 py-2 bg-green-500 text-white text-xs rounded-md" 
                onClick={() => handleAddItem(item)}>Add +</button>
                </div>
              <img
                className=" m-2 rounded-md"
                src={IMG_CDN_URL + item.card.info.imageId}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;

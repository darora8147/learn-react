import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";
import { useState } from "react";

const RestaurantMenu = () => {
//   const { restId } = useParams();
 const [showItems, setShowItems] = useState(null);

  const restInfo = useRestaurantMenu();

  if (restInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    restInfo?.data?.cards[2]?.card?.card?.info;
  const { itemCards } =
    restInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card
      .card;

  const menuCategories =
    restInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (card) =>
        card?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p>
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>
      {menuCategories.map((category, index) => (

        //Controlled Component
        <RestaurantCategories
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showItems ? true : false}
          setShowItems={() => setShowItems(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;

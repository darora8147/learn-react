import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router";

const RestaurantMenu = () => {
  const [restInfo, setRestInfo] = useState(null);
  const { restId } = useParams();
  console.log('restId', restId)

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://mocki.io/v1/5d696c8c-e476-4d82-a917-453188d6f251",
    );

    const json = await data.json();
    setRestInfo(json);
  };

  if(restInfo === null) {
    return <Shimmer />
  }

  const { name, cuisines, costForTwoMessage } = restInfo?.data?.cards[2]?.card?.card?.info;
  const { itemCards } = restInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card;

  return (
    <div className="restaurant-menu">
      <h1>{name}</h1>
      <p>{cuisines?.join(", ")} - {costForTwoMessage}</p>
      <h2>Restaurant Menu</h2>
      <ul>
        {itemCards?.map((itemCard) => <li key={itemCard.card.info.id}>{itemCard.card.info.name} - Rs.{itemCard.card.info.price / 100 || itemCard.card.info.defaultPrice / 100}</li>)}
      </ul>
    </div>
  );
};

export default RestaurantMenu;

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router";

const RestaurantMenu = () => {
  const [restInfo, setRestInfo] = useState(null);
  const { restId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://mocki.io/v1/2682e7ac-76e6-4079-a279-4b851196b9f4",
    );
    // const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.8313693&lng=77.5873139&restaurantId=475418", {
    //     method: "GET",
    //     headers: {
    //         "User-Agent": "Mozilla/5.0",
    //         "Accept": "application/json",
    //         "Referer": "https://www.swiggy.com/",
    //         "Origin": "https://www.swiggy.com"
    //     }
    //     });

    const json = await data.json();
    setRestInfo(json);
  };

  if(restInfo === null) {
    return <Shimmer />
  }

  const { name, cuisines, costForTwoMessage } = restInfo?.data?.cards[2]?.card?.card?.info;
  const { itemCards } = restInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3].card.card;

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

import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  //  const { restId } = useParams();

  const restInfo = useRestaurantMenu();

  if (restInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    restInfo?.data?.cards[2]?.card?.card?.info;
  const { itemCards } =
    restInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card
      .card;

  return (
    <div className="restaurant-menu">
      <h1>{name}</h1>
      <p>
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Restaurant Menu</h2>
      <ul>
        {itemCards?.map((itemCard) => (
          <li key={itemCard.card.info.id}>
            {itemCard.card.info.name} - Rs.
            {itemCard.card.info.price / 100 ||
              itemCard.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;

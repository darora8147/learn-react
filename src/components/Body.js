import RestaurantCard from "./RestaurantCard";
import {restaurantsCartDetails} from "../utils/mockData";
import {useState} from "react";

const Body = () => {
    const[listOfRestaurants, setListOfRestaurants] = useState(restaurantsCartDetails);

    return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (restaurant) => restaurant.rating > 4.3
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

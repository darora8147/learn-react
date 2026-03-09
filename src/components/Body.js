import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // Using Mock API to fetch data
    // const data = await fetch(
    //   "https://mocki.io/v1/c60e27f2-4a7f-4117-acd6-531988381e8f",
    // );

    // Using Swiggy API to fetch real data
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.8313693&lng=77.5873139&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    );
    setFilteredRestaurants(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    );
  };

  // const fetchData = () => {
  //     fetch("https://mocki.io/v1/b6c07537-fb71-46c2-99fe-682a7530e15c")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         // setListOfRestaurants(data);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching data:", error);
  //       });
  // }

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are offline. Please check your internet connection.
      </h1>
    );
  }

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="p-4 m-4">
        <input
          className="border border-gray-300 h-10 rounded-md"
          type="text"
          placeholder=" Search for restaurants..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="px-4 bg-green-400 h-10 text-white rounded-md ml-2"
          onClick={() => {
            const filteredList = listOfRestaurants.filter((restaurant) =>
              restaurant.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase()),
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Search
        </button>
        <button
          className="px-4 bg-blue-400 h-10 text-white rounded-md ml-2"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (restaurant) => restaurant?.info?.avgRating > 4,
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants?.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurant/" + restaurant?.info?.id}
            className="restaurant-link"
          >
            <RestaurantCard restData={restaurant?.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

import { IMG_CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const {restData} = props;
  const {name, cuisines, cloudinaryImageId, avgRating, sla, costForTwo} = restData;

  return (
    <div className="p-4 m-4 w-[250px] bg-gray-100 hover:bg-gray-200  rounded-lg shadow-md">
      <img className="h-40 w-full object-cover" src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="py-4 font-bold">{name}</h2>
      <p className="font-color">{cuisines.join(", ")}</p>
      <p className="restaurant-rating">{avgRating} Stars</p>
      <p className="restaurant-rating">{sla?.slaString}</p>
      <p className="restaurant-cost">{costForTwo}</p>
    </div>
  )
}

export default RestaurantCard;
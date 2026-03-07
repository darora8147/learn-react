import { IMG_CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const {restData} = props;
  const {name, cuisines, cloudinaryImageId, avgRating, sla, costForTwo} = restData;

  return (
    <div className="restaurant-card">
      <img className="restaurant-image" src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="restaurant-name">{name}</h2>
      <p className="restaurant-cuisine">{cuisines.join(", ")}</p>
      <p className="restaurant-rating">{avgRating} Stars</p>
      <p className="restaurant-rating">{sla?.slaString}</p>
      <p className="restaurant-cost">{costForTwo}</p>
    </div>
  )
}

export default RestaurantCard;
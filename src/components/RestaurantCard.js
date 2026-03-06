const RestaurantCard = (props) => {
  const {restData} = props;
  const {name, cuisines, image, rating, deliveryTime, costForTwo} = restData;

  return (
    <div className="restaurant-card">
      <img className="restaurant-image" src={image} />
      <h2 className="restaurant-name">{name}</h2>
      <p className="restaurant-cuisine">{cuisines.join(", ")}</p>
      <p className="restaurant-rating">{rating} Stars</p>
      <p className="restaurant-rating">{deliveryTime}</p>
      <p className="restaurant-cost">{costForTwo}</p>
    </div>
  )
}

export default RestaurantCard;
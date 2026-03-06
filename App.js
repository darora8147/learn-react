import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
      <img className="logo" src="https://marketplace.canva.com/EAGXsRURT9o/1/0/1600w/canva-yellow-and-brown-kitchen-food-logo-JrzZUwc_CLQ.jpg"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>About Us</li>
        </ul>
      </div>
    </div>
  )
}

const restaurantsCartDetails = [
  {
    id: 1,
    name: "Spice Garden",
    costForTwo: "₹400 for two",
    cuisines: ["North Indian", "Chinese", "Biryani"],
    deliveryTime: "30-35 mins",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
  },
  {
    id: 2,
    name: "Pizza Hub",
    costForTwo: "₹600 for two",
    cuisines: ["Pizza", "Italian", "Fast Food"],
    deliveryTime: "25-30 mins",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591"
  },
  {
    id: 3,
    name: "Biryani Palace",
    costForTwo: "₹500 for two",
    cuisines: ["Biryani", "Mughlai", "Kebabs"],
    deliveryTime: "35-40 mins",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0"
  },
  {
    id: 4,
    name: "Green Bowl",
    costForTwo: "₹350 for two",
    cuisines: ["Healthy Food", "Salads", "Continental"],
    deliveryTime: "20-25 mins",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
  },
  {
    id: 5,
    name: "Street Treats",
    costForTwo: "₹200 for two",
    cuisines: ["Street Food", "Chaat", "Snacks"],
    deliveryTime: "15-20 mins",
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754"
  },
  {
    id: 6,
    name: "Burger Factory",
    costForTwo: "₹300 for two",
    cuisines: ["Burgers", "Fast Food", "American"],
    deliveryTime: "20-25 mins",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349"
  }
];

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

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="restaurant-container">
      {
        restaurantsCartDetails.map((restaurant) => <RestaurantCard key={restaurant.id} restData={restaurant} />)
      }
      </div>
    </div>
  )
}

const AppLayout = () => {
  return <div className="app">
    <Header />
    <Body />
  </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

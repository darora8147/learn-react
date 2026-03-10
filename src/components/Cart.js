import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart())
  }

    return (
        <div className="text-center m-2 p-2">
            <h2 className="font-bold">Cart Page!!!</h2>
           <p className="font-thin"> Number of Items added in the cart:  {cartItems.length}</p>
           <div className="w-6/12 m-auto p-2">
           {cartItems.length ? 
           <button className="bg-black rounded-lg text-white p-2"
           onClick={handleClearCart}>Clear Cart</button> : <h1 className="font-bold text-2xl"> Cart is Empty. Please add items to proceed!!</h1>
            }
            <ItemList items={cartItems} />
           </div>
        </div>
    )
}

export default Cart;
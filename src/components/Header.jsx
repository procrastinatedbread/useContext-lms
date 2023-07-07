import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "..";

const Header = () => {
  const { cart } = useContext(CartContext);
  return (
    <nav>
      <h1>Nikhil's Cart</h1>
      <h3>Items in Cart: {cart.length}</h3>
      <NavLink to="/">Home</NavLink>
      {" || "}
      <NavLink to="/cart">Cart</NavLink>
    </nav>
  );
};
export default Header;

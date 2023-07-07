import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export function Cart() {
  const { cart } = useContext(CartContext);
  return (
    <div>
      {cart.map((item) => {
        const { id, name, price } = item;
        return (
          <div
            key={id}
            style={{
              border: "1px solid gray",
              margin: "0.5rem",
              padding: "0.5rem"
            }}
          >
            <h2>
              {name} <small> INR {price} </small>
            </h2>
          </div>
        );
      })}
      <h2>{cart.reduce((total, item) => total + item.price, 0)}</h2>
    </div>
  );
}

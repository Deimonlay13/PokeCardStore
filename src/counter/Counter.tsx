import { useState, type FC } from "react";
import type { CartaPokemon } from "../cartas/interfaces/carta-pokemon.interface";
import { useCart } from "../cartas/context/CartContext";

interface Props {
  carta: CartaPokemon;
}

export const Counter: FC<Props> = ({ carta }) => {
  const [count, setCount] = useState(0);
  const { addToCart } = useCart();

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => Math.max(0, c - 1));
  const handleAddToCart = () => {
    addToCart(carta, count);
    setCount(0);
  };

  return (
    <div className="d-flex flex-column gap-2 align-items-center">
      <div className="d-flex justify-content-center align-items-center gap-2">
        <button className="btn btn-sm btn-danger" onClick={decrement}>
          -
        </button>
        <span>{count}</span>
        <button className="btn btn-sm btn-success" onClick={increment}>
          +
        </button>
      </div>
      <button className="btn btn-primary btn-sm" onClick={handleAddToCart}>
        Agregar al carrito
      </button>
    </div>
  );
};

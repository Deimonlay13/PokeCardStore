// src/cart/components/CartDetails.spec.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { CartProvider, useCart } from "../src/cartas/context/CartContext";
import { mockCartas } from "../src/cartas/mock/cartas.mock";
import { CartDetails } from "../src/cartas/components/CartDetails";

describe("CartDetails Component", () => {
  const SetupComponent = () => {
    const { addToCart } = useCart();

    React.useEffect(() => {
      addToCart(mockCartas[0], 2); 
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <CartDetails />;
  };

  beforeEach(() => {
    render(
      <CartProvider>
        <SetupComponent />
      </CartProvider>
    );
  });

  it("muestra la carta agregada con cantidad correcta", () => {
    const itemName = screen.getByText(mockCartas[0].name);
    const cantidad = screen.getByText("2");
    const subtotal = screen.getByText(`$${mockCartas[0].price * 2}`);

    expect(itemName).toBeTruthy();
    expect(cantidad).toBeTruthy();
    expect(subtotal).toBeTruthy();

    // Total
    const total = screen.getByText(`Total: $${mockCartas[0].price * 2}`);
    expect(total).toBeTruthy();
  });

  it("incrementa la cantidad al hacer click en +", () => {
    const increaseBtn = screen.getByText("+");
    fireEvent.click(increaseBtn);

    expect(screen.getByText("3")).toBeTruthy();
    expect(screen.getByText(`$${mockCartas[0].price * 3}`)).toBeTruthy();
    expect(screen.getByText(`Total: $${mockCartas[0].price * 3}`)).toBeTruthy();
  });

  it("disminuye la cantidad al hacer click en -", () => {
    const decreaseBtn = screen.getByText("-");
    fireEvent.click(decreaseBtn);

    expect(screen.getByText("1")).toBeTruthy();
    expect(screen.getByText(`$${mockCartas[0].price * 1}`)).toBeTruthy();
    expect(screen.getByText(`Total: $${mockCartas[0].price * 1}`)).toBeTruthy();
  });

  it("elimina la carta al hacer click en Eliminar", () => {
    const deleteBtn = screen.getByText("Eliminar");
    fireEvent.click(deleteBtn);

    // Carrito vacío
    expect(screen.getByText("El carrito está vacío")).toBeTruthy();
  });
});

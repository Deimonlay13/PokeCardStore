import { render, screen, fireEvent } from "@testing-library/react";
import { CartProvider, useCart } from "../src/cartas/context/CartContext";
import { mockCartas } from "../src/cartas/mock/cartas.mock";

describe("CartProvider y useCart", () => {
  const TestComponent = () => {
    const {
      cart,
      addToCart,
      increaseItem,
      decreaseItem,
      removeItem,
      totalItems,
      totalAmount,
    } = useCart();

    return (
      <div>
        <button onClick={() => addToCart(mockCartas[0], 2)}>
          Agregar 2 Pikachu
        </button>
        <button onClick={() => increaseItem(mockCartas[0].id)}>
          Aumentar 1
        </button>
        <button onClick={() => decreaseItem(mockCartas[0].id)}>
          Disminuir 1
        </button>
        <button onClick={() => removeItem(mockCartas[0].id)}>Eliminar</button>
        <div data-testid="totalItems">{totalItems}</div>
        <div data-testid="totalAmount">{totalAmount}</div>
        <div data-testid="cartLength">{cart.length}</div>
      </div>
    );
  };

  beforeEach(() => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );
  });

  it("agrega items al carrito", () => {
    fireEvent.click(screen.getByText("Agregar 2 Pikachu"));

    expect(screen.getByTestId("totalItems").textContent).toBe("2");
    expect(screen.getByTestId("totalAmount").textContent).toBe(
      (mockCartas[0].price * 2).toString()
    );
    expect(screen.getByTestId("cartLength").textContent).toBe("1");
  });

  it("incrementa y decrementa items correctamente", () => {
    fireEvent.click(screen.getByText("Agregar 2 Pikachu"));
    fireEvent.click(screen.getByText("Aumentar 1"));
    expect(screen.getByTestId("totalItems").textContent).toBe("3");

    fireEvent.click(screen.getByText("Disminuir 1"));
    expect(screen.getByTestId("totalItems").textContent).toBe("2");
  });

  it("elimina items correctamente", () => {
    fireEvent.click(screen.getByText("Agregar 2 Pikachu"));
    fireEvent.click(screen.getByText("Eliminar"));

    expect(screen.getByTestId("totalItems").textContent).toBe("0");
    expect(screen.getByTestId("cartLength").textContent).toBe("0");
  });

  it("lanza error si useCart se usa fuera de CartProvider", () => {
    const OutsideComponent = () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      expect(() => useCart()).toThrowError(
        "useCart debe usarse dentro de CartProvider"
      );
      return null;
    };

    render(<OutsideComponent />);
  });


  it("suma cantidad si la carta ya existe en el carrito", () => {
    const { getByText, getByTestId } = screen;

    fireEvent.click(getByText("Agregar 2 Pikachu"));

    fireEvent.click(getByText("Agregar 2 Pikachu"));

    expect(getByTestId("totalItems").textContent).toBe("4");

    expect(getByTestId("totalAmount").textContent).toBe(
      (mockCartas[0].price * 4).toString()
    );

    expect(getByTestId("cartLength").textContent).toBe("1");
  });

});

import { render } from "@testing-library/react";
import App from "../src/App";
import { CartProvider } from "../src/cartas/context/CartContext";

describe("App Component", () => {
  it("se renderiza sin errores", () => {
    const container = render(
      <CartProvider>
        <App />
      </CartProvider>
    ).container;

    expect(container).toBeDefined();
  });

});

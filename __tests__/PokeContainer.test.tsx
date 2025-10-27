import { render, screen, waitFor } from "@testing-library/react";
import { PokeContainer } from "../src/cartas/components/PokeContainer";
import * as PokeListModule from "../src/cartas/components/PokeList";
import { mockCartas } from "../src/cartas/mock/cartas.mock";
import type { CartaPokemon } from "../src/cartas/interfaces/carta-pokemon.interface";

describe("PokeContainer Component", () => {
  beforeEach(() => {
    spyOn(PokeListModule, "PokeList").and.callFake(
      (props: { cartas: CartaPokemon[] }) => (
        <div data-testid="mock-pokelist">
          {props.cartas.map((carta) => (
            <span key={carta.id}>{carta.name}</span>
          ))}
        </div>
      )
    );
  });

  it("debe renderizar sin errores", () => {
    render(<PokeContainer />);
    expect(screen.getByTestId("mock-pokelist")).toBeTruthy();
  });

  it("debe pasar correctamente las cartas del mock al PokeList", async () => {
    render(<PokeContainer />);

    await waitFor(() => {
      expect(screen.getByText(mockCartas[0].name)).toBeTruthy();
    });

    mockCartas.forEach((carta) => {
      expect(screen.getByText(carta.name)).toBeTruthy();
    });

    expect(PokeListModule.PokeList).toHaveBeenCalled();
    const props = (PokeListModule.PokeList as jasmine.Spy).calls.mostRecent()
      .args[0];
    expect(props.cartas.length).toBe(mockCartas.length);
  });
});

import type { FC } from "react";
import type { CartaPokemon } from "../interfaces/carta-pokemon.interface";
import { Counter } from "../../counter/Counter";
import "./pokeList.css"

interface Props {
  cartas: CartaPokemon[];
}

export const PokeList: FC<Props> = ({ cartas }) => {
  return (
    <div className="container">
      <div className="text-center my-4 title-container">
        <h1 className="section-title">Descubre nuestra colección Pokémon</h1>
      </div>
      <div className="row g-3">
        {cartas.map((carta) => (
          <div key={carta.id} className="col-12 col-sm-6 col-md-3 col-lg-3">
            <div className="card h-100 text-center">
              <img
                src={carta.image}
                className="card-img-top"
                alt={carta.name}
              />
              <div className="card-body p-2">
                <h5 className="card-title">{carta.name}</h5>
                <p className="card-text">Precio: ${carta.price}</p>
                <Counter carta={carta} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

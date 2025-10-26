import { useEffect, useState, type FC } from "react";
import type { CartaPokemon } from "../interfaces/carta-pokemon.interface";
import { mockCartas } from "../mock/cartas.mock";
import { PokeList } from "./PokeList";

export const PokeContainer: FC = () => {
  const [cards, setCards] = useState<CartaPokemon[]>([]);

  useEffect(() => {
    setCards(mockCartas);
  }, []);

  return <PokeList cartas={cards} />;
};

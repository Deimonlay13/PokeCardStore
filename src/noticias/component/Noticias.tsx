import { useEffect, useState, type FC } from "react";
import type { Noticia } from "../interface/noticia.interface";
import { NoticiasList } from "./NoticiasList";
import { mockNoticias } from "../mock/noticias.mock";

export const Noticias: FC = () => {
  const [noticias, setNoticias] = useState<Noticia[]>([]);

  useEffect(() => {
    setNoticias(mockNoticias);
  }, []);

  return <NoticiasList noticias={noticias} />;
};

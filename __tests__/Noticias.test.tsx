import { render, screen } from "@testing-library/react";
import { Noticias } from "../src/noticias/component/Noticias";
import { mockNoticias } from "../src/noticias/mock/noticias.mock";

describe("Noticias Component", () => {
  it("debe renderizar todas las noticias correctamente", async () => {
    render(<Noticias />);

    for (const noticia of mockNoticias) {
      expect(await screen.findByText(noticia.titulo)).toBeTruthy();
    }

    for (const noticia of mockNoticias) {
      expect(await screen.findByText(noticia.descripcion)).toBeTruthy();
      expect(await screen.findByText(noticia.fecha)).toBeTruthy();
    }

    const enlaces = await screen.findAllByRole("link");
    expect(enlaces.length).toBe(mockNoticias.length);
    enlaces.forEach((enlace, i) => {
      expect(enlace.getAttribute("href")).toBe(mockNoticias[i].url);
      expect(enlace.getAttribute("target")).toBe("_blank");
    });

    const imagenes = await screen.findAllByRole("img");
    expect(imagenes.length).toBe(mockNoticias.length);
    imagenes.forEach((img, i) => {
      expect(img.getAttribute("src")).toBe(mockNoticias[i].imagen);
    });
  });
});

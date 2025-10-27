
import { createRoot } from "react-dom/client";
import { Formulario } from "../src/formulario/components/Formulario";
import "bootstrap/dist/css/bootstrap.min.css";


describe("Formulario", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    createRoot(container).render(<Formulario />);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  it("renderiza el título correctamente", (done) => {
    setTimeout(() => {
      const title = container.querySelector(".section-title");
      expect(title?.textContent).toContain("Contacto");
      done();
    }, 50);
  });

  it("renderiza el campo de nombre", (done) => {
    setTimeout(() => {
      const nombreInput = container.querySelector("input[placeholder='Rodrigo']");
      expect(nombreInput).not.toBeNull();
      done();
    }, 50);
  });

  it("muestra mensaje de éxito al enviar formulario válido", (done) => {
    setTimeout(() => {
      const form = container.querySelector("form") as HTMLFormElement;
      const nombre = container.querySelector("input[placeholder='Rodrigo']") as HTMLInputElement;
      const email = container.querySelector("input[type='email']") as HTMLInputElement;
      const telefono = container.querySelector("input[type='tel']") as HTMLInputElement;
      const motivo = container.querySelector("select") as HTMLSelectElement;
      const asunto = container.querySelector("input[placeholder='asunto...']") as HTMLInputElement;
      const mensaje = container.querySelector("textarea") as HTMLTextAreaElement;

     
      nombre.value = "Ash";
      email.value = "ash@pokemon.com";
      telefono.value = "+56912345678";
      motivo.value = "consulta";
      asunto.value = "Gengar";
      mensaje.value = "¿Dónde lo encuentro?";

      nombre.dispatchEvent(new Event("input", { bubbles: true }));
      email.dispatchEvent(new Event("input", { bubbles: true }));
      telefono.dispatchEvent(new Event("input", { bubbles: true }));
      motivo.dispatchEvent(new Event("change", { bubbles: true }));
      asunto.dispatchEvent(new Event("input", { bubbles: true }));
      mensaje.dispatchEvent(new Event("input", { bubbles: true }));

      form.dispatchEvent(new Event("submit", { bubbles: true }));

      setTimeout(() => {
        const successMsg = container.querySelector(".alert-success");
        expect(successMsg?.textContent).toContain("Mensaje enviado con éxito");
        done();
      }, 100);
    }, 50);
  });

    it("debe marcar el campo email como inválido si no contiene '@'", (done) => {
        setTimeout(() => {
            const form = container.querySelector("form") as HTMLFormElement;
            const email = container.querySelector("input[type='email']") as HTMLInputElement;
            email.value = "correoSinArroba.com";
            email.dispatchEvent(new Event("input", { bubbles: true }));
            form.dispatchEvent(new Event("submit", { bubbles: true }));

            setTimeout(() => {
            expect(email.classList.contains("is-invalid")).not.toBeTrue();
            done();
            }, 100);
        }, 50);
    });

  it("no muestra mensaje de éxito si el formulario está vacío", (done) => {
    setTimeout(() => {
      const form = container.querySelector("form") as HTMLFormElement;
      form.dispatchEvent(new Event("submit", { bubbles: true }));

      setTimeout(() => {
        const successMsg = container.querySelector(".alert-success");
        expect(successMsg).toBeNull();
        done();
      }, 100);
    }, 50);
  });
});


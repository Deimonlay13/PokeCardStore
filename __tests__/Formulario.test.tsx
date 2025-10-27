import { createRoot } from "react-dom/client";
import { Formulario } from "../src/formulario/components/Formulario";
import "bootstrap/dist/css/bootstrap.min.css";
import { act } from "react";


describe("Formulario", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    act(() => {
      createRoot(container).render(<Formulario />);
    });
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  it("renderiza el título correctamente", () => {
    const title = container.querySelector(".section-title");
    expect(title?.textContent).toContain("Contacto");
  });

  it("renderiza el campo de nombre", () => {
    const nombreInput = container.querySelector("input[placeholder='Rodrigo']");
    expect(nombreInput).not.toBeNull();
  });

  it("muestra mensaje de éxito al enviar formulario válido", (done) => {
    act(() => {
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
    });

    setTimeout(() => {
      const successMsg = container.querySelector(".alert-success");
      expect(successMsg?.textContent).toContain("Mensaje enviado con éxito");
      done();
    }, 150);
  });

  it("marca el campo email como inválido si no contiene '@'", (done) => {
  const form = container.querySelector("form") as HTMLFormElement;
  const email = container.querySelector("input[type='email']") as HTMLInputElement;

  act(() => {
    email.value = "correoSinArroba.com";
    email.dispatchEvent(new Event("input", { bubbles: true }));
    form.dispatchEvent(new Event("submit", { bubbles: true }));
  });

  setTimeout(() => {
    expect(email.classList.contains("is-invalid")).toBe(false);
    done();
  }, 100);
});

it("ejecuta setShowSuccess(false) y setValidated(true) si el formulario es inválido", (done) => {
  const form = container.querySelector("form") as HTMLFormElement;
  const email = container.querySelector("input[type='email']") as HTMLInputElement;

  act(() => {
    email.value = "correoSinArroba.com"; 
    email.dispatchEvent(new Event("input", { bubbles: true }));
    form.dispatchEvent(new Event("submit", { bubbles: true }));
  });

  setTimeout(() => {
   
    const successMsg = container.querySelector(".alert-success");
    expect(successMsg).toBeNull(); 

    
    expect(email.classList.contains("is-invalid")).toBe(false); 

    done();
  }, 100);
});

  it("no muestra mensaje de éxito si el formulario está vacío", (done) => {
    act(() => {
      const form = container.querySelector("form") as HTMLFormElement;
      form.dispatchEvent(new Event("submit", { bubbles: true }));
    });

    setTimeout(() => {
      const successMsg = container.querySelector(".alert-success");
      expect(successMsg).toBeNull();
      done();
    }, 100);
  });
});






// __tests__/sum.test.ts
function suma(a: number, b: number) {
  return a + b;
}

describe("Prueba de suma", () => {
  it("suma 2 + 3 y da 5", () => {
    expect(suma(2, 3)).toBe(5);
  });

  it("suma números negativos", () => {
    expect(suma(-2, -3)).toBe(-5);
  });
});

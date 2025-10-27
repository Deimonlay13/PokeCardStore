// Evitar que Karma se inicie automáticamente
if (typeof __karma__ !== "undefined" && __karma__.loaded) {
  __karma__.loaded = function () {};
}

// Buscar todos los tests en __tests__
const context = require.context("./__tests__", true, /\.test\.(ts|tsx)$/);
context.keys().forEach(context);

// Iniciar Karma después de cargar todos los tests
if (typeof __karma__ !== "undefined" && __karma__.start) {
  __karma__.start();
}

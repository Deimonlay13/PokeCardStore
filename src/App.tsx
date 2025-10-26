<<<<<<< HEAD

import './App.css'
import { Formulario } from './formulario/components/Formulario'

function App() {

  return (
    <>
      <Formulario/>
    </>
  )
=======
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { appRouter } from './router/app.router';

function App() {
  return <RouterProvider router={appRouter} />;
>>>>>>> origin/dev
}

export default App;


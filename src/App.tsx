

import './App.css'
import { Formulario } from './formulario/components/Formulario'



import { RouterProvider } from 'react-router-dom';
import './App.css';
import { appRouter } from './router/app.router';

function App() {
  return <RouterProvider router={appRouter} />;
    <>
      <Formulario/>
    </>

}

export default App;


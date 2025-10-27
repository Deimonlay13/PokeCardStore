import { RouterProvider } from 'react-router-dom';
import { appRouter } from './router/app.router';
import "./App.css";

function App() {
  
  return <RouterProvider router={appRouter} />;
}

export default App;


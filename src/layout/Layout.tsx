import Header from '../shared/component/Header';
import Footer from '../shared/component/Footer';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-grow-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

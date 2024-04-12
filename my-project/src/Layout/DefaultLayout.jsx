import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Sidebar />
      <Footer />
    </>
  );
}

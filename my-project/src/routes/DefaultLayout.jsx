import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

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

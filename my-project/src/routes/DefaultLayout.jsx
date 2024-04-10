import Footer from './Footer';
import Header from './Header';

export function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

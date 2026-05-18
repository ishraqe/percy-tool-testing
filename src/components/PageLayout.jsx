import Navbar from './Navbar';
import Footer from './Footer';

export default function PageLayout({ children }) {
  return (
    <div className="page">
      <Navbar />
      <main className="page-main">{children}</main>
      <Footer />
    </div>
  );
}

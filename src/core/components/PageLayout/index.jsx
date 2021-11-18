import Footer from '../Footer';
import Header from '../Header';

function PageLayout({ children }) {
  return (
    <div>
      <Header></Header>

      <div style={{ minHeight: '80vh' }}>{children}</div>

      <Footer></Footer>
    </div>
  );
}
export default PageLayout;

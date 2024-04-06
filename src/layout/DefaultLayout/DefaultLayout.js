import Header from '~/layout/component/Header';
import Footer from '~/layout/component/Footer';
function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;

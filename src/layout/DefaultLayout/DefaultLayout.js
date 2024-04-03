import Header from '~/layout/component/Header';
import Footer from '~/layout/component/Footer';
function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container" style={{ backgroundColor: ' var(--background-color)' }}>
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;

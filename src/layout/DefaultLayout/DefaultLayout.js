import Header from '~/layout/component/Header';
function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container" style={{ backgroundColor: ' var(--background-color)' }}>
                {children}
            </div>
        </div>
    );
}

export default DefaultLayout;

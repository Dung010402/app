import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import { DefaultLayout } from './layout/DefaultLayout';
import ShopCategory from './pages/ShopCategory/ShopCategory';
function App() {
    return (
        <Router>
            <div className="App" style={{ borderRadius: '0px' }}>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Layout = route.layout === null ? Fragment : DefaultLayout;
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                    <Route path="/category/male" element={<ShopCategory category="men" />} />
                    <Route path="/category/female" element={<ShopCategory category="women" />} />
                    <Route path="/category/young" element={<ShopCategory category="kid" />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

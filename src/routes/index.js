import Home from '~/layout/component/Home';
import Login from '~/pages/Account/Login';
import Register from '~/pages/Account/Register';
import Cart from '~/pages/Cart';
import Product from '~/pages/Product';

export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login, layout: null },
    { path: '/register', component: Register, layout: null },
    { path: '/cart', component: Cart, layout: null },
    { path: '/product/:id', component: Product },
];

export const privateRoutes = [];

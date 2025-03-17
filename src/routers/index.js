// Page
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import Register from "../pages/Register";

import Home from "../pages/Home"

// Layout
import AuthenticationLayout from "../components/Layouts/AuthenticationLayout"
import DefaultLayout from "../components/Layouts/DefaultLayout"
import ThongBaoXet from "../pages/ThongBaoXet";
import BoTieuChuan from "../pages/BoTieuChuan";
import ThongTinCaNhan from "../pages/ThongTinCaNhan";
import NopHoSo from "../pages/NopHoSo";

// Private routes
const privateRoutes = [
    { path: '/', component: Home, layout: DefaultLayout },
    { path: '/thong-bao-xet', component: ThongBaoXet, layout: DefaultLayout },
    { path: '/bo-tieu-chuan', component: BoTieuChuan, layout: DefaultLayout },
    { path: '/thong-tin-ca-nhan', component: ThongTinCaNhan, layout: DefaultLayout },
    { path: '/nop-ho-so', component: NopHoSo, layout: DefaultLayout },
]

// Public routes
const publicRoutes = [
    { path: '/forgot-password', component: ForgotPassword, layout: AuthenticationLayout },
    { path: '/', component: Login, layout: AuthenticationLayout },
    { path: '/register', component: Register, layout: AuthenticationLayout }
]

export { privateRoutes, publicRoutes }
import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Layout from "./Layout/Layout";
import RestrictedRoute from "./RestrictedRoute";
import { selectIsRefreshing } from "../redux/auth/selectors";
import PrivateRoute from "./PrivateRoute";
import { refreshUser } from "../redux/auth/operations";

const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));


export default function App() {
    const dispatch = useDispatch();
    const isRefreshing = useSelector(selectIsRefreshing);

    useEffect(() => {
        dispatch(refreshUser())
    }, [dispatch]);
    return (
        isRefreshing ? (
            <p>Refreshing user please wait...</p>
        ) : (
            <Layout>
                    <Suspense fallback={null}>
                        <Routes>
                            <Route path="/" element={<HomePage/>} />
                            <Route path="/register" element={<RestrictedRoute component={< RegisterPage />} redirectTo="/" />} />
                            <Route path="/login" element={<RestrictedRoute component={<LoginPage/> } redirectTo="/contacts"/> } />
                            <Route path="/contacts" element={<PrivateRoute component={<ContactsPage />} redirectTo="/login" /> } />
                            <Route path="*" element={<HomePage />} />
                        </Routes>
                    </Suspense> 
           </Layout>     
    )
)}
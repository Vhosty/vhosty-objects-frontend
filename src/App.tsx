import React from "react";
import {useDispatch} from "react-redux";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import rn from "random-number";

import "moment/locale/ru";

import {Footer, Header} from "./components/";

import {Home, Reglog} from "./pages";

const App = () => {
    const dispatch = useDispatch();

    const {pathname} = useLocation();

    const isRedirectUser = localStorage.getItem("accessToken");

    React.useEffect(() => {
        let cords: any = ["scrollX", "scrollY"];

        window.addEventListener("unload", (e) =>
            cords.forEach((cord: any) => (localStorage[cord] = window[cord]))
        );
        window.scroll(...cords.map((cord: any) => localStorage[cord]));

        const userNumber: string = `${Math.floor(
            rn({min: 100, max: 999})
        )}-${Math.floor(rn({min: 100, max: 999}))}`;

        if (!localStorage.getItem("userNumber")) {
            localStorage.setItem("userNumber", userNumber);
        }
    }, []);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <React.Suspense fallback={<></>}>
                {pathname === "/" ||
                pathname.indexOf("/cabinet") !== -1 ||
                pathname === "/" ||
                pathname.indexOf("/confirmed") !== -1 ? null : (
                    <Header />
                )}

                <Reglog />

                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>

                {pathname.indexOf("/confirmed") !== -1 ? null : <Footer />}
            </React.Suspense>
        </>
    );
};

export default App;

import React from "react";
import {useDispatch} from "react-redux";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import rn from "random-number";

import "moment/locale/ru";

import {
    Footer,
    Header,
    CabinetMain,
    CabinetSetting,
    CabinetReserv,
    CabinetObjects,
} from "./components/";

import {Home, Reglog, Cabinet, Confirmed, ObjectsNew} from "./pages";

import {fetchUserAboutMe} from "./redux/actions/user/user";

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

        if (localStorage.getItem("accessToken")) {
            dispatch(fetchUserAboutMe() as any);
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

                    <Route
                        path="/confirmed/:hash"
                        element={
                            isRedirectUser ? <Confirmed /> : <Navigate to="/" />
                        }
                    />

                    <Route
                        path="/cabinet/main"
                        element={
                            isRedirectUser ? (
                                <Cabinet block={<CabinetMain />} />
                            ) : (
                                <Navigate to="/" />
                            )
                        }
                    />

                    <Route
                        path="/cabinet/setting"
                        element={
                            isRedirectUser ? (
                                <Cabinet block={<CabinetSetting />} />
                            ) : (
                                <Navigate to="/" />
                            )
                        }
                    />

                    <Route
                        path="/cabinet/reserv"
                        element={
                            isRedirectUser ? (
                                <Cabinet block={<CabinetReserv />} />
                            ) : (
                                <Navigate to="/" />
                            )
                        }
                    />

                    <Route
                        path="/cabinet/objects"
                        element={
                            isRedirectUser ? (
                                <Cabinet block={<CabinetObjects />} />
                            ) : (
                                <Navigate to="/" />
                            )
                        }
                    />

                    <Route
                        path="/objects/new"
                        element={
                            isRedirectUser ? (
                                <ObjectsNew />
                            ) : (
                                <Navigate to="/" />
                            )
                        }
                    />
                </Routes>

                {pathname.indexOf("/confirmed") !== -1 ? null : <Footer />}
            </React.Suspense>
        </>
    );
};

export default App;

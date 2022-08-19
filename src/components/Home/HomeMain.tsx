import React from "react";
import {Link} from "react-router-dom";
import Typed from "react-typed";

import {HeaderTransparent} from "../";

import MainBg from "../../assets/images/main-bg.jpg";

const HomeMain: React.FC = () => {
    return (
        <section className="home">
            <div className="container">
                <div className="home-main-wrapper">
                    <HeaderTransparent bgImage={MainBg} />

                    <div className="home-main-text">
                        <h1 className="home-main-text__title">
                            Зарабатывайте: зарегистрируйте&nbsp;
                            <Typed
                                strings={[
                                    "отель",
                                    "хостел",
                                    "аппартаменты",
                                    "гостевой дом",
                                ]}
                                backSpeed={100}
                                typeSpeed={100}
                                loop
                            />
                        </h1>

                        <p className="description home-main-text__description">
                            Регистрация бесплатная и занимает 10 минут
                        </p>

                        {/* <Link
                            to="#request_register"
                            className="btn home-main-text__btn"
                        >
                            Отправить заявку
                        </Link> */}

                        <Link
                            to="#register"
                            className="btn home-main-text__btn"
                        >
                            Зарегистрироваться
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeMain;

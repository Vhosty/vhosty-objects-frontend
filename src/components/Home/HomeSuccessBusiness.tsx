import React from "react";
import {Link} from "react-router-dom";

import HomeSuccessBusinessImage from "../../assets/images/main-success-business-image.png";

const HomeSuccessBusiness: React.FC = () => {
    return (
        <section className="home-success-business">
            <div className="container">
                <div className="home-success-business-wrapper">
                    <div className="home-success-business-img">
                        <img
                            src={HomeSuccessBusinessImage}
                            alt=""
                            className="home-success-business-img__img"
                        />
                    </div>
                    <div className="home-success-business-text">
                        <h2 className="home-success-business-text__title">
                            <span>Успех</span> вашего бизнеса зависит от Вас
                            самих! <br /> Мы - поможем
                        </h2>
                        <p className="home-success-business-text__description">
                            Свяжемся с Вами и&nbsp;
                            <span>объясним процесс ведения бизнеса</span>
                            &nbsp;на нашей платформе. Поможем создать Ваше
                            первое объявление, благодаря которому&nbsp;
                            <span>Вы найдете первых гостей</span> и&nbsp;
                            <span>начнете зарабатывать</span>
                        </p>

                        <Link
                            to="#register"
                            className="btn home-success-business-text__btn"
                        >
                            Оставить контактные данные
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSuccessBusiness;

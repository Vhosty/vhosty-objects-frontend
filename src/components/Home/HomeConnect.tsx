import React from "react";
import { Link } from "react-router-dom";

import MainConnectImage from "../../assets/images/main-connect-image.png";

const HomeConnect: React.FC = () => {
    return (
        <section className="home-connect">
            <div className="container">
                <div className="home-connect-wrapper">
                    <div className="home-connect-text">
                        <h2 className="home-connect-text__title">
                            <span>Путешественники</span> по всей России будут
                            видеть ваш объект <span>ежедневно</span>
                        </h2>
                        <p className="home-connect-text__description">
                            Получите свои первые бронирования уже сегодня за
                            пару шагов: пройдите регистрацию, зарегистрируйте
                            объект размещения -&nbsp;
                            <span>Все остальное сделаем мы!</span>
                        </p>
                        <Link
                            to="#request_register"
                            className="btn home-connect-text__btn"
                        >
                            Присоединиться к Bookover
                        </Link>
                    </div>
                    <div className="home-connect-img">
                        <img
                            src={MainConnectImage}
                            alt=""
                            className="home-connect-img__img"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeConnect;

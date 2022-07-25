import React from "react";
import {Link} from "react-router-dom";

import CabinetMainNotificationsAboutImg from "../../../../assets/images/cabinet-block-main-notifications-block-about.png";

const CabinetMainNotificationsAbout: React.FC = () => {
    return (
        <div className="cabinet-block-main-notifications-block">
            <div className="cabinet-block-main-notifications-block-text">
                <h3 className="cabinet-block-main-notifications-block-text__title">
                    Дайте знать больше
                </h3>
                <p className="cabinet-block-main-notifications-block-text__description">
                    Больше данных помогут пользователям сделать выбор в пользу
                    вашего объекта
                </p>
            </div>

            <Link
                to="/"
                className="btn small cabinet-block-main-notifications-block__btn"
            >
                Перейти
            </Link>
            <img
                src={CabinetMainNotificationsAboutImg}
                alt=""
                className="cabinet-block-main-notifications-block__img"
            />
        </div>
    );
};

export default CabinetMainNotificationsAbout;

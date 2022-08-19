import React from "react";
import {Link} from "react-router-dom";

import CabinetMainNotificationsConfirmedImg from "../../../../assets/images/cabinet-block-main-notifications-block-confirmed.png";

const CabinetMainNotificationsConfirmed: React.FC = () => {
    return (
        <div className="cabinet-block-main-notifications-block gradient">
            <div className="cabinet-block-main-notifications-block-text">
                <h3 className="cabinet-block-main-notifications-block-text__title">
                    В одном шаге от гостей!
                </h3>
                <p className="cabinet-block-main-notifications-block-text__description">
                    Пройдите верификацию на объекте&nbsp;
                    <span>BOOKOVER sweet home elite global neverland</span>, чтобы
                    получить бронирования
                </p>
            </div>

            <Link
                to="/"
                className="btn-light small cabinet-block-main-notifications-block__btn"
            >
                Перейти
            </Link>
            <img
                src={CabinetMainNotificationsConfirmedImg}
                alt=""
                className="cabinet-block-main-notifications-block__img"
            />
        </div>
    );
};

export default CabinetMainNotificationsConfirmed;

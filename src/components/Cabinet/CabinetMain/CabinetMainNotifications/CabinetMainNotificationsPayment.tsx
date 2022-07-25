import React from "react";
import {Link} from "react-router-dom";

import CabinetMainNotificationsPaymentImg from "../../../../assets/images/cabinet-block-main-notifications-block-payment.png";

const CabinetMainNotificationsPayment: React.FC = () => {
    return (
        <div className="cabinet-block-main-notifications-block">
            <div className="cabinet-block-main-notifications-block-text">
                <h3 className="cabinet-block-main-notifications-block-text__title">
                    Счет за октябрь
                </h3>
                <p className="cabinet-block-main-notifications-block-text__description">
                    Мы прислали Вам счет за октябрь по бронированиям. Оплатите
                    его до 15 ноября
                </p>
            </div>

            <Link
                to="/"
                className="btn small cabinet-block-main-notifications-block__btn"
            >
                Оплатить
            </Link>
            <img
                src={CabinetMainNotificationsPaymentImg}
                alt=""
                className="cabinet-block-main-notifications-block__img"
            />
        </div>
    );
};

export default CabinetMainNotificationsPayment;

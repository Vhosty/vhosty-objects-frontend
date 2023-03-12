import React from "react";

const CabinetFinanceReservsPeriodReservsItemTitles: React.FC = () => {
    return (
        <div className="cabinet-block-finance-reservs-period-reservs-titles">
            <p className="cabinet-block-finance-reservs-period-reservs-titles__item reserv">
                Бронирование
            </p>

            <p className="cabinet-block-finance-reservs-period-reservs-titles__item name">
                Имя гостя
            </p>

            <p className="cabinet-block-finance-reservs-period-reservs-titles__item date">
                Заезд - Отъезд
            </p>

            <p className="cabinet-block-finance-reservs-period-reservs-titles__item nights">
                Ночей
            </p>

            <p className="cabinet-block-finance-reservs-period-reservs-titles__item status">
                Статус
            </p>

            <p className="cabinet-block-finance-reservs-period-reservs-titles__item sum">
                Изначально (RUB)
            </p>

            <p className="cabinet-block-finance-reservs-period-reservs-titles__item total-sum">
                Итог (RUB)
            </p>

            <p className="cabinet-block-finance-reservs-period-reservs-titles__item commission">
                Комиссия
            </p>

            <p className="cabinet-block-finance-reservs-period-reservs-titles__item comment">
                Комментарий
            </p>
        </div>
    );
};

export default CabinetFinanceReservsPeriodReservsItemTitles;

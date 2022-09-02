import React from "react";

const CabinetReservItemTitle: React.FC = () => {
    return (
        <div className="cabinet-block-reserv-titles">
            <p className="cabinet-block-reserv-titles__item object">
                Объявление
            </p>

            <p className="cabinet-block-reserv-titles__item guests">
                Имя гостя
            </p>

            <p className="cabinet-block-reserv-titles__item from-to">
                Заезд - отъезд
            </p>

            <p className="cabinet-block-reserv-titles__item price">К оплате</p>

            <p className="cabinet-block-reserv-titles__item commission">
                Комиссия
            </p>

            <p className="cabinet-block-reserv-titles__item booking">
                Бронирование
            </p>

            <p className="cabinet-block-reserv-titles__item confirmation">
                Подтверждение
            </p>
        </div>
    );
};

export default CabinetReservItemTitle;

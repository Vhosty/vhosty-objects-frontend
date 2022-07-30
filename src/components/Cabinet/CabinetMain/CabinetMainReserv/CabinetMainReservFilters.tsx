import React from "react";
import {Link} from "react-router-dom";

const CabinetMainReservFilters: React.FC = () => {
    const btns = [
        {
            title: "Выезжают",
            key: "departure",
            count: 10,
        },
        {
            title: "Проживают",
            key: "reside",
            count: 19,
        },
        {
            title: "Скоро приедут",
            key: "coming-soon",
            count: 5,
        },
        {
            title: "Предстоящие",
            key: "upcoming",
            count: 3,
        },
    ];

    return (
        <div className="cabinet-block-main-reserv-filters">
            <div className="cabinet-block-main-reserv-filters-btn">
                {btns.map((btn, index) => (
                    <button
                        className={`cabinet-block-main-reserv-filters-btn__btn`}
                        key={`cabinet-block-main-reserv-filters-btn__btn-${index}`}
                    >
                        {btn.title}&nbsp;
                        <span>({btn.count})</span>
                    </button>
                ))}
            </div>

            <Link to="/" className="btn-line cabinet-block-main-reserv-filters__all">
                Все бронирования (37)
            </Link>
        </div>
    );
};

export default CabinetMainReservFilters;

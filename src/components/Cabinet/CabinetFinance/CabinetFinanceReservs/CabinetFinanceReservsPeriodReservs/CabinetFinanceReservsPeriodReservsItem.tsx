import React from "react";

const CabinetFinanceReservsPeriodReservsItem: React.FC = () => {
    return (
        <div className={`cabinet-block-finance-reservs-period-reservs-item`}>
            <div className="cabinet-block-finance-reservs-period-reservs-item-block-reserv">
                <p className="cabinet-block-finance-reservs-period-reservs-item-block-reserv__title">
                    № 2372533808
                </p>

                <p className="cabinet-block-finance-reservs-period-reservs-item-block-reserv__date">
                    12 сент. 2021
                </p>
            </div>

            <div className="cabinet-block-finance-reservs-period-reservs-item-block-name">
                <p className="cabinet-block-finance-reservs-period-reservs-item-block-name__title">
                    Филипова Анастасия Александровна
                </p>

                <p className="cabinet-block-finance-reservs-period-reservs-item-block-name__subtitle">
                    2 гостя, 1 ребенок
                </p>
            </div>

            <div className="cabinet-block-finance-reservs-period-reservs-item-block-date">
                <p className="cabinet-block-finance-reservs-period-reservs-item-block-date__from">
                    25 сент. 2021
                </p>

                <p className="cabinet-block-finance-reservs-period-reservs-item-block-date__to">
                    25 окт. 2021
                </p>
            </div>

            <div className="cabinet-block-finance-reservs-period-reservs-item-block-nights">
                <p className="cabinet-block-finance-reservs-period-reservs-item-block-nights__title">
                    1
                </p>
            </div>

            <div className="cabinet-block-finance-reservs-period-reservs-item-block-status success">
                <p className="cabinet-block-finance-reservs-period-reservs-item-block-status__title">
                    Завершен
                </p>
            </div>

            <div className="cabinet-block-finance-reservs-period-reservs-item-block-sum">
                <p className="cabinet-block-finance-reservs-period-reservs-item-block-sum__title">
                    210 000 ₽
                </p>
            </div>

            <div className="cabinet-block-finance-reservs-period-reservs-item-block-total-sum">
                <p className="cabinet-block-finance-reservs-period-reservs-item-block-total-sum__title">
                    0 ₽
                </p>
            </div>

            <div className="cabinet-block-finance-reservs-period-reservs-item-block-commission">
                <p className="cabinet-block-finance-reservs-period-reservs-item-block-commission__title">
                    0 ₽
                </p>
            </div>

            <div className="cabinet-block-finance-reservs-period-reservs-item-block-comment">
                <p className="cabinet-block-finance-reservs-period-reservs-item-block-comment__title">
                    Отсутствует
                </p>
            </div>
        </div>
    );
};

export default CabinetFinanceReservsPeriodReservsItem;

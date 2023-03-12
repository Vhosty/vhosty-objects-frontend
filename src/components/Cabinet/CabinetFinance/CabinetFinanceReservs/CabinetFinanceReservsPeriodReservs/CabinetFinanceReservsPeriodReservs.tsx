import React from "react";

import {CabinetFinanceReservsPeriodReservsEvents} from "../../../../";

const CabinetFinanceReservsPeriodReservs: React.FC = () => {
    return (
        <div className="cabinet-block-finance-reservs-period-reservs">
            <div className="cabinet-block-finance-reservs-period-reservs-padding">
                <h3 className="cabinet-block-finance-reservs-period-reservs__title">
                    Бронирования за выбранный период, включенные в счет
                </h3>

                <CabinetFinanceReservsPeriodReservsEvents />
            </div>
        </div>
    );
};

export default CabinetFinanceReservsPeriodReservs;

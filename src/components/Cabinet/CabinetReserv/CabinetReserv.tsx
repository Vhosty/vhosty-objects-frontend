import React from "react";

import {CabinetReservItemTitle, CabinetReservItem, CabinetReservFilters, CabinetReservEvents} from "../../";

const CabinetReserv: React.FC = () => {
    return (
        <div className="cabinet-block cabinet-block-reserv">
            <div className="cabinet-block-padding-top">
                <div className="cabinet-block-text">
                    <h2 className="cabinet-block-text__title">Бронирования</h2>
                </div>

				<CabinetReservFilters />
				
				<CabinetReservEvents />
            </div>

            <CabinetReservItemTitle />

            <div className="cabinet-block-reserv-items-wrapper">
                <CabinetReservItem />
                <CabinetReservItem />
                <CabinetReservItem />
                <CabinetReservItem />
                <CabinetReservItem />
            </div>
        </div>
    );
};

export default CabinetReserv;

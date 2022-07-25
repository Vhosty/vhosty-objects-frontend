import React from "react";

import {
    CabinetMainReservFilters,
    CabinetReservItemTitle,
    CabinetReservItem,
} from "../../../";

const CabinetMainReserv: React.FC = () => {
    return (
        <div className="cabinet-block-main-reserv">
            <div className="cabinet-block-padding">
                <CabinetMainReservFilters />
			</div>
			
			<CabinetReservItemTitle />
			
            <div className="cabinet-block-main-reserv-items-wrapper">
                <CabinetReservItem />
                <CabinetReservItem />
                <CabinetReservItem />
                <CabinetReservItem />
                <CabinetReservItem />
            </div>
        </div>
    );
};

export default CabinetMainReserv;

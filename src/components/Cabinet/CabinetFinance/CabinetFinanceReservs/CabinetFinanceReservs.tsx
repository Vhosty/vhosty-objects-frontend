import React from "react";

import {
    CabinetFinanceTopText,
    CabinetFinanceReservsFilters,
    CabinetFinanceReservsAccounts,
    CabinetFinanceReservsPeriodReservs,
    CabinetFinanceReservsPeriodReservsItemTitles,
    CabinetFinanceReservsPeriodReservsItem,
} from "../../../";

const CabinetFinanceReservs: React.FC = () => {
    return (
        <div className="cabinet-block cabinet-block-finance-reservs">
            <div className="cabinet-block-padding-top">
                <CabinetFinanceTopText />

                <CabinetFinanceReservsFilters />

                <CabinetFinanceReservsAccounts />
			</div>
			
			<CabinetFinanceReservsPeriodReservs />

			<CabinetFinanceReservsPeriodReservsItemTitles />

			<CabinetFinanceReservsPeriodReservsItem />
        </div>
    );
};

export default CabinetFinanceReservs;

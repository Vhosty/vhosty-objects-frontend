import React from "react";

import {
    CabinetFinanceReservsFiltersCompany,
    CabinetFinanceReservsFiltersObject,
    CabinetFinanceReservsFiltersCalendar,
} from "../../../../";

const CabinetFinanceReservsFilters: React.FC = () => {
    return (
        <div className="cabinet-block-finance-reservs-filters">
            <div className="cabinet-block-finance-reservs-filters-selects">
                <CabinetFinanceReservsFiltersCompany />
                <CabinetFinanceReservsFiltersObject />
            </div>

            <CabinetFinanceReservsFiltersCalendar />
        </div>
    );
};

export default CabinetFinanceReservsFilters;

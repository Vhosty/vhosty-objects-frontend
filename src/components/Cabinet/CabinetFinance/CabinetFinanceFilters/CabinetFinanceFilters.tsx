import React from "react";

import {
    CabinetFinanceFiltersTypes,
    CabinetFinanceFiltersCompany,
    CabinetFinanceFiltersObject,
    CabinetFinanceFiltersCalendar,
} from "../../../";

const CabinetFinanceFilters: React.FC = () => {
    return (
        <div className="cabinet-block-finance-filters">
            <CabinetFinanceFiltersTypes />

            <div className="cabinet-block-finance-filters-more">
                <div className="cabinet-block-finance-filters-more-selects">
                    <CabinetFinanceFiltersCompany />
                    <CabinetFinanceFiltersObject />
				</div>
				
                <div className="cabinet-block-finance-filters-more-calendar">
                    <CabinetFinanceFiltersCalendar />
                </div>
            </div>
        </div>
    );
};

export default CabinetFinanceFilters;

import React from "react";

import {
    CabinetFinanceStatisticsFiltersCompany,
    CabinetFinanceStatisticsFiltersObject,
    CabinetFinanceStatisticsFiltersCalendar,
} from "../../../../";

const CabinetFinanceStatisticsFilters: React.FC = () => {
    return (
        <div className="cabinet-block-finance-statistics-filters">
            <div className="cabinet-block-finance-statistics-filters-selects">
                <CabinetFinanceStatisticsFiltersCompany />
                <CabinetFinanceStatisticsFiltersObject />
            </div>

            <CabinetFinanceStatisticsFiltersCalendar />
        </div>
    );
};

export default CabinetFinanceStatisticsFilters;

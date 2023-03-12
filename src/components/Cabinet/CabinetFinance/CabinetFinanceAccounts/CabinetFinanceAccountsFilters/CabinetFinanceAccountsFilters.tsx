import React from "react";

import {
    CabinetFinanceAccountsFiltersCompany,
    CabinetFinanceAccountsFiltersObject,
    CabinetFinanceAccountsFiltersCalendar,
} from "../../../../";

const CabinetFinanceAccountsFilters: React.FC = () => {
    return (
        <div className="cabinet-block-finance-accounts-filters">
            <div className="cabinet-block-finance-accounts-filters-selects">
                <CabinetFinanceAccountsFiltersCompany />
                <CabinetFinanceAccountsFiltersObject />
            </div>

            <CabinetFinanceAccountsFiltersCalendar />
        </div>
    );
};

export default CabinetFinanceAccountsFilters;

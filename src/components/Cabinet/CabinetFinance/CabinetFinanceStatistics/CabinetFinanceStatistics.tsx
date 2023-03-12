import React from "react";

import {
    CabinetFinanceTopText,
    CabinetFinanceStatisticsFilters,
    CabinetFinanceStatisticsDashboard,
    CabinetFinanceStatisticsSummaryEvents,
} from "../../../";

const CabinetFinanceStatistics: React.FC = () => {
    return (
        <div className="cabinet-block cabinet-block-finance-statistics">
            <div className="cabinet-block-padding">
                <CabinetFinanceTopText />

                <CabinetFinanceStatisticsFilters />

                <CabinetFinanceStatisticsDashboard />

                <CabinetFinanceStatisticsSummaryEvents />
            </div>
        </div>
    );
};

export default CabinetFinanceStatistics;

import React from "react";

import {CabinetFinanceFilters, CabinetFinanceDashboard, CabinetFinanceSummaryEvents} from "../../";

const CabinetFinance: React.FC = () => {
    return (
        <div className="cabinet-block cabinet-block-finance">
            <div className="cabinet-block-padding">
                <div className="cabinet-block-text">
                    <h2 className="cabinet-block-text__title">Финансы</h2>

                    <p className="cabinet-block-text__subtitle">
                        Детальные финансовые отчеты, задолженности, выставленные
                        счета
                    </p>
                </div>

                <CabinetFinanceFilters />

				<CabinetFinanceDashboard />
				
				<CabinetFinanceSummaryEvents />
            </div>
        </div>
    );
};

export default CabinetFinance;

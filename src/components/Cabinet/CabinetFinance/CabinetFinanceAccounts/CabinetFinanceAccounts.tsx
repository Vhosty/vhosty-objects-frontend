import React from "react";

import {
    CabinetFinanceTopText,
    CabinetFinanceAccountsFilters,
    CabinetFinanceAccountsDebts,
    CabinetFinanceAccountsHistory,
} from "../../../";

const CabinetFinanceAccounts: React.FC = () => {
    return (
        <div className="cabinet-block cabinet-block-finance-accounts">
            <div className="cabinet-block-padding-top">
				<CabinetFinanceTopText />
				
				<CabinetFinanceAccountsFilters />

				<CabinetFinanceAccountsDebts />
			</div>

			<CabinetFinanceAccountsHistory />
        </div>
    );
};

export default CabinetFinanceAccounts;

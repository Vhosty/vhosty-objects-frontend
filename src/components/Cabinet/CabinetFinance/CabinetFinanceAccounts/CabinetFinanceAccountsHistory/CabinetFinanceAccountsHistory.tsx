import React from "react";

import {
    CabinetFinanceAccountsHistoryEvents,
    CabinetFinanceAccountsHistoryItemTitles,
    CabinetFinanceAccountsHistoryItem,
} from "../../../../";

const CabinetFinanceAccountsHistory: React.FC = () => {
    return (
        <div className="cabinet-block-finance-accounts-history">
            <div className="cabinet-block-finance-accounts-history-padding">
                <h3 className="cabinet-block-finance-accounts-history__title">
                    История счетов
                </h3>

                <CabinetFinanceAccountsHistoryEvents />
            </div>

			<CabinetFinanceAccountsHistoryItemTitles />
			
			<CabinetFinanceAccountsHistoryItem />
        </div>
    );
};

export default CabinetFinanceAccountsHistory;

import React from "react";

import {Checkbox} from "../../../../";

const CabinetFinanceAccountsHistoryItemTitles: React.FC = () => {
    return (
        <div className="cabinet-block-finance-accounts-history-titles">
            <div className="cabinet-block-finance-accounts-history-titles-checkbox">
                <Checkbox
                //   onClick={setFillObjectsDeleteIdsOnClick}
                //   checked={isAll}
                >
                    <></>
                </Checkbox>
            </div>

            <p className="cabinet-block-finance-accounts-history-titles__item name">
                Название документа
            </p>

            <p className="cabinet-block-finance-accounts-history-titles__item number">
                Номер
            </p>

            <p className="cabinet-block-finance-accounts-history-titles__item date">
                Дата
            </p>

            <p className="cabinet-block-finance-accounts-history-titles__item period">
                Период
            </p>

            <p className="cabinet-block-finance-accounts-history-titles__item date-payment">
                Дата платежа
            </p>

            <p className="cabinet-block-finance-accounts-history-titles__item status">
                Статус
            </p>

            <p className="cabinet-block-finance-accounts-history-titles__item sum">
                Сумма
            </p>
        </div>
    );
};

export default CabinetFinanceAccountsHistoryItemTitles;

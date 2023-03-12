import React from "react";

import {Checkbox} from "../../../../";

const CabinetFinanceAccountsHistoryItem: React.FC = () => {
    return (
        <div className={`cabinet-block-finance-accounts-history-item`}>
            <div className="cabinet-block-finance-accounts-history-item-block-checkbox">
                <Checkbox
                //   checked={isSelected}
                //   onClick={() =>
                //       setObjectsDeleteIdsOnClick({
                //           hotel_id: id,
                //           room_category_id: room_categories.id,
                //       })
                //   }
                >
                    <></>
                </Checkbox>
            </div>

            <div className="cabinet-block-finance-accounts-history-item-block-name">
                <p className="cabinet-block-finance-accounts-history-item-block-name__title">
                    Комиссия за бронирования
                </p>

                <a
                    href=""
                    className="btn-line cabinet-block-finance-accounts-history-item-block-name__link"
                >
                    Посмотреть отчет
                </a>
            </div>

            <div className="cabinet-block-finance-accounts-history-item-block-number">
                <p className="cabinet-block-finance-accounts-history-item-block-number__title">
                    100076429374
                </p>
            </div>

            <div className="cabinet-block-finance-accounts-history-item-block-date">
                <p className="cabinet-block-finance-accounts-history-item-block-date__title">
                    23 сен. 2022
                </p>
            </div>

            <div className="cabinet-block-finance-accounts-history-item-block-period">
                <p className="cabinet-block-finance-accounts-history-item-block-period__title">
                    23 сен. - 28 окт.
                </p>
            </div>

            <div className="cabinet-block-finance-accounts-history-item-block-date-payment">
                <p className="cabinet-block-finance-accounts-history-item-block-date-payment__title">
                    23 сен. 2022
                </p>
            </div>

            <div className="cabinet-block-finance-accounts-history-item-block-status success">
                <p className="cabinet-block-finance-accounts-history-item-block-status__title">
                    Оплачено
                </p>
            </div>

            <div className="cabinet-block-finance-accounts-history-item-block-sum">
                <p className="cabinet-block-finance-accounts-history-item-block-sum__title">
                    130 000 руб.
                </p>
            </div>
        </div>
    );
};

export default CabinetFinanceAccountsHistoryItem;

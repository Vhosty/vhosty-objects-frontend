import React from "react";

import CabinetSummaryEventsInfoImage from "../../../assets/images/cabinet-info.png";

const CabinetFinanceSummaryEvents: React.FC = () => {
    return (
        <div className="cabinet-block-finance-summary-events">
            <h2 className="cabinet-block-finance-summary-events__title">
                Сводка событий
            </h2>

            <div className="cabinet-block-finance-summary-events-info">
                <img
                    src={CabinetSummaryEventsInfoImage}
                    alt=""
                    className="cabinet-block-finance-summary-events-info__image"
                />
                <div className="cabinet-block-finance-summary-events-info-text">
                    <h3 className="cabinet-block-finance-summary-events-info-text__title">
                        Нужно больше данных!
                    </h3>

                    <p className="cabinet-block-finance-summary-events-info-text__description">
                        Для более детальной статистики системе нужно больше
                        продуктивных дней. В дальнейшем, здесь появятся данные
                        по вашей деятельности на сайте.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CabinetFinanceSummaryEvents;

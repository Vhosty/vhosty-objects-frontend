import React from "react";

import {CabinetFinanceStatisticsDashboardCanvas} from "../../../../";

const CabinetFinanceStatisticsDashboard: React.FC = () => {
    return (
        <div className="cabinet-block-finance-statistics-dashboard">
            <div className="cabinet-block-finance-statistics-dashboard-text">
                <h3 className="cabinet-block-finance-statistics-dashboard-text__title">
                    Обзор финансовых показателей
                </h3>

                <div className="cabinet-block-finance-statistics-dashboard-text-value">
                    <div className="cabinet-block-finance-statistics-dashboard-text-value-item">
                        <div
                            className="cabinet-block-finance-statistics-dashboard-text-value-item-color"
                            style={{backgroundColor: "#00A0A0"}}
                        ></div>
                        <p className="cabinet-block-finance-statistics-dashboard-text-value-item__text">
                            Валовый доход
                        </p>
                    </div>

                    <div className="cabinet-block-finance-statistics-dashboard-text-value-item">
                        <div
                            className="cabinet-block-finance-statistics-dashboard-text-value-item-color"
                            style={{backgroundColor: "#76DD87"}}
                        ></div>
                        <p className="cabinet-block-finance-statistics-dashboard-text-value-item__text">
                            Комиссия
                        </p>
                    </div>
                </div>
            </div>

            <CabinetFinanceStatisticsDashboardCanvas />

            <div className="cabinet-block-finance-statistics-dashboard-subinfo">
                <p className="cabinet-block-finance-statistics-dashboard-subinfo__text">
                    День месяца
                </p>
            </div>
        </div>
    );
};

export default CabinetFinanceStatisticsDashboard;

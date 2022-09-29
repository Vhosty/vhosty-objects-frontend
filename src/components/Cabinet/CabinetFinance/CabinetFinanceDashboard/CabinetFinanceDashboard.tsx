import React from "react";
import {CabinetFinanceDashboardCanvas} from "../../../";

const CabinetFinanceDashboard: React.FC = () => {
    return (
        <div className="cabinet-block-finance-dashboard">
            <div className="cabinet-block-finance-dashboard-text">
                <h3 className="cabinet-block-finance-dashboard-text__title">
                    Обзор финансовых показателей
                </h3>

                <div className="cabinet-block-finance-dashboard-text-value">
                    <div className="cabinet-block-finance-dashboard-text-value-item">
                        <div
                            className="cabinet-block-finance-dashboard-text-value-item-color"
                            style={{backgroundColor: "#00A0A0"}}
                        ></div>
                        <p className="cabinet-block-finance-dashboard-text-value-item__text">
                            Валовый доход
                        </p>
                    </div>

                    <div className="cabinet-block-finance-dashboard-text-value-item">
                        <div
                            className="cabinet-block-finance-dashboard-text-value-item-color"
                            style={{backgroundColor: "#76DD87"}}
                        ></div>
                        <p className="cabinet-block-finance-dashboard-text-value-item__text">
                            Комиссия
                        </p>
                    </div>
                </div>
			</div>
			
			<CabinetFinanceDashboardCanvas />

            <div className="cabinet-block-finance-dashboard-subinfo">
                <p className="cabinet-block-finance-dashboard-subinfo__text">
                    День месяца
                </p>
            </div>
        </div>
    );
};

export default CabinetFinanceDashboard;

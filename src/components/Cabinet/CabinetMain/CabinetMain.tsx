import React from "react";

import {CabinetMainNotifications, CabinetMainReserv} from "../../";

const CabinetMain: React.FC = () => {
    return (
        <div className="cabinet-block cabinet-main">
            <div className="cabinet-block-padding-top">
                <div className="cabinet-block-text">
                    <h2 className="cabinet-block-text__title">Сегодня</h2>

                    <p className="cabinet-block-text__subtitle">
                        Напоминания, статистика, информация о бронированиях
                    </p>
                </div>

                <CabinetMainNotifications />
            </div>

            <CabinetMainReserv />
        </div>
    );
};

export default CabinetMain;

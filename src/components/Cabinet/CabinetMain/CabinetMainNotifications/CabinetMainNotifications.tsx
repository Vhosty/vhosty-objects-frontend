import React from "react";

import {
    CabinetMainNotificationsConfirmed,
    CabinetMainNotificationsAbout,
    CabinetMainNotificationsPayment,
} from "../../../";

const CabinetMainNotifications: React.FC = () => {
    return (
        <div className="cabinet-block-main-notifications">
            <CabinetMainNotificationsConfirmed />

			<CabinetMainNotificationsAbout />
			
			<CabinetMainNotificationsPayment />
        </div>
    );
};

export default CabinetMainNotifications;

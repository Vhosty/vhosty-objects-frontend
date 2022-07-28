import React from "react";

import {
    CabinetSettingVerificationsPassport,
    CabinetSettingVerificationsIP,
} from "../../../";

const CabinetSettingVerifications: React.FC = () => {
    return (
        <div className="cabinet-block-setting-vetifications">
            <h2 className="cabinet-block-setting-vetifications__title">
                Верификация Аккаунта
            </h2>

			<CabinetSettingVerificationsPassport />
			
			<CabinetSettingVerificationsIP />
        </div>
    );
};

export default CabinetSettingVerifications;

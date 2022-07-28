import React from "react";

import {CabinetSettingForm, CabinetSettingChangePassword, CabinetSettingVerifications} from "../../";

const CabinetSetting: React.FC = () => {
    return (
        <div className="cabinet-block cabinet-block-setting">
            <div className="cabinet-block-padding">
                <div className="cabinet-block-text">
                    <h2 className="cabinet-block-text__title">
                        Управление аккаунтом
                    </h2>

                    <p className="cabinet-block-text__subtitle">
                        Ваш аккаунт не верифицирован. Пройдите верификацию,
                        загрузив документы ниже.
                    </p>
                </div>

                <CabinetSettingForm />

				<CabinetSettingChangePassword />
				
				<CabinetSettingVerifications />
            </div>
        </div>
    );
};

export default CabinetSetting;

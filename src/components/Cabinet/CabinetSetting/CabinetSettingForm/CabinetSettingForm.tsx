import React from "react";
import {useDispatch} from "react-redux";

import {CabinetSettingFormInfo, CabinetSettingFormContact} from "../../../";

const CabinetSettingForm: React.FC = () => {
    const dispatch = useDispatch();

    const onSubmit = (data: any) => {};

    return (
        <div className="cabinet-block-setting-form">
            <CabinetSettingFormInfo onSubmit={onSubmit} />

            <CabinetSettingFormContact onSubmit={onSubmit} />
        </div>
    );
};

export default CabinetSettingForm;

import React from "react";
import {useDispatch} from "react-redux";

import {CabinetSettingFormInfo, CabinetSettingFormContact} from "../../../";

import {sendUserUpdateAboutMe} from "../../../../redux/actions/user/user";

const CabinetSettingForm: React.FC = () => {
    const dispatch = useDispatch();

    const onSubmit = (data: any) => {
        const {first_name, last_name} = data;

        dispatch(sendUserUpdateAboutMe({first_name, last_name}) as any);
    };

    return (
        <div className="cabinet-block-setting-form">
            <CabinetSettingFormInfo onSubmit={onSubmit} />

            <CabinetSettingFormContact onSubmit={onSubmit} />
        </div>
    );
};

export default CabinetSettingForm;

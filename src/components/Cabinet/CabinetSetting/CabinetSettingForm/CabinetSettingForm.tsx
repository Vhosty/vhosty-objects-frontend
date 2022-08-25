import React from "react";
import {useDispatch} from "react-redux";

import {CabinetSettingFormInfo, CabinetSettingFormContact} from "../../../";

import {
    sendUserUpdateAboutMe,
    sendUserUpdateContactMe,
} from "../../../../redux/actions/user/user";

import {useTypedSelector} from "../../../../hooks/useTypedSelector";

const CabinetSettingForm: React.FC = () => {
    const dispatch = useDispatch();

    const {user} = useTypedSelector(({user}) => user);

    const onSubmitInfo = (data: any) => {
        const {first_name, last_name} = data;

        dispatch(
            sendUserUpdateAboutMe({...user, first_name, last_name}) as any
        );
    };

    const onSubmitContact = (data: any) => {
        const {email, phone} = data;

        dispatch(sendUserUpdateContactMe({...user, email, phone}) as any);
    };

    return (
        <div className="cabinet-block-setting-form">
            <CabinetSettingFormInfo onSubmit={onSubmitInfo} />

            <CabinetSettingFormContact onSubmit={onSubmitContact} />
        </div>
    );
};

export default CabinetSettingForm;

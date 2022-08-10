import React from "react";
import {useDispatch} from "react-redux";

import {
    CabinetSettingVerificationsPassport,
    CabinetSettingVerificationsIP,
    CabinetSettingVerificationsBlock,
} from "../../../";

import {useTypedSelector} from "../../../../hooks/useTypedSelector";

import {fetchUserDocuments} from "../../../../redux/actions/user/user";

const CabinetSettingVerifications: React.FC = () => {
    const dispatch = useDispatch();

    const {userDocuments, isLoadedUserDocuments} = useTypedSelector(
        ({user}) => user
    );

    React.useEffect(() => {
        if (!userDocuments.length) {
            dispatch(fetchUserDocuments() as any);
        }
    }, []);

    return (
        <div className="cabinet-block-setting-vetifications">
            <h2 className="cabinet-block-setting-vetifications__title">
                Верификация Аккаунта
            </h2>

            {/* {isLoadedUserDocuments &&
                userDocuments.map((item: any, index: number) => (
                    <CabinetSettingVerificationsBlock
                        key={`cabinet-block-setting-vetifications-block-${index}`}
                        title="Скан паспорта"
                        description="Паспортные данные (а какие нужны) на нескольких страницах для подтверждения личности владельца объекта"
                        empty
                        document={1}
                    />
                ))} */}

            <CabinetSettingVerificationsPassport />

            <CabinetSettingVerificationsIP />
        </div>
    );
};

export default CabinetSettingVerifications;

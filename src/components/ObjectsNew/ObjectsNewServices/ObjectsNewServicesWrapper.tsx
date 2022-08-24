import React from "react";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

import {ObjectsNewServices, ObjectsNewServicesFilled} from "../../";

const ObjectsNewServicesWrapper: React.FC = () => {
    const {itemByIdServices} = useTypedSelector(({objects_new}) => objects_new);

    const isNull = () => {
        let count = 0;

        itemByIdServices.map((group: any) => {
            count += group.services.length;
        });

        return count ? false : true;
    };

    return (
        <>
            {isNull() ? (
                <ObjectsNewServices />
            ) : (
                <ObjectsNewServicesFilled services={itemByIdServices} />
            )}
        </>
    );
};

export default ObjectsNewServicesWrapper;

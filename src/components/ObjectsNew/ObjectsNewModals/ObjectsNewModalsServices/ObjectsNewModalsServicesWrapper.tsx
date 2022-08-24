import React from "react";
import {useDispatch} from "react-redux";

import {ObjectsNewModalsServices} from "../../../";

import {useTypedSelector} from "../../../../hooks/useTypedSelector";

import {updateObjectByIdServices} from "../../../../redux/actions/objects_new/objects_new";

const ObjectsNewModalsServicesWrapper: React.FC = () => {
    const dispatch = useDispatch();

    const {itemById} = useTypedSelector(({objects_new}) => objects_new);

    const onSubmit = (data: any) => {
        const newServices: any = [];

        Object.keys(data).map((key) => {
            newServices.push({
                service: key,
                is_available: data[key] === "yes" ? true : false,
                price: 0,
                is_chargeable: data[key] === "pay" ? true : false,
                image: null,
            });
        });

        dispatch(updateObjectByIdServices(newServices, itemById.id) as any);
    };

    return <ObjectsNewModalsServices onSubmit={onSubmit} />;
};

export default ObjectsNewModalsServicesWrapper;

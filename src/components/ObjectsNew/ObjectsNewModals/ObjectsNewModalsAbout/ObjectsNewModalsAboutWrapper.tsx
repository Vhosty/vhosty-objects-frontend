import React from "react";
import {useDispatch} from "react-redux";

import {ObjectsNewModalsAbout} from "../../../";

import {useTypedSelector} from "../../../../hooks/useTypedSelector";

import {updateObjectByIdAbout} from "../../../../redux/actions/objects_new/objects_new";

const ObjectsNewModalsAboutWrapper: React.FC = () => {
    const dispatch = useDispatch();

    const {itemById} = useTypedSelector(({objects_new}) => objects_new);

    const onSubmit = (data: any) => {
        dispatch(
            updateObjectByIdAbout({...itemById, ...data}, itemById.id) as any
        );
    };

    return <ObjectsNewModalsAbout onSubmit={onSubmit} />;
};

export default ObjectsNewModalsAboutWrapper;
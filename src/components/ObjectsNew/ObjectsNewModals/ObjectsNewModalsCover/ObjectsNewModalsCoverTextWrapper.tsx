import React from "react";
import {useDispatch} from "react-redux";

import {ObjectsNewModalsCoverText} from "../../../";

import {useTypedSelector} from "../../../../hooks/useTypedSelector";

import {updateObjectsCoverText} from "../../../../redux/actions/objects_new/objects_new";

const ObjectsNewModalsCoverTextWrapper: React.FC = () => {
    const dispatch = useDispatch();

    const {itemById} = useTypedSelector(({objects_new}) => objects_new);

    const onSubmit = (data: any) => {
        dispatch(
            updateObjectsCoverText({...itemById, ...data}, itemById.id) as any
        );
    };

    return <ObjectsNewModalsCoverText onSubmit={onSubmit} />;
};

export default ObjectsNewModalsCoverTextWrapper;

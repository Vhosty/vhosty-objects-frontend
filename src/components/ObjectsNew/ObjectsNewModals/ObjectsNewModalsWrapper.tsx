import React from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

import {
    ObjectsNewModalsCoverText,
    ObjectsNewModalsAbout,
    ObjectsNewModalsRooms,
    ObjectsNewModalsServices,
    ObjectsNewModalsTerms,
    ObjectsNewModalsFaq,
} from "../../";

import {ObjectsNewModalsStateTypes} from "../../../redux/types/IObjectsNewModals";

import {
    setObjectsNewModalsOpen,
    setObjectsNewModalsClose,
    setObjectsNewModalsType,
} from "../../../redux/actions/objects_new_modals";

const ObjectsNewModals: React.FC = () => {
    const {closeAnimation, type} = useTypedSelector(
        ({objects_new_modals}) => objects_new_modals
    );

    return (
        <div className={`objects-new-modal ${closeAnimation ? "close" : ""}`}>
            {type === ObjectsNewModalsStateTypes.COVER ? (
                <ObjectsNewModalsCoverText />
            ) : null}
            {type === ObjectsNewModalsStateTypes.ABOUT ? (
                <ObjectsNewModalsAbout />
            ) : null}
            {type === ObjectsNewModalsStateTypes.ROOMS ? (
                <ObjectsNewModalsRooms />
            ) : null}
            {type === ObjectsNewModalsStateTypes.SERVICES ? (
                <ObjectsNewModalsServices />
            ) : null}
            {type === ObjectsNewModalsStateTypes.TERMS ? (
                <ObjectsNewModalsTerms />
            ) : null}
            {type === ObjectsNewModalsStateTypes.FAQ ? (
                <ObjectsNewModalsFaq />
            ) : null}
        </div>
    );
};

const ObjectsNewModalsWrapper: React.FC = () => {
    const {hash, pathname} = useLocation();
    const dispatch = useDispatch();

    const {open} = useTypedSelector(
        ({objects_new_modals}) => objects_new_modals
    );

    React.useEffect(() => {
        const type_hash: string = hash.split("#")[1];

        if (
            Object.values(ObjectsNewModalsStateTypes).find(
                (type) => type == type_hash
            )
        ) {
            dispatch(setObjectsNewModalsType(type_hash) as any);
            dispatch(setObjectsNewModalsOpen());
        } else {
            dispatch(setObjectsNewModalsClose() as any);
        }
    }, [hash, pathname]);

    return <>{open ? <ObjectsNewModals /> : null}</>;
};

export default ObjectsNewModalsWrapper;

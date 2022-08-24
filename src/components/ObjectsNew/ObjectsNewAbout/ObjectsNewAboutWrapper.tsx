import React from "react";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

import {ObjectsNewAbout, ObjectsNewAboutFilled} from "../../";

const ObjectsNewAboutWrapper: React.FC = () => {
    const {itemById} = useTypedSelector(({objects_new}) => objects_new);

    return (
        <>
            {itemById.description !== "" ? (
                <ObjectsNewAboutFilled {...itemById} />
            ) : (
                <ObjectsNewAbout />
            )}
        </>
    );
};

export default ObjectsNewAboutWrapper;

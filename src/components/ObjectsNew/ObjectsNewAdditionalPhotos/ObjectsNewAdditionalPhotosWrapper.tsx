import React from "react";

import {
    ObjectsNewAdditionalPhotos,
    ObjectsNewAdditionalPhotosFilled,
} from "../../";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

const ObjectsNewAdditionalPhotosWrapper: React.FC = () => {
    const {itemById} = useTypedSelector(({objects_new}) => objects_new);

    return (
        <>
            {itemById.images.length ? (
                <ObjectsNewAdditionalPhotosFilled {...itemById} />
            ) : (
                <ObjectsNewAdditionalPhotos />
            )}
        </>
    );
};

export default ObjectsNewAdditionalPhotosWrapper;

import React from "react";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

import ObjectsNewCoverImg from "../../../assets/images/objects-new-cover-bg.jpg";

import {
    ObjectsNewCoverText,
    ObjectsNewCoverTextFilled,
    ObjectsNewCoverImage,
    ObjectsNewCoverImageFilled,
} from "../../";

const ObjectsNewCover: React.FC = () => {
    const {itemById} = useTypedSelector(({objects_new}) => objects_new);

    const isFilled = () => (itemById.background_images.length ? true : false);

    return (
        <div
            className="objects-new-cover"
            style={{
                backgroundImage: `url("${
                    isFilled()
                        ? itemById.background_images[0].url
                        : ObjectsNewCoverImg
                }")`,
            }}
        >
            {isFilled() ? (
                <div className="objects-new-filled-cover-plaecholder"></div>
            ) : null}

            <div className="objects-new-cover-wrapper">
                {itemById.name !== "" ? (
                    <ObjectsNewCoverTextFilled {...itemById} />
                ) : (
                    <ObjectsNewCoverText />
                )}

                {isFilled() ? (
                    <ObjectsNewCoverImageFilled {...itemById} />
                ) : (
                    <ObjectsNewCoverImage />
                )}
            </div>
        </div>
    );
};

export default ObjectsNewCover;

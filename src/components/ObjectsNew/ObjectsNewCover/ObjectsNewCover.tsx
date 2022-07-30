import React from "react";

import ObjectsNewCoverImg from "../../../assets/images/objects-new-cover-bg.jpg";

import {ObjectsNewCoverText, ObjectsNewCoverImage} from "../../";

const ObjectsNewCover: React.FC = () => {
    return (
        <div
            className="objects-new-cover"
            style={{backgroundImage: `url("${ObjectsNewCoverImg}")`}}
        >
            <div className="container">
                <div
                    className="objects-new-cover-wrapper"
                >
					<ObjectsNewCoverText />
					
					<ObjectsNewCoverImage />
                </div>
            </div>
        </div>
    );
};

export default ObjectsNewCover;

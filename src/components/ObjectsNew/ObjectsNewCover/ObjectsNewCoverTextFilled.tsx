import React from "react";

import {Stars, Location, ObjectsNewEditBtn} from "../../";

interface ObjectsNewCoverTextFilledProps {
    stars: number;
    name: string;
    address: string;
}

const ObjectsNewCoverTextFilled: React.FC<ObjectsNewCoverTextFilledProps> = ({
    stars,
    name,
    address,
}) => {
    return (
        <div className="objects-new-filled-cover-text">
            <div className="objects-new-filled-cover-text-info">
                <div className="objects-new-filled-cover-text-info-stars">
                    <Stars count={stars} />
                </div>
                <h2 className="objects-new-filled-cover-text-info__title">
                    {name}
				</h2>
				
				<Location title={address} subtitle="10,9 км от центра" />
				
                <div className="objects-new-filled-cover-text-info-btn">
                    <ObjectsNewEditBtn hash="cover" />
                </div>
            </div>

            <div className="objects-new-filled-cover-text-feedbacks"></div>
        </div>
    );
};

export default ObjectsNewCoverTextFilled;

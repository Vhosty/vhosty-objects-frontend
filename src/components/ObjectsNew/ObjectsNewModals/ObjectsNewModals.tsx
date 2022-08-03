import React from "react";

import {
    ObjectsNewModalsCoverText,
    ObjectsNewModalsAbout,
    ObjectsNewModalsRooms,
} from "../../";

const ObjectsNewModals: React.FC = () => {
    return (
        <div className="objects-new-modal">
            {/* <ObjectsNewModalsCoverText /> */}
			{/* <ObjectsNewModalsAbout /> */}
			<ObjectsNewModalsRooms />
        </div>
    );
};

export default ObjectsNewModals;

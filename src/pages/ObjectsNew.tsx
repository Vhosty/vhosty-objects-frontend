import React from "react";

import {
    ObjectsNewCover,
    ObjectsNewAdditionalPhotos,
    ObjectsNewAbout,
    ObjectsNewRooms,
    ObjectsNewMaps,
    ObjectsNewServices,
    ObjectsNewTerms,
    ObjectsNewFaq,
} from "../components/";

const ObjectsNew: React.FC = () => {
    return (
        <section className="objects-new">
			<ObjectsNewCover />
			
            <div className="container">
                <div className="objects-new-wrapper">
					<ObjectsNewAdditionalPhotos />
					
					<ObjectsNewAbout />

					<ObjectsNewRooms />

					<ObjectsNewMaps />

					<ObjectsNewServices />

					<ObjectsNewTerms />

					<ObjectsNewFaq />
                </div>
            </div>
        </section>
    );
};

export default ObjectsNew;

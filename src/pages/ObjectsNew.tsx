import React from "react";

import {
    ObjectsNewModalsWrapper,
    ObjectsNewCover,
    ObjectsNewAdditionalPhotos,
    ObjectsNewAbout,
    ObjectsNewRooms,
    ObjectsNewMaps,
    ObjectsNewServices,
    ObjectsNewTerms,
    ObjectsNewFaq,
    ObjectsNewVerification,
} from "../components/";

const ObjectsNew: React.FC = () => {
    return (
        <section className="objects-new">
            <ObjectsNewModalsWrapper />

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

                    <ObjectsNewVerification />
                </div>
            </div>
        </section>
    );
};

export default ObjectsNew;

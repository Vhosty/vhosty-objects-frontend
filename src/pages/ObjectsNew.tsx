import React from "react";
import {useDispatch} from "react-redux";

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

import {fetchObjectsServicesList} from "../redux/actions/objects_new/objects_new";

const ObjectsNew: React.FC = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchObjectsServicesList() as any);
    }, []);

    return (
        <section className="objects-new">
            <ObjectsNewModalsWrapper />

            <ObjectsNewCover />

            <div className="container">
                <div className="objects-new-wrapper">
                    <ObjectsNewAdditionalPhotos />

                    <ObjectsNewAbout />

                    <ObjectsNewRooms />

                    {/* <ObjectsNewMaps /> */}

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

import React from "react";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";

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

import {
    fetchObjectById,
    fetchObjectsServicesList,
} from "../redux/actions/objects_new/objects_new";

const ObjectsNew: React.FC = () => {
    const dispatch = useDispatch();

    const {id} = useParams();

    React.useEffect(() => {
        dispatch(fetchObjectsServicesList() as any);
    }, []);

    React.useEffect(() => {
        if (id) dispatch(fetchObjectById(id) as any);
    }, [id]);

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

                    {/* <ObjectsNewVerification /> */}
                </div>
            </div>
        </section>
    );
};

export default ObjectsNew;

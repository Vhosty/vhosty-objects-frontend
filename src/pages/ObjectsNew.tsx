import React from "react";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";

import {useTypedSelector} from "../hooks/useTypedSelector";

import {
    ObjectsNewModalsWrapper,
    ObjectsNewCover,
    ObjectsNewAdditionalPhotosWrapper,
    ObjectsNewAboutWrapper,
    ObjectsNewRoomsWrapper,
    ObjectsNewMaps,
    ObjectsNewServicesWrapper,
    ObjectsNewTermsWrapper,
    ObjectsNewFaq,
    ObjectsNewVerification,
    ObjectsNewDocument,
} from "../components/";

import {
    fetchObjectById,
    fetchObjectByIdTerms,
    fetchObjectByIdRooms,
    fetchObjectByIdServices,
    fetchObjectByIdFaqs,
    fetchObjectsServicesList,
} from "../redux/actions/objects_new/objects_new";

const ObjectsNew: React.FC = () => {
    const dispatch = useDispatch();

    const {
        isLoadedServices,
        isLoadedItemById,
        isLoadedItemByIdTerms,
        isLoadedItemByIdRooms,
        isLoadedItemByIdFaqs,
        isLoadedItemByIdServices,
    } = useTypedSelector(({objects_new}) => objects_new);

    const {id} = useParams();

    React.useEffect(() => {
        dispatch(fetchObjectsServicesList() as any);
    }, []);

    React.useEffect(() => {
        if (id) {
            dispatch(fetchObjectById(id) as any);
            dispatch(fetchObjectByIdTerms(id) as any);
            dispatch(fetchObjectByIdRooms(id) as any);
            dispatch(fetchObjectByIdServices(id) as any);
            dispatch(fetchObjectByIdFaqs(id) as any);
        }
    }, [id]);

    return (
        <section className="objects-new">
            {isLoadedServices &&
            isLoadedItemById &&
            isLoadedItemByIdTerms &&
            isLoadedItemByIdRooms &&
            isLoadedItemByIdServices ? (
                <>
                    <ObjectsNewModalsWrapper />

                    <ObjectsNewCover />

                    <div className="container">
                        <div className="objects-new-wrapper">
                            <ObjectsNewAdditionalPhotosWrapper />

                            <ObjectsNewAboutWrapper />

                            <ObjectsNewRoomsWrapper />

                            {/* <ObjectsNewMaps /> */}

                            <ObjectsNewServicesWrapper />

                            <ObjectsNewTermsWrapper />

                            {/* <ObjectsNewFaq /> */}

                            {/* <ObjectsNewVerification /> */}

                            <ObjectsNewDocument />
                        </div>
                    </div>
                </>
            ) : null}
        </section>
    );
};

export default ObjectsNew;

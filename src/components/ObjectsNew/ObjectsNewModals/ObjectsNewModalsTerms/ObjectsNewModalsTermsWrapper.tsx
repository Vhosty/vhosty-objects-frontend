import React from "react";
import {useDispatch} from "react-redux";

import {ObjectsNewModalsTerms} from "../../../";

import {useTypedSelector} from "../../../../hooks/useTypedSelector";

import {updateObjectByIdTerms} from "../../../../redux/actions/objects_new/objects_new";

const ObjectsNewModalsTermsWrapper: React.FC = () => {
    const dispatch = useDispatch();

    const {itemById} = useTypedSelector(({objects_new}) => objects_new);

    const onSubmit = (data: any) => {
        const newData = {
            additional_info: data.about,
            booking_type: "automatically",
            payment_types: ["online"],
            checkin_time: `${data["from-hourses"]}:${data["from-minutes"]}`,
            checkout_time: `${data["to-hourses"]}:${data["to-minutes"]}`,
            other_time_available: data.other_time_available,
            other_time_price: data.timesPossibilityType,
        };

        dispatch(updateObjectByIdTerms(newData, itemById.id) as any);
    };

    return <ObjectsNewModalsTerms onSubmit={onSubmit} />;
};

export default ObjectsNewModalsTermsWrapper;

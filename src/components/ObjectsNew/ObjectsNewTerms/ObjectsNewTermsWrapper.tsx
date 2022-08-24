import React from "react";

import {ObjectsNewTerms, ObjectsNewTermsFilled} from "../../";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

const ObjectsNewTermsWrapper: React.FC = () => {
    const {itemByIdTerms} = useTypedSelector(({objects_new}) => objects_new);

    return (
        <>
            {itemByIdTerms.additional_info !== "" ? (
                <ObjectsNewTermsFilled {...itemByIdTerms} />
            ) : (
                <ObjectsNewTerms />
            )}
        </>
    );
};

export default ObjectsNewTermsWrapper;

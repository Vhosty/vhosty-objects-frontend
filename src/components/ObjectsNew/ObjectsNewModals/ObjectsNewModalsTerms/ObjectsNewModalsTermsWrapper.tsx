import React from "react";

import {ObjectsNewModalsTerms} from "../../../";

const ObjectsNewModalsTermsWrapper: React.FC = () => {
    const onSubmit = (data: any) => {
        console.log(data);
    };

    return <ObjectsNewModalsTerms onSubmit={onSubmit} />;
};

export default ObjectsNewModalsTermsWrapper;

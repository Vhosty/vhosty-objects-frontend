import React from "react";

import {ObjectsNewModalsServices} from "../../../";

const ObjectsNewModalsServicesWrapper: React.FC = () => {
    const onSubmit = (data: any) => {
        console.log(data);
    };

    return <ObjectsNewModalsServices onSubmit={onSubmit} />;
};

export default ObjectsNewModalsServicesWrapper;

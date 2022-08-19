import React from "react";

import {ObjectsNewModalsFaq} from "../../../";

const ObjectsNewModalsFaqWrapper: React.FC = () => {
    const onSubmit = (data: any) => {
        console.log(data);
    };

    return <ObjectsNewModalsFaq onSubmit={onSubmit} />;
};

export default ObjectsNewModalsFaqWrapper;

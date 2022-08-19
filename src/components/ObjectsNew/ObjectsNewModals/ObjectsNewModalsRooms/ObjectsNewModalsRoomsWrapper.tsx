import React from "react";

import {ObjectsNewModalsRooms} from "../../../";

const ObjectsNewModalsRoomsWrapper: React.FC = () => {
    const onSubmit = (data: any) => {
        console.log(data);
    };

    return <ObjectsNewModalsRooms onSubmit={onSubmit} />;
};

export default ObjectsNewModalsRoomsWrapper;

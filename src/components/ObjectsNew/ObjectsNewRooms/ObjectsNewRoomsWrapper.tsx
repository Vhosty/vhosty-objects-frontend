import React from "react";

import {ObjectsNewRooms, ObjectsNewRoomsFilled} from "../../";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

const ObjectsNewRoomsWrapper: React.FC = () => {
    const {itemByIdRooms} = useTypedSelector(({objects_new}) => objects_new);

    return (
        <>
            {itemByIdRooms && itemByIdRooms[0] && itemByIdRooms[0].name !== "" ? (
                <ObjectsNewRoomsFilled />
            ) : (
                <ObjectsNewRooms />
            )}
        </>
    );
};

export default ObjectsNewRoomsWrapper;

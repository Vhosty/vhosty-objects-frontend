import React from "react";
import {useDispatch} from "react-redux";

import {ObjectsNewModalsRooms} from "../../../";

import {
    createObjectByIdRoom,
    updateObjectByIdRoom,
} from "../../../../redux/actions/objects_new/objects_new";

import {useTypedSelector} from "../../../../hooks/useTypedSelector";

const ObjectsNewModalsRoomsWrapper: React.FC = () => {
    const dispatch = useDispatch();

    const {itemById} = useTypedSelector(({objects_new}) => objects_new);

    const onSubmit = (data: any) => {
        data.rooms.map((room: any) => {
            const newData = {
                name: room.name,
                description: "",
                is_free_cancel: false,
                free_cancel_days: 30,
                food_is_included: room.food_is_included,
                food_type: room.foodType,
                square: 100,
                room_type: room.type,
                beds: [],
                bed_type: room.bed_type,
                guest_count: room.countGuests,
                is_prepayment: true,
                prepayment_percent: 100,
                price: room.price,
                images: room.images,
            };

            if (room.id) {
                dispatch(updateObjectByIdRoom(newData, room.id) as any);
            } else {
                dispatch(createObjectByIdRoom(newData, itemById.id) as any);
            }
        });
    };

    return <ObjectsNewModalsRooms onSubmit={onSubmit} />;
};

export default ObjectsNewModalsRoomsWrapper;

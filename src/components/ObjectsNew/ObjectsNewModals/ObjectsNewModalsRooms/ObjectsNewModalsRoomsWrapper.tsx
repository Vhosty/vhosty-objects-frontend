import React from "react";
import {useDispatch} from "react-redux";
import {animateScroll as scroll} from "react-scroll";

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
                // food_type: room.foodType,
                food_type: "all_inclusive",
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
                dispatch(
                    updateObjectByIdRoom(newData, room.id, itemById.id) as any
                );
            } else {
                dispatch(
                    createObjectByIdRoom(
                        newData,
                        itemById.id,
                        itemById.id
                    ) as any
                );
            }
        });

        const offset = document.getElementById(
            "objects-new-filled-section-rooms"
        )?.offsetTop;

        scroll.scrollTo(offset ? offset - 150 : 0, {duration: 400});
    };

    return <ObjectsNewModalsRooms onSubmit={onSubmit} />;
};

export default ObjectsNewModalsRoomsWrapper;

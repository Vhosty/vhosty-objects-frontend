import React from "react";

import {FieldArray, reduxForm, InjectedFormProps} from "redux-form";

import {ObjectsNewModalsBig, ObjectsNewModalsRoomsBlock} from "../../../";

import {useTypedSelector} from "../../../../hooks/useTypedSelector";

import {validate} from "./validate";

const ObjectsNewModalsRooms: React.FC<{} & InjectedFormProps<{}, {}>> = ({
    handleSubmit,
    initialize,
}) => {
    const {itemByIdRooms, isLoadedItemByIdRooms} = useTypedSelector(
        ({objects_new}) => objects_new
    );

    React.useEffect(() => {
        if (isLoadedItemByIdRooms) {
            const rooms: any = [];

            if (itemByIdRooms[0].name !== "") {
                itemByIdRooms.map((room: any) =>
                    rooms.push({
                        id: room.id,
                        name: room.name,
                        type: room.room_type,
                        foodType: room.food_type,
                        food_is_included: room.food_is_included,
                        bed_type: room.bed_type,
                        price: room.price,
                        images: room.images,
                        countGuests: room.guest_count,
                    })
                );
            } else {
                itemByIdRooms.map((room: any) =>
                    rooms.push({
                        id: room.id,
                    })
                );
            }

            initialize({rooms});
        }
    }, [isLoadedItemByIdRooms]);

    return (
        <form
            className="objects-new-modal-content-form big"
            onSubmit={handleSubmit}
        >
            <ObjectsNewModalsBig
                title="Выбор доступного номера"
                description="Вы можете создать номер и включить в опции/комплектацию как еду, так и условия бронирований."
                fullWidth
            >
                <FieldArray
                    component={ObjectsNewModalsRoomsBlock}
                    name="rooms"
                />
            </ObjectsNewModalsBig>
        </form>
    );
};

export default reduxForm<{}, {}>({
    form: "objects-new-modals-rooms",
    validate,
})(ObjectsNewModalsRooms);

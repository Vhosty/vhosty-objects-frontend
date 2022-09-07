import React from "react";

import {ObjectsNewRoomsFilledBlock, ObjectsNewEditBtn} from "../../../";

import {useTypedSelector} from "../../../../hooks/useTypedSelector";

const ObjectsNewRoomsFilled: React.FC = () => {
    const {itemByIdRooms} = useTypedSelector(({objects_new}) => objects_new);

    return (
        <div
            className="objects-new-filled-section objects-new-filled-section-room"
            id="objects-new-filled-section-rooms"
        >
            <div className="objects-new-filled-section-padding">
                <div className="objects-new-filled-section-top marginBottom">
                    <h2 className="objects-new-filled-section-top__title ">
                        Выбор доступного номера
                    </h2>

                    <ObjectsNewEditBtn hash="rooms" />
                </div>

                <div className="objects-new-filled-section-room-block-wrapper-wrappper">
                    {itemByIdRooms.map((item: any, index: number) => (
                        <ObjectsNewRoomsFilledBlock
                            key={`objects-new-filled-section-room-block-${index}`}
                            {...item}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ObjectsNewRoomsFilled;

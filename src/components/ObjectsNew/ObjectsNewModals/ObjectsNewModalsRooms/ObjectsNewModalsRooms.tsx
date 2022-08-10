import React from "react";

import {ObjectsNewModalsBig, ObjectsNewModalsRoomsBlock} from "../../../";

const ObjectsNewModalsRooms: React.FC = () => {
    return (
        <ObjectsNewModalsBig
            title="Выбор доступного номера"
            description="Вы можете создать номер и включить в опции/комплектацию как еду, так и условия бронирований."
            fullWidth
        >
            <ObjectsNewModalsRoomsBlock />
        </ObjectsNewModalsBig>
    );
};

export default ObjectsNewModalsRooms;

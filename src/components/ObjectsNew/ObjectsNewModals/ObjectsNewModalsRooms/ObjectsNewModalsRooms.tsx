import React from "react";

import {FieldArray, reduxForm, InjectedFormProps} from "redux-form";

import {ObjectsNewModalsBig, ObjectsNewModalsRoomsBlock} from "../../../";

import {validate} from "./validate";

const ObjectsNewModalsRooms: React.FC<{} & InjectedFormProps<{}, {}>> = ({
    handleSubmit,
}) => {
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

import React from "react";
import {formValueSelector, FieldArray, Field} from "redux-form";

import {useTypedSelector} from "../../../../../hooks/useTypedSelector";

import {
    ObjectsNewModalsRoomsBlockImages,
    ObjectsNewModalsRoomsBlockName,
    ObjectsNewModalsRoomsBlockTypesRoom,
    ObjectsNewModalsRoomsBlockTypesBed,
    ObjectsNewModalsRoomsBlockGuestsCount,
    ObjectsNewModalsRoomsBlockFreeCancel,
    ObjectsNewModalsRoomsBlockFoods,
    ObjectsNewModalsRoomsBlockPayment,
    ObjectsNewModalsRoomsBlockPrice,
    ObjectsNewModalsRoomsBlockOptions,
} from "../../../../";

const ObjectsNewModalsRoomsBlock: React.FC<any> = ({fields}) => {
    React.useEffect(() => {
        fields.push({});
    }, []);

    const selector = formValueSelector("objects-new-modals-rooms");

    const values = useTypedSelector((state) => {
        const values = selector(state, "rooms");

        return values;
    });

    const addFields = () => {
        fields.push({});
    };

    return (
        <>
            {fields.map((room: any, index: number) => (
                <div
                    className="objects-new-modal-content-big-rooms-block"
                    key={`objects-new-modal-content-big-rooms-block-${index}`}
                >
                    <p className="objects-new-modal-content-big-rooms-block__title">
                        Вариант размещения/номер №{index + 1}
                    </p>

                    <Field
                        component={ObjectsNewModalsRoomsBlockImages}
                        values={values[index]}
                        name={`${room}.images`}
                    />

                    <div className="objects-new-modal-content-big-rooms-block-row-inputs">
                        <ObjectsNewModalsRoomsBlockName room={room} />

                        <ObjectsNewModalsRoomsBlockTypesRoom room={room} />

                        <ObjectsNewModalsRoomsBlockTypesBed room={room} />

                        <ObjectsNewModalsRoomsBlockGuestsCount room={room} />
                    </div>
                    <div className="objects-new-modal-content-big-rooms-block-row-inputs">
                        {/* <ObjectsNewModalsRoomsBlockFreeCancel room={room} /> */}

                        <ObjectsNewModalsRoomsBlockFoods
                            room={room}
                            values={values[index]}
                        />
                    </div>
                    <div className="objects-new-modal-content-big-rooms-block-row-inputs">
                        <ObjectsNewModalsRoomsBlockPayment
                            room={room}
                            values={values[index]}
                        />

                        <ObjectsNewModalsRoomsBlockPrice room={room} />
                    </div>

                    {/* <div className="objects-new-modal-content-big-rooms-block-options">
                        <FieldArray
                            component={ObjectsNewModalsRoomsBlockOptions}
                            name={`${room}.options`}
                            values={values[index]}
                        />
                    </div> */}
                </div>
            ))}

            <div className="objects-new-modal-content-big-rooms-btn">
                <button
                    className="objects-new-modal-content-big-rooms-btn__btn add-room"
                    onClick={addFields}
                    type="button"
                >
                    <svg
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M34.25 18.125C34.25 9.22266 27.0273 2 18.125 2C9.22266 2 2 9.22266 2 18.125C2 27.0273 9.22266 34.25 18.125 34.25C27.0273 34.25 34.25 27.0273 34.25 18.125Z"
                            stroke="#116E67"
                            strokeWidth="3"
                            strokeMiterlimit="10"
                        />
                        <path
                            d="M18.1248 25.7264V10.5236M25.7262 18.125H10.5234H25.7262Z"
                            stroke="#116E67"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    Добавить вариант размещения/номер
                </button>
            </div>
        </>
    );
};

export default ObjectsNewModalsRoomsBlock;

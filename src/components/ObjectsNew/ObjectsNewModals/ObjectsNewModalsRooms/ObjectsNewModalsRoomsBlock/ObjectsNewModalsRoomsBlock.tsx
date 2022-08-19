import React from "react";
import {formValueSelector, FieldArray} from "redux-form";

import {useTypedSelector} from "../../../../../hooks/useTypedSelector";

import {
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
                    <div className="objects-new-modal-content-big-rooms-block-images">
                        <button className="objects-new-modal-content-big-rooms-block-images__btn">
                            <svg
                                width="95"
                                height="95"
                                viewBox="0 0 95 95"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    width="95"
                                    height="95"
                                    rx="20"
                                    fill="#00A0A0"
                                    fillOpacity="0.2"
                                />
                                <path
                                    d="M65.9387 36.0419H54.8212L52.5763 32.2704C52.3567 31.9017 51.9593 31.6758 51.5302 31.6758H44.4695C44.0404 31.6758 43.6429 31.9017 43.4234 32.2704L41.1785 36.0419H37.5303V35.2106C37.5303 34.5383 36.9853 33.9933 36.313 33.9933H31.8088C31.1363 33.9933 30.5914 34.5383 30.5914 35.2106V36.0419H30.0612C28.3704 36.0419 27 37.4124 27 39.1029V61.2662C27 62.9568 28.3704 64.3274 30.061 64.3274H65.9387C67.6293 64.3274 68.9999 62.9568 68.9999 61.2662V39.1029C69 37.4124 67.6293 36.0419 65.9387 36.0419ZM47.9999 58.8977C43.1877 58.8977 39.2867 54.9967 39.2867 50.1844C39.2867 45.3724 43.1877 41.4712 47.9999 41.4712C52.812 41.4712 56.713 45.3724 56.713 50.1844C56.713 54.9967 52.812 58.8977 47.9999 58.8977ZM64.0289 42.3528H60.2144C59.5421 42.3528 58.9971 41.8077 58.9971 41.1353C58.9971 40.4629 59.5421 39.9178 60.2144 39.9178H64.0289C64.7014 39.9178 65.2463 40.4629 65.2463 41.1353C65.2463 41.8077 64.7013 42.3528 64.0289 42.3528Z"
                                    fill="white"
                                    fillOpacity="0.7"
                                />
                                <path
                                    d="M48.005 56.2717C51.3668 56.2717 54.092 53.5465 54.092 50.1847C54.092 46.8229 51.3668 44.0977 48.005 44.0977C44.6432 44.0977 41.918 46.8229 41.918 50.1847C41.918 53.5465 44.6432 56.2717 48.005 56.2717Z"
                                    fill="white"
                                    fillOpacity="0.7"
                                />
                            </svg>

                            <span>Загрузить фото</span>
                        </button>
                    </div>
                    <div className="objects-new-modal-content-big-rooms-block-row-inputs">
                        <ObjectsNewModalsRoomsBlockName room={room} />

                        <ObjectsNewModalsRoomsBlockTypesRoom room={room} />

                        <ObjectsNewModalsRoomsBlockTypesBed room={room} />

                        <ObjectsNewModalsRoomsBlockGuestsCount room={room} />
                    </div>
                    <div className="objects-new-modal-content-big-rooms-block-row-inputs">
                        <ObjectsNewModalsRoomsBlockFreeCancel room={room} />

                        <ObjectsNewModalsRoomsBlockFoods room={room} />
                    </div>
                    <div className="objects-new-modal-content-big-rooms-block-row-inputs">
                        <ObjectsNewModalsRoomsBlockPayment
                            room={room}
                            values={values[index]}
                        />

                        <ObjectsNewModalsRoomsBlockPrice room={room} />
                    </div>

                    <div className="objects-new-modal-content-big-rooms-block-options">
                        <FieldArray
                            component={ObjectsNewModalsRoomsBlockOptions}
                            name={`${room}.options`}
                            values={values[index]}
                        />
                    </div>
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

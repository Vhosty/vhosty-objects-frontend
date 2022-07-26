import React from "react";

import {
    Popup,
    ObjectsNewModalsRoomsBlockOptionsTypeBeds,
    ObjectsNewModalsRoomsBlockOptionsFoods,
    ObjectsNewModalsRoomsBlockOptionsPayment,
    ObjectsNewModalsRoomsBlockOptionsPrice,
} from "../../../../../";

const ObjectsNewModalsRoomsBlockOptions: React.FC<any> = ({fields, values}) => {
    const [activeCheckboxMessage, setActiveCheckboxMessage] =
        React.useState<boolean>(false);

    React.useEffect(() => {
        fields.push({});
    }, []);

    const openCheckboxMessage = () => {
        setActiveCheckboxMessage(true);
    };

    const addFields = () => {
        fields.push({});
    };

    return (
        <>
            {fields.map((option: any, index: number) => (
                <div
                    className="objects-new-modal-content-big-rooms-block-options-block"
                    key={`objects-new-modal-content-big-rooms-block-options-block-${index}`}
                >
                    <div className="objects-new-modal-content-big-rooms-block-options-block-title">
                        <h3 className="objects-new-modal-content-big-rooms-block-options-block-title__title">
                            Опция номера №{index + 1}
                        </h3>

                        <div className="objects-new-modal-content-big-rooms-block-options-block-title-message">
                            <div
                                className="objects-new-modal-content-big-rooms-block-options-block-title-message-icon"
                                onClick={openCheckboxMessage}
                            >
                                <svg
                                    width="23"
                                    height="23"
                                    viewBox="0 0 23 23"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`objects-new-modal-content-big-rooms-block-options-block-title-message-icon__svgActive ${
                                        activeCheckboxMessage ? "active" : ""
                                    }`}
                                >
                                    <path
                                        d="M11.3125 1C9.27288 1 7.27907 1.60482 5.58319 2.73797C3.8873 3.87112 2.56553 5.48171 1.785 7.36608C1.00447 9.25044 0.800246 11.3239 1.19816 13.3244C1.59607 15.3248 2.57824 17.1623 4.02047 18.6045C5.4627 20.0468 7.30021 21.0289 9.30064 21.4268C11.3011 21.8248 13.3746 21.6205 15.2589 20.84C17.1433 20.0595 18.7539 18.7377 19.887 17.0418C21.0202 15.3459 21.625 13.3521 21.625 11.3125C21.625 8.57746 20.5385 5.95443 18.6045 4.02046C16.6706 2.08649 14.0475 1 11.3125 1Z"
                                        fill="#00A0A0"
                                        stroke="#00A0A0"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                    />
                                    <path
                                        d="M8.03125 8.16587C8.03125 8.16587 8.08047 7.14048 9.17793 6.25748C9.82891 5.73306 10.6094 5.5813 11.3125 5.57076C11.9529 5.56255 12.5248 5.66861 12.867 5.8315C13.4529 6.11041 14.5938 6.79126 14.5938 8.23912C14.5938 9.76255 13.5977 10.4545 12.4627 11.2157C11.3277 11.9768 11.0195 12.803 11.0195 13.6567"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M10.9609 17.875C11.6081 17.875 12.1328 17.3503 12.1328 16.7031C12.1328 16.0559 11.6081 15.5312 10.9609 15.5312C10.3137 15.5312 9.78906 16.0559 9.78906 16.7031C9.78906 17.3503 10.3137 17.875 10.9609 17.875Z"
                                        fill="white"
                                    />
                                </svg>

                                <svg
                                    width="23"
                                    height="23"
                                    viewBox="0 0 23 23"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="objects-new-modal-content-big-rooms-block-options-block-title-message-icon__svg"
                                >
                                    <path
                                        d="M11.3125 1C9.27288 1 7.27907 1.60482 5.58319 2.73797C3.8873 3.87112 2.56553 5.48171 1.785 7.36608C1.00447 9.25044 0.800246 11.3239 1.19816 13.3244C1.59607 15.3248 2.57824 17.1623 4.02047 18.6045C5.4627 20.0468 7.30021 21.0289 9.30064 21.4268C11.3011 21.8248 13.3746 21.6205 15.2589 20.84C17.1433 20.0595 18.7539 18.7377 19.887 17.0418C21.0202 15.3459 21.625 13.3521 21.625 11.3125C21.625 8.57746 20.5385 5.95443 18.6045 4.02046C16.6706 2.08649 14.0475 1 11.3125 1Z"
                                        stroke="#00A0A0"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                    />
                                    <path
                                        d="M8.03125 8.16587C8.03125 8.16587 8.08047 7.14048 9.17793 6.25748C9.82891 5.73306 10.6094 5.5813 11.3125 5.57076C11.9529 5.56255 12.5248 5.66861 12.867 5.8315C13.4529 6.11041 14.5938 6.79126 14.5938 8.23912C14.5938 9.76255 13.5977 10.4545 12.4627 11.2157C11.3277 11.9768 11.0195 12.803 11.0195 13.6567"
                                        stroke="#00A0A0"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M10.9609 17.875C11.6081 17.875 12.1328 17.3503 12.1328 16.7031C12.1328 16.0559 11.6081 15.5312 10.9609 15.5312C10.3137 15.5312 9.78906 16.0559 9.78906 16.7031C9.78906 17.3503 10.3137 17.875 10.9609 17.875Z"
                                        fill="#00A0A0"
                                    />
                                </svg>
                            </div>

                            <Popup
                                wrapperActive={activeCheckboxMessage}
                                setWrapperActive={setActiveCheckboxMessage}
                            >
                                <p className="objects-new-modal-content-big-rooms-block-options-block-title-message__text">
                                    Это тот же номер, но с другой комплектацией
                                    кроватей, мест, питания, оплаты.
                                </p>
                            </Popup>
                        </div>
                    </div>

                    <div className="objects-new-modal-content-big-rooms-block-options-block-row-inputs">
                        <ObjectsNewModalsRoomsBlockOptionsTypeBeds
                            option={option}
                        />

                        <ObjectsNewModalsRoomsBlockOptionsFoods
                            option={option}
                        />
                    </div>
                    <div className="objects-new-modal-content-big-rooms-block-options-block-row-inputs">
                        <ObjectsNewModalsRoomsBlockOptionsPayment
                            option={option}
                            values={values.options[index]}
                        />

                        <ObjectsNewModalsRoomsBlockOptionsPrice
                            option={option}
                        />
                    </div>
                </div>
            ))}

            <div className="objects-new-modal-content-big-rooms-block-options-btn">
                <button
                    className="objects-new-modal-content-big-rooms-block-options-btn__btn gray add-room-option"
                    onClick={addFields}
                    type="button"
                >
                    <svg
                        width="37"
                        height="37"
                        viewBox="0 0 37 37"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M34.625 18.5C34.625 9.59766 27.4023 2.375 18.5 2.375C9.59766 2.375 2.375 9.59766 2.375 18.5C2.375 27.4023 9.59766 34.625 18.5 34.625C27.4023 34.625 34.625 27.4023 34.625 18.5Z"
                            stroke="#253021"
                            strokeOpacity="0.5"
                            strokeWidth="3"
                            strokeMiterlimit="10"
                        />
                        <path
                            d="M18.4998 26.1014V10.8986M26.1012 18.5H10.8984H26.1012Z"
                            stroke="#253021"
                            strokeOpacity="0.5"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    Добавить другие опции этого номера
                </button>
            </div>
        </>
    );
};

export default ObjectsNewModalsRoomsBlockOptions;

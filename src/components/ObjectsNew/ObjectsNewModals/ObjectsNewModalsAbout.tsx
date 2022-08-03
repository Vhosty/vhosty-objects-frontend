import React from "react";

import {TitleIcon, Textarea} from "../../";

const ObjectsNewModalsAbout: React.FC = () => {
    return (
        <div className="objects-new-modal-content small">
            <div className="objects-new-modal-content-text">
                <h2 className="objects-new-modal-content-text__title">
                    Об объекте
                </h2>
                <p className="objects-new-modal-content-text__description">
                    Расскажите об отеле, о его достоинствах, преимуществах,
                    истории.
                </p>
            </div>
            <div className="objects-new-modal-content-input">
                <TitleIcon title="Описание объекта" marginBottom>
                    <svg
                        viewBox="0 0 19 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0 2.48V16.64C0 18 1.12 19.12 2.48 19.12H13.12C14.48 19.12 15.6 18 15.6 16.64V13.2L15.04 13.76C14.48 14.32 13.68 14.72 12.88 14.96L11.2 15.28C10.48 15.44 9.68 15.2 9.28 14.64C8.88 14.16 8.72 13.6 8.88 12.96L9.28 11.2C9.44 10.4 9.84 9.68 10.48 9.04L14.48 5.04C14.8 4.72 15.28 4.4 15.68 4.24V2.48C15.68 1.12 14.56 0 13.2 0H2.48C1.12 0 0 1.12 0 2.48V2.48ZM3.92 2.8H11.6C12.08 2.8 12.4 3.12 12.4 3.6C12.4 4.08 12.08 4.4 11.6 4.4H3.92C3.44 4.4 3.12 4.08 3.12 3.6C3.12 3.2 3.52 2.8 3.92 2.8ZM3.92 6.08H8.4C8.88 6.08 9.2 6.4 9.2 6.88C9.2 7.36 8.88 7.68 8.4 7.68H3.92C3.44 7.68 3.12 7.36 3.12 6.88C3.12 6.4 3.52 6.08 3.92 6.08Z"
                            fill="#00A0A0"
                        />
                        <path
                            d="M17.9205 6.23977C17.2805 5.59977 16.1605 5.59977 15.5205 6.23977L11.5205 10.2398C11.1205 10.6398 10.8805 11.0398 10.8005 11.5998L10.4005 13.2798C10.3205 13.5198 10.5605 13.7598 10.8005 13.6798L12.5605 13.2798C13.0405 13.1998 13.5205 12.8798 13.9205 12.5598L17.9205 8.55977C18.5605 7.91977 18.5605 6.87977 17.9205 6.23977V6.23977Z"
                            fill="#00A0A0"
                        />
                    </svg>
                </TitleIcon>

                <Textarea label="Например, год создания здания, принципы, описание местности" />
            </div>

            <div className="objects-new-modal-content-btn">
                <button className="btn-line gray objects-new-modal-content-btn__cancel">
                    Отменить изменения
                </button>

                <button className="btn small objects-new-modal-content-btn__save">
                    Сохранить
                </button>
            </div>
        </div>
    );
};

export default ObjectsNewModalsAbout;

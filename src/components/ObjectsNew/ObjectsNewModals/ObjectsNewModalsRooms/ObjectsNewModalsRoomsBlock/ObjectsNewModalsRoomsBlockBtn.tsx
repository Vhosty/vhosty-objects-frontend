import React from "react";

const ObjectsNewModalsRoomsBlockBtn: React.FC = () => {
	return (
        <div className="objects-new-modal-content-big-rooms-block-btn">
            <button className="objects-new-modal-content-big-rooms-block-btn__btn">
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
            <button className="objects-new-modal-content-big-rooms-block-btn__btn gray">
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
    );
};

export default ObjectsNewModalsRoomsBlockBtn;

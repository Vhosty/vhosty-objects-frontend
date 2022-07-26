import React from "react";
import {Field} from "redux-form";

import {TitleIcon, RenderInput} from "../../../../";

const ObjectsNewModalsRoomsBlockName: React.FC<any> = ({room}) => {
    return (
        <div className="objects-new-modal-content-big-rooms-block-row-inputs-input-name">
            <TitleIcon title="Название номера" marginBottom>
                <svg
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M6.875 11.25H10.625C10.7907 11.25 10.9497 11.1841 11.0669 11.0669L17.3169 4.81689C17.561 4.57275 17.561 4.17725 17.3169 3.93311L13.5669 0.183105C13.3228 -0.0610352 12.9272 -0.0610352 12.6831 0.183105L6.43311 6.43311C6.31592 6.55029 6.25 6.70929 6.25 6.875V10.625C6.25 10.9702 6.52985 11.25 6.875 11.25ZM8.75 7.5C9.4392 7.5 10 8.0608 10 8.75C10 9.4392 9.4392 10 8.75 10C8.0608 10 7.5 9.4392 7.5 8.75C7.5 8.0608 8.0608 7.5 8.75 7.5Z"
                        fill="#00A0A0"
                    />
                    <path
                        d="M16.875 15H0.625C0.279846 15 0 15.2798 0 15.625C0 16.6589 0.841064 17.5 1.875 17.5H15.625C16.6589 17.5 17.5 16.6589 17.5 15.625C17.5 15.2798 17.2202 15 16.875 15Z"
                        fill="#00A0A0"
                    />
                    <path
                        d="M16.25 7.5C16.25 7.28851 16.1925 7.0924 16.0998 6.91776L11.5088 11.5088C11.2726 11.745 10.9589 11.875 10.625 11.875H6.875C6.18561 11.875 5.625 11.3144 5.625 10.625V6.875C5.625 6.65108 5.68817 6.43848 5.79796 6.25H2.5C1.80965 6.25 1.25 6.80962 1.25 7.5V14.375H16.25V7.5Z"
                        fill="#00A0A0"
                    />
                </svg>
            </TitleIcon>

            <Field
                component={RenderInput}
                label="Двухместный номер"
                type="text"
                small
                name={`${room}.name`}
            />
        </div>
    );
};

export default ObjectsNewModalsRoomsBlockName;

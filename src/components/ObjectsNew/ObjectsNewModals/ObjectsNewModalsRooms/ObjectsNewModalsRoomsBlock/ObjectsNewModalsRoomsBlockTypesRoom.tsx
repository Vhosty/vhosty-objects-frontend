import React from "react";
import {Field} from "redux-form";

import {TitleIcon, RenderSelect} from "../../../../";

const ObjectsNewModalsRoomsBlockTypesRoom: React.FC<any> = ({room}) => {
    return (
        <div className="objects-new-modal-content-big-rooms-block-row-inputs-select-types-room">
            <TitleIcon title="Тип номера" marginBottom>
                <svg
                    viewBox="0 0 20 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20 2.5C20 1.11929 18.8807 0 17.5 0H2.5C1.11929 0 0 1.11929 0 2.5V10.8333C0 12.2141 1.11929 13.3333 2.5 13.3333H17.5C18.8807 13.3333 20 12.2141 20 10.8333V2.5ZM6.66667 4.16667C7.1269 4.16667 7.5 4.53977 7.5 5V8.33333C7.5 8.79358 7.1269 9.16667 6.66667 9.16667H3.33333C2.8731 9.16667 2.5 8.79358 2.5 8.33333V5C2.5 4.53977 2.8731 4.16667 3.33333 4.16667H6.66667ZM10 4.16667C9.53975 4.16667 9.16667 4.53977 9.16667 5C9.16667 5.46025 9.53975 5.83333 10 5.83333H13.3333C13.7936 5.83333 14.1667 5.46025 14.1667 5C14.1667 4.53977 13.7936 4.16667 13.3333 4.16667H10ZM9.16667 8.33333C9.16667 7.87308 9.53975 7.5 10 7.5H16.6667C17.1269 7.5 17.5 7.87308 17.5 8.33333C17.5 8.79358 17.1269 9.16667 16.6667 9.16667H10C9.53975 9.16667 9.16667 8.79358 9.16667 8.33333Z"
                        fill="#00A0A0"
                    />
                </svg>
            </TitleIcon>

            <Field
                component={RenderSelect}
                choices={[
                    {
                        title: "Стандарт",
                        key: "standard",
                    },
                    {
                        title: "Комфорт",
                        key: "comfort",
                    },
                    {
                        title: "Полулюкс",
                        key: "junior_suite",
                    },
                    {
                        title: "Люкс",
                        key: "suite",
                    },
                ]}
                small
                border
                name={`${room}.type`}
            />
        </div>
    );
};

export default ObjectsNewModalsRoomsBlockTypesRoom;

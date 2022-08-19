import React from "react";
import {Field} from "redux-form";

import {TitleIcon, RenderCount} from "../../../../";

const ObjectsNewModalsRoomsBlockGuestsCount: React.FC<any> = ({room}) => {
    return (
        <div className="objects-new-modal-content-big-rooms-block-row-inputs-guests-count">
            <TitleIcon title="Гостей" marginBottom>
                <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M1.75 15.5C1.75 15.5 0.5 15.5 0.5 14.25C0.5 13 1.75 9.25 8 9.25C14.25 9.25 15.5 13 15.5 14.25C15.5 15.5 14.25 15.5 14.25 15.5H1.75ZM8 8C8.99456 8 9.94839 7.60491 10.6517 6.90165C11.3549 6.19839 11.75 5.24456 11.75 4.25C11.75 3.25544 11.3549 2.30161 10.6517 1.59835C9.94839 0.895088 8.99456 0.5 8 0.5C7.00544 0.5 6.05161 0.895088 5.34835 1.59835C4.64509 2.30161 4.25 3.25544 4.25 4.25C4.25 5.24456 4.64509 6.19839 5.34835 6.90165C6.05161 7.60491 7.00544 8 8 8Z"
                        fill="#00A0A0"
                    />
                </svg>
            </TitleIcon>

            <Field component={RenderCount} name={`${room}.countGuests`} />
        </div>
    );
};

export default ObjectsNewModalsRoomsBlockGuestsCount;

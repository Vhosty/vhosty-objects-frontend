import React from "react";
import {Field} from "redux-form";

import {TitleIcon, RenderSelect, RenderInput} from "../../../../";

const ObjectsNewModalsRoomsBlockPayment: React.FC<any> = ({room, values}) => {
    return (
        <div className="objects-new-modal-content-big-rooms-block-row-inputs-payment-wrapper">
            <TitleIcon title="Оплата" marginBottom>
                <svg
                    viewBox="0 0 20 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M19.4112 0.90207C18.1991 0.393633 16.9859 0.200195 15.7734 0.200195C11.9244 0.199883 8.07562 2.14832 4.22656 2.14832C3.26125 2.14832 2.29656 2.02582 1.33125 1.71957C1.22281 1.6852 1.11406 1.66895 1.00781 1.66895C0.47 1.66895 0 2.0852 0 2.66301V12.5774C0 12.9721 0.225938 13.3461 0.58875 13.498C1.80094 14.0068 3.01406 14.2002 4.22656 14.2002C8.07562 14.2002 11.9247 12.2518 15.7738 12.2518C16.7391 12.2518 17.7037 12.3743 18.6691 12.6805C18.7775 12.7149 18.8862 12.7311 18.9925 12.7311C19.5303 12.7311 20.0003 12.3149 20.0003 11.7371V1.82301C20 1.42801 19.7741 1.05426 19.4112 0.90207ZM10 10.2002C8.61906 10.2002 7.5 8.85676 7.5 7.2002C7.5 5.54332 8.61938 4.2002 10 4.2002C11.3806 4.2002 12.5 5.54332 12.5 7.2002C12.5 8.85738 11.3803 10.2002 10 10.2002Z"
                        fill="#00A0A0"
                    />
                </svg>
            </TitleIcon>

            <div className="objects-new-modal-content-big-rooms-block-row-inputs-payment">
                <div className="objects-new-modal-content-big-rooms-block-row-inputs-payment-select">
                    <Field
                        component={RenderSelect}
                        choices={[
                            {
                                title: "Бронирование без предоплаты",
                                key: "booking-without-prepayment",
                            },
                            // {
                            //     title: "Бронирование по предоплате",
                            //     key: "prepaid-booking",
                            // },
                        ]}
                        small
                        border
                        name={`${room}.bookingType`}
                    />
                </div>

                {/* <div className="objects-new-modal-content-big-rooms-block-row-inputs-payment-input">
                    <Field
                        component={RenderInput}
                        type="number"
                        label=""
                        fixLabel="%"
                        defaultValue={0}
                        small
                        disabled={
                            values.bookingType === "booking-without-prepayment"
                                ? true
                                : false
                        }
                        name={`${room}.bookingPercent`}
                    />
                </div> */}
            </div>
        </div>
    );
};

export default ObjectsNewModalsRoomsBlockPayment;

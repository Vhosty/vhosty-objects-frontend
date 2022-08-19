import React from "react";
import {Field} from "redux-form";

import {TitleIcon, RenderSelect} from "../../../../../";

const ObjectsNewModalsRoomsBlockOptionsTypeBeds: React.FC<any> = ({option}) => {
    return (
        <div className="objects-new-modal-content-big-rooms-block-options-block-row-inputs-type-beds">
            <div className="objects-new-modal-content-big-rooms-block-options-block-row-inputs-type-beds-block">
                <TitleIcon title="Кровать" marginBottom>
                    <svg
                        viewBox="0 0 24 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M3.03158 9.51661H23.4947C23.7 9.51661 23.8776 9.59161 24.0276 9.74161C24.1776 9.89161 24.2526 10.0692 24.2526 10.2745V15.5798H21.2211V12.5482H3.03158V15.5798H0V1.17977C0 0.974507 0.075 0.796875 0.225 0.646875C0.375 0.496875 0.552632 0.421875 0.757895 0.421875H2.27368C2.47895 0.421875 2.65658 0.496875 2.80658 0.646875C2.95658 0.796875 3.03158 0.974507 3.03158 1.17977V9.51661ZM9.85263 5.72714C9.85263 4.8903 9.55658 4.17582 8.96447 3.58372C8.37237 2.99161 7.6579 2.69556 6.82105 2.69556C5.98421 2.69556 5.26974 2.99161 4.67763 3.58372C4.08553 4.17582 3.78947 4.8903 3.78947 5.72714C3.78947 6.56398 4.08553 7.27845 4.67763 7.87056C5.26974 8.46266 5.98421 8.75872 6.82105 8.75872C7.6579 8.75872 8.37237 8.46266 8.96447 7.87056C9.55658 7.27845 9.85263 6.56398 9.85263 5.72714ZM24.2526 8.75872V8.00082C24.2526 6.74556 23.8086 5.67385 22.9204 4.78569C22.0322 3.89753 20.9605 3.45345 19.7053 3.45345H11.3684C11.1632 3.45345 10.9855 3.52845 10.8355 3.67845C10.6855 3.82845 10.6105 4.00609 10.6105 4.21135V8.75872H24.2526Z"
                            fill="#00A0A0"
                        />
                    </svg>
                </TitleIcon>

                <Field
                    component={RenderSelect}
                    choices={[
                        {
                            title: "1 Двуспальная кровать",
                            key: "one-double-bed",
                        },
                        {
                            title: "2 Двуспальная кровати",
                            key: "two-double-beds",
                        },
                        {
                            title: "1 Односпальная кровать",
                            key: "one-single-bed",
                        },
                        {
                            title: "2 Односпальных кровати",
                            key: "two-single-bed",
                        },
                        {
                            title: "1 Односпальная кровать и 1 двуспальная кровать",
                            key: "one-single-bed-and-one-double-bed",
                        },
                        {
                            title: "1 Односпальная кровать и 2 двуспальные кровати",
                            key: "one-single-bed-and-two-double-bed",
                        },
                        {
                            title: "2 Односпальные кровати и 1 двуспальная кровать",
                            key: "two-single-bed-and-one-double-bed",
                        },
                    ]}
                    small
                    border
                    name={`${option}.bedType`}
                />
            </div>
            <div className="objects-new-modal-content-big-rooms-block-options-block-row-inputs-type-beds-block">
                <TitleIcon title="Доп. место" marginBottom>
                    <svg
                        viewBox="0 0 24 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M3 8.4H23.25C23.4531 8.4 23.6289 8.46927 23.7773 8.60781C23.9258 8.74635 24 8.91042 24 9.1V14H21V11.2H3V14H0V0.7C0 0.510417 0.0742187 0.346354 0.222656 0.207812C0.371094 0.0692708 0.546875 0 0.75 0H2.25C2.45313 0 2.62891 0.0692708 2.77734 0.207812C2.92578 0.346354 3 0.510417 3 0.7V8.4ZM9.75 4.9C9.75 4.12708 9.45703 3.46719 8.87109 2.92031C8.28516 2.37344 7.57812 2.1 6.75 2.1C5.92188 2.1 5.21484 2.37344 4.62891 2.92031C4.04297 3.46719 3.75 4.12708 3.75 4.9C3.75 5.67292 4.04297 6.33281 4.62891 6.87969C5.21484 7.42656 5.92188 7.7 6.75 7.7C7.57812 7.7 8.28516 7.42656 8.87109 6.87969C9.45703 6.33281 9.75 5.67292 9.75 4.9ZM24 7.7V7C24 5.84062 23.5605 4.85078 22.6816 4.03047C21.8027 3.21016 20.7422 2.8 19.5 2.8H11.25C11.0469 2.8 10.8711 2.86927 10.7227 3.00781C10.5742 3.14635 10.5 3.31042 10.5 3.5V7.7H24Z"
                            fill="#00A0A0"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.9998 19C12.9887 19 13.9554 18.7068 14.7777 18.1575C15.6 17.6081 16.2409 16.8272 16.6193 15.9135C16.9978 14.9999 17.0969 13.9946 16.9039 13.0246C16.711 12.0547 16.2348 11.1638 15.5356 10.4645C14.8363 9.76523 13.9454 9.28901 12.9755 9.09608C12.0055 8.90315 11.0002 9.00217 10.0866 9.38062C9.17291 9.75906 8.39202 10.3999 7.84261 11.2222C7.29321 12.0445 6.99998 13.0112 7 14.0001C7.00147 15.3257 7.5287 16.5966 8.46602 17.5339C9.40333 18.4712 10.6742 18.9985 11.9998 19ZM12.6801 16.0842C12.6801 16.2646 12.6084 16.4377 12.4808 16.5652C12.3532 16.6928 12.1802 16.7645 11.9997 16.7645C11.8193 16.7645 11.6462 16.6928 11.5186 16.5652C11.3911 16.4377 11.3194 16.2646 11.3194 16.0842V14.6804H9.9156C9.82626 14.6804 9.73779 14.6628 9.65525 14.6286C9.57271 14.5944 9.49771 14.5443 9.43453 14.4811C9.37135 14.418 9.32124 14.343 9.28705 14.2604C9.25286 14.1779 9.23526 14.0894 9.23526 14.0001C9.23526 13.9107 9.25286 13.8222 9.28705 13.7397C9.32124 13.6572 9.37135 13.5822 9.43453 13.519C9.49771 13.4558 9.57271 13.4057 9.65525 13.3715C9.73779 13.3373 9.82626 13.3197 9.9156 13.3197H11.3195V11.916C11.3195 11.7356 11.3912 11.5625 11.5188 11.4349C11.6464 11.3073 11.8194 11.2357 11.9999 11.2357C12.1803 11.2357 12.3534 11.3073 12.481 11.4349C12.6085 11.5625 12.6802 11.7356 12.6802 11.916V13.3197H14.0841C14.1734 13.3197 14.2619 13.3373 14.3444 13.3715C14.427 13.4057 14.502 13.4558 14.5651 13.519C14.6283 13.5822 14.6784 13.6572 14.7126 13.7397C14.7468 13.8222 14.7644 13.9107 14.7644 14.0001C14.7644 14.0894 14.7468 14.1779 14.7126 14.2604C14.6784 14.343 14.6283 14.418 14.5651 14.4811C14.502 14.5443 14.427 14.5944 14.3444 14.6286C14.2619 14.6628 14.1734 14.6804 14.0841 14.6804H12.6802L12.6801 16.0842Z"
                            fill="#00A0A0"
                        />
                    </svg>
                </TitleIcon>

                <Field
                    component={RenderSelect}
                    choices={[
                        {
                            title: "Отсутствует",
                            key: "none",
                        },
                        {
                            title: "1 Двуспальная кровать",
                            key: "one-double-bed",
                        },
                        {
                            title: "2 Двуспальная кровати",
                            key: "two-double-beds",
                        },
                        {
                            title: "1 Односпальная кровать",
                            key: "one-single-bed",
                        },
                        {
                            title: "2 Односпальных кровати",
                            key: "two-single-bed",
                        },
                        {
                            title: "1 Односпальная кровать и 1 двуспальная кровать",
                            key: "one-single-bed-and-one-double-bed",
                        },
                        {
                            title: "1 Односпальная кровать и 2 двуспальные кровати",
                            key: "one-single-bed-and-two-double-bed",
                        },
                        {
                            title: "2 Односпальные кровати и 1 двуспальная кровать",
                            key: "two-single-bed-and-one-double-bed",
                        },
                    ]}
                    small
                    border
                    name={`${option}.addBedType`}
                />
            </div>
        </div>
    );
};

export default ObjectsNewModalsRoomsBlockOptionsTypeBeds;

import React from "react";

import {TitleIcon, YesOrNo, Select} from "../../../../";

const ObjectsNewModalsRoomsBlockFreeCancel: React.FC = () => {
    const [selectIsActive, setSelectIsActive] = React.useState<boolean>(true);

    const onChangeYesOrNo = (status: boolean) => {
        setSelectIsActive(status);
    };

    return (
        <div className="objects-new-modal-content-big-rooms-block-row-inputs-free-cancel-wrapper">
            <TitleIcon title="Бесплатная отмена" marginBottom>
                <svg
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.33359 1.19507C8.33374 1.05024 8.27956 0.908994 8.17862 0.7911C8.07767 0.673205 7.93503 0.58456 7.77064 0.53757C7.60625 0.490579 7.42834 0.487595 7.26181 0.529034C7.09528 0.570473 6.94847 0.654263 6.84192 0.768676L1.00859 7.01868C0.894791 7.14058 0.833008 7.29062 0.833008 7.44506C0.833008 7.59951 0.894791 7.74955 1.00859 7.87145L6.84192 14.1215C6.94847 14.2359 7.09528 14.3197 7.26181 14.3611C7.42834 14.4025 7.60625 14.3996 7.77064 14.3526C7.93503 14.3056 8.07767 14.2169 8.17862 14.099C8.27956 13.9811 8.33374 13.8399 8.33359 13.6951V10.9242C12.8161 11.002 14.9694 11.711 16.0511 12.4819C17.0794 13.2145 17.2678 14.0763 17.4636 14.9791L17.5144 15.2117C17.5518 15.3782 17.6609 15.5275 17.8212 15.6317C17.9815 15.7358 18.1819 15.7875 18.3847 15.7771C18.5876 15.7667 18.7789 15.6948 18.9226 15.5751C19.0664 15.4554 19.1527 15.296 19.1653 15.127C19.3078 13.2187 19.0936 10.4534 17.4761 8.1402C15.9061 5.89506 13.0786 4.16868 8.33359 3.98812V1.19507Z"
                        fill="#00A0A0"
                    />
                </svg>
            </TitleIcon>

            <div className="objects-new-modal-content-big-rooms-block-row-inputs-free-cancel">
                <YesOrNo onChange={onChangeYesOrNo} />

                <div className="objects-new-modal-content-big-rooms-block-row-inputs-free-cancel-select">
                    <Select
                        choices={[
                            {
                                title: "До 3 дней до даты",
                                key: "3-days-before-date",
                            },
                            {
                                title: "До 5 дней до даты",
                                key: "5-days-before-date",
                            },
                            {
                                title: "До 7 дней до даты",
                                key: "7-days-before-date",
                            },
                            {
                                title: "До 10 дней до даты",
                                key: "10-days-before-date",
                            },
                            {
                                title: "До 14 дней до даты",
                                key: "14-days-before-date",
                            },
                        ]}
                        small
                        border
                        disabled={!selectIsActive}
                    />
                </div>
            </div>
        </div>
    );
};

export default ObjectsNewModalsRoomsBlockFreeCancel;

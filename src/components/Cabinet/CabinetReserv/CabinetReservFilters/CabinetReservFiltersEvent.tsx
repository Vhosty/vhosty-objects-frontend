import React from "react";

import {TitleIcon, Select} from "../../../";

const CabinetReservFiltersEvent: React.FC = () => {
    return (
        <div className="cabinet-block-reserv-filters-block cabinet-block-reserv-filters-block-event">
            <TitleIcon title="Действие" marginBottom>
                <svg
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M4.10156 8.20312C6.36292 8.20312 8.20312 6.36292 8.20312 4.10156C8.20312 1.84021 6.36292 0 4.10156 0C1.84021 0 0 1.84021 0 4.10156C0 6.36292 1.84021 8.20312 4.10156 8.20312Z"
                        fill="#00A0A0"
                    />
                    <path
                        d="M15.8984 9.375C13.6371 9.375 11.7969 11.2152 11.7969 13.4766C11.7969 15.7379 13.6371 17.5781 15.8984 17.5781C18.1598 17.5781 20 15.7379 20 13.4766C20 11.2152 18.1598 9.375 15.8984 9.375Z"
                        fill="#00A0A0"
                    />
                    <path
                        d="M17.0706 7.03125C18.6858 7.03125 20.0002 5.7168 20.0002 4.10156C20.0002 2.48633 18.6858 1.17188 17.0706 1.17188H8.48242C9.04517 2.01062 9.37524 3.01782 9.37524 4.10156C9.37524 5.1853 9.04517 6.1925 8.48242 7.03125H17.0706Z"
                        fill="#00A0A0"
                    />
                    <path
                        d="M2.92969 10.5469C1.31445 10.5469 0 11.8613 0 13.4766C0 15.0918 1.31445 16.4062 2.92969 16.4062H11.5178C10.9551 15.5675 10.625 14.5603 10.625 13.4766C10.625 12.3928 10.9551 11.3856 11.5178 10.5469H2.92969Z"
                        fill="#00A0A0"
                    />
                </svg>
            </TitleIcon>

            <Select
                choices={[
                    {title: "Бронирования", key: "reservations"},
                    {title: "Проживания", key: "accommodation"},
                    {title: "Заезды", key: "arrivals"},
                    {title: "Отъезды", key: "departures"},
                    {title: "Отмены", key: "cancellations"},
                ]}
                border
                small
            />
        </div>
    );
};

export default CabinetReservFiltersEvent;

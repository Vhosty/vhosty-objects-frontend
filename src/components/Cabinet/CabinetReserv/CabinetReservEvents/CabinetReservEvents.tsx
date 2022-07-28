import React from "react";

import {CabinetReservEventsPrint, CabinetReservEventsDownload} from "../../../";

const CabinetReservEvents: React.FC = () => {
    return (
        <div className="cabinet-block-reserv-events">
            <CabinetReservEventsPrint />

            <CabinetReservEventsDownload />
        </div>
    );
};

export default CabinetReservEvents;

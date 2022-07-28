import React from "react";

import {CabinetReservFiltersEvent, CabinetReservFiltersDate} from "../../../";

const CabinetReservFilters: React.FC = () => {
    return (
        <div className="cabinet-block-reserv-filters">
			<CabinetReservFiltersEvent />
			
			<CabinetReservFiltersDate />
        </div>
    );
};

export default CabinetReservFilters;

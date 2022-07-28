import React from "react";

import {
    CabinetObjectsFiltersStatus,
    CabinetObjectsFiltersSort,
    CabinetObjectsFiltersReserv,
} from "../../../";

const CabinetObjectsFilters: React.FC = () => {
    return (
        <div className="cabinet-block-objects-filters">
			<CabinetObjectsFiltersStatus />
			
			<CabinetObjectsFiltersSort />

			<CabinetObjectsFiltersReserv />
        </div>
    );
};

export default CabinetObjectsFilters;

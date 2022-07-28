import React from "react";

import {TitleIcon, Select} from "../../../";

const CabinetObjectsFiltersSort: React.FC = () => {
    return (
        <div className="cabinet-block-objects-filters-block">
            <TitleIcon title="Сортировка по:" marginBottom>
                <svg
                    viewBox="0 0 20 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10.5 16H1.5C0.671573 16 0 16.6716 0 17.5C0 18.3284 0.671573 19 1.5 19H10.5C11.3284 19 12 18.3284 12 17.5C12 16.6716 11.3284 16 10.5 16Z"
                        fill="#00A0A0"
                    />
                    <path
                        d="M14.5 8H1.5C0.671573 8 0 8.67157 0 9.5C0 10.3284 0.671573 11 1.5 11H14.5C15.3284 11 16 10.3284 16 9.5C16 8.67157 15.3284 8 14.5 8Z"
                        fill="#00A0A0"
                    />
                    <path
                        d="M18.5 0H1.5C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3H18.5C19.3284 3 20 2.32843 20 1.5C20 0.671573 19.3284 0 18.5 0Z"
                        fill="#00A0A0"
                    />
                </svg>
            </TitleIcon>

            <Select
                choices={[
                    {title: "Популярности", key: "popularity"},
                    {title: "Сначала дешевые", key: "cheap"},
                    {title: "Сначала дорогие", key: "expensive"},
                    {title: "Сначала новые", key: "new"},
                    {title: "Сначала старые", key: "old"},
                ]}
                border
                small
            />
        </div>
    );
};

export default CabinetObjectsFiltersSort;

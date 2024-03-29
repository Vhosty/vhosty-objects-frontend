import React from "react";

import {TitleIcon, Select} from "../../../../";

const CabinetFinanceStatisticsFiltersObject: React.FC = () => {
    return (
        <div className="cabinet-block-finance-statistics-filters-selects-item">
            <TitleIcon title="Объект" marginBottom>
                <svg
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M4.10156 8.42188C6.36292 8.42188 8.20312 6.58167 8.20312 4.32031C8.20312 2.05896 6.36292 0.21875 4.10156 0.21875C1.84021 0.21875 0 2.05896 0 4.32031C0 6.58167 1.84021 8.42188 4.10156 8.42188Z"
                        fill="#00A0A0"
                    />
                    <path
                        d="M15.8984 9.59375C13.6371 9.59375 11.7969 11.434 11.7969 13.6953C11.7969 15.9567 13.6371 17.7969 15.8984 17.7969C18.1598 17.7969 20 15.9567 20 13.6953C20 11.434 18.1598 9.59375 15.8984 9.59375Z"
                        fill="#00A0A0"
                    />
                    <path
                        d="M17.0706 7.25C18.6858 7.25 20.0002 5.93555 20.0002 4.32031C20.0002 2.70508 18.6858 1.39062 17.0706 1.39062H8.48242C9.04517 2.22937 9.37524 3.23657 9.37524 4.32031C9.37524 5.40405 9.04517 6.41125 8.48242 7.25H17.0706Z"
                        fill="#00A0A0"
                    />
                    <path
                        d="M2.92969 10.7656C1.31445 10.7656 0 12.0801 0 13.6953C0 15.3105 1.31445 16.625 2.92969 16.625H11.5178C10.9551 15.7863 10.625 14.7791 10.625 13.6953C10.625 12.6116 10.9551 11.6044 11.5178 10.7656H2.92969Z"
                        fill="#00A0A0"
                    />
                </svg>
            </TitleIcon>

            <Select choices={[{key: "", title: "Все"}]} border small />
        </div>
    );
};

export default CabinetFinanceStatisticsFiltersObject;

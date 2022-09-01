import React from "react";

import {
    ObjectsNewEditBtn,
    ObjectsNewServicesFilledGroup,
    ObjectsNewServicesFilledTabsGroup,
} from "../../../";

interface ObjectsNewServicesFilledProps {
    services: any;
}

const ObjectsNewServicesFilled: React.FC<ObjectsNewServicesFilledProps> = ({
    services,
}) => {
    return (
        <div className="objects-new-filled-section objects-new-filled-section-services">
            <div className="objects-new-filled-section-padding">
                <div className="objects-new-filled-section-top">
                    <h2 className="objects-new-filled-section-top__title">
                        Удобства и услуги
                    </h2>

                    <ObjectsNewEditBtn hash="services" />
                </div>

                {document.documentElement.clientWidth > 600 ? (
                    <div className="objects-new-filled-section-services-block-wrapper">
                        {services.map((group: any, index: number) =>
                            group.services.filter(
                                (service: any) =>
                                    service.is_available ||
                                    service.is_chargeable
                            ).length ? (
                                <ObjectsNewServicesFilledGroup
                                    {...group}
                                    key={`objects-new-filled-section-services-list-${index}`}
                                    index={index}
                                />
                            ) : null
                        )}

                        {/* <li className="objects-new-filled-section-services-list-ul__li">
                        Ресторан
                        <svg
                            viewBox="0 0 22 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11 12.75C12.6569 12.75 14 11.4069 14 9.75C14 8.09315 12.6569 6.75 11 6.75C9.34315 6.75 8 8.09315 8 9.75C8 11.4069 9.34315 12.75 11 12.75Z"
                                fill="#00A0A0"
                            />
                            <path
                                d="M19.25 3.75H16.4844C16.3438 3.75 16.1694 3.65906 16.0334 3.51562L14.8175 1.59656C14.7983 1.56611 14.7768 1.53712 14.7533 1.50984C14.3333 1.02 13.7656 0.75 13.1562 0.75H8.84375C8.23438 0.75 7.66672 1.02 7.24672 1.50984C7.22319 1.53712 7.20173 1.56611 7.1825 1.59656L5.96656 3.51844C5.8625 3.63187 5.71625 3.75281 5.5625 3.75281V3.37781C5.5625 3.1789 5.48348 2.98813 5.34283 2.84748C5.20218 2.70683 5.01141 2.62781 4.8125 2.62781H3.6875C3.48859 2.62781 3.29782 2.70683 3.15717 2.84748C3.01652 2.98813 2.9375 3.1789 2.9375 3.37781V3.75281H2.75C2.15345 3.75343 1.58152 3.99069 1.1597 4.41251C0.737873 4.83433 0.50062 5.40627 0.5 6.00281V15C0.50062 15.5965 0.737873 16.1685 1.1597 16.5903C1.58152 17.0121 2.15345 17.2494 2.75 17.25H19.25C19.8465 17.2494 20.4185 17.0121 20.8403 16.5903C21.2621 16.1685 21.4994 15.5965 21.5 15V6C21.4994 5.40345 21.2621 4.83152 20.8403 4.40969C20.4185 3.98787 19.8465 3.75062 19.25 3.75ZM11 14.25C10.11 14.25 9.23995 13.9861 8.49993 13.4916C7.75991 12.9971 7.18314 12.2943 6.84254 11.4721C6.50195 10.6498 6.41283 9.74501 6.58647 8.87209C6.7601 7.99918 7.18868 7.19736 7.81802 6.56802C8.44736 5.93868 9.24918 5.5101 10.1221 5.33647C10.995 5.16283 11.8998 5.25195 12.7221 5.59254C13.5443 5.93314 14.2471 6.50991 14.7416 7.24993C15.2361 7.98995 15.5 8.85998 15.5 9.75C15.4986 10.9431 15.0241 12.0869 14.1805 12.9305C13.3369 13.7741 12.1931 14.2486 11 14.25V14.25Z"
                                fill="#00A0A0"
                            />
                        </svg>
                    </li> */}
                    </div>
                ) : (
                    <div className="objects-new-filled-section-services-block-tabs-wrapper">
                        {services.map((group: any, index: number) =>
                            group.services.filter(
                                (service: any) =>
                                    service.is_available ||
                                    service.is_chargeable
                            ).length ? (
                                <ObjectsNewServicesFilledTabsGroup
                                    {...group}
                                    key={`object-page-section-services-list-${index}`}
                                    index={index}
                                />
                            ) : null
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ObjectsNewServicesFilled;

import React from "react";

import {ObjectsNewServicesFilledGroupItem} from "../../../../";

const ObjectsNewServicesFilledGroup: React.FC<any> = ({
    group_name,
    services,
    index,
}) => {
    return (
        <div className="objects-new-filled-section-services-list">
            <h3 className="objects-new-filled-section-services-list__title">
                {group_name}
            </h3>

            <ul className="objects-new-filled-section-services-list-ul">
                {services.map((service: any, subindex: number) =>
                    service.is_available || service.is_chargeable ? (
                        <ObjectsNewServicesFilledGroupItem
                            {...service}
                            key={`objects-new-filled-section-services-list-${index}-ul__li-${subindex}`}
                        />
                    ) : null
                )}
            </ul>
        </div>
    );
};

export default ObjectsNewServicesFilledGroup;

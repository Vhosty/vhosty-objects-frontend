import React from "react";

const ObjectsNewServicesFilledTabsGroupItem: React.FC<any> = ({
    name,
    is_chargeable,
}) => {
    return (
        <li className="objects-new-filled-section-services-list-tab-list-ul__li">
            {name}&nbsp;
            {is_chargeable ? <span>(платно)</span> : null}
        </li>
    );
};

export default ObjectsNewServicesFilledTabsGroupItem;

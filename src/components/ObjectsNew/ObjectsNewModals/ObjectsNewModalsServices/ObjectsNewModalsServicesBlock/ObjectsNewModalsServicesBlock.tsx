import React from "react";

import {ObjectsNewModalsServicesBlockItem} from "../../../../";

import {IObjectsNewServicesGroup} from "../../../../../models/IObjectsNew/IObjectsNewServices";

interface ObjectsNewModalsServicesBlockProps extends IObjectsNewServicesGroup {}

const ObjectsNewModalsServicesBlock: React.FC<
    ObjectsNewModalsServicesBlockProps
> = ({group_name, available_services}) => {
    return (
        <div className="objects-new-modal-content-big-services-block">
            <h3 className="objects-new-modal-content-big-services-block__title">
                {group_name}
            </h3>

            <div className="objects-new-modal-content-big-services-block-items-wrapper">
                {available_services.map((item, index) => (
                    <ObjectsNewModalsServicesBlockItem
                        {...item}
                        key={`objects-new-modal-content-big-services-block-item-${index}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ObjectsNewModalsServicesBlock;

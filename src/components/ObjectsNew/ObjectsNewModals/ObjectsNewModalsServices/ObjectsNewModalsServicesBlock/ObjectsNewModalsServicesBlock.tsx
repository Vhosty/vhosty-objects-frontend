import React from "react";

import {ObjectsNewModalsServicesBlockItem} from "../../../../";

const ObjectsNewModalsServicesBlock: React.FC = () => {
    return (
        <div className="objects-new-modal-content-big-services-block">
            <h3 className="objects-new-modal-content-big-services-block__title">
                Общее
            </h3>

            <div className="objects-new-modal-content-big-services-block-items-wrapper">
                <ObjectsNewModalsServicesBlockItem />
                <ObjectsNewModalsServicesBlockItem />
                <ObjectsNewModalsServicesBlockItem />
                <ObjectsNewModalsServicesBlockItem />
                <ObjectsNewModalsServicesBlockItem />
                <ObjectsNewModalsServicesBlockItem />
                <ObjectsNewModalsServicesBlockItem />
                <ObjectsNewModalsServicesBlockItem />
                <ObjectsNewModalsServicesBlockItem />
                <ObjectsNewModalsServicesBlockItem />
                <ObjectsNewModalsServicesBlockItem />
                <ObjectsNewModalsServicesBlockItem />
                <ObjectsNewModalsServicesBlockItem />
                <ObjectsNewModalsServicesBlockItem />
                <ObjectsNewModalsServicesBlockItem />
            </div>
        </div>
    );
};

export default ObjectsNewModalsServicesBlock;

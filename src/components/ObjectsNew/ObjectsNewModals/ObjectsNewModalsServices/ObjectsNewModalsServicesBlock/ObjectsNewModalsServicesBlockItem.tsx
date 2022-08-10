import React from "react";

import {Radio} from "../../../../";

const ObjectsNewModalsServicesBlockItem: React.FC = () => {
    return (
        <div className="objects-new-modal-content-big-services-block-item">
            <p className="objects-new-modal-content-big-services-block-item__title">
                Банкомат
            </p>
            <div className="objects-new-modal-content-big-services-block-item-radios">
                <div className="objects-new-modal-content-big-services-block-item-radios-block">
                    <Radio name="atm" label="Да" value="yes" small />
                </div>

                <div className="objects-new-modal-content-big-services-block-item-radios-block">
                    <Radio name="atm" label="Нет" value="no" small />
                </div>

                <div className="objects-new-modal-content-big-services-block-item-radios-block">
                    <Radio name="atm" label="Платно" value="pay" small />
                </div>
            </div>
        </div>
    );
};

export default ObjectsNewModalsServicesBlockItem;

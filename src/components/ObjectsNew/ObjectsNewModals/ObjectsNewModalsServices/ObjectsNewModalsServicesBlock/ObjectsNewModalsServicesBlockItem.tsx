import React from "react";
import {Field} from "redux-form";

import {RenderRadio} from "../../../../";

import {IObjectsNewServicesGroupItem} from "../../../../../models/IObjectsNew/IObjectsNewServices";

interface ObjectsNewModalsServicesBlockItemProps
    extends IObjectsNewServicesGroupItem {}

const ObjectsNewModalsServicesBlockItem: React.FC<
    ObjectsNewModalsServicesBlockItemProps
> = ({name, service}) => {
    return (
        <div className="objects-new-modal-content-big-services-block-item">
            <p className="objects-new-modal-content-big-services-block-item__title">
                {name}
            </p>
            <div className="objects-new-modal-content-big-services-block-item-radios">
                <div className="objects-new-modal-content-big-services-block-item-radios-block">
                    <Field
                        component={RenderRadio}
                        name={service}
                        label="Да"
                        value="yes"
                        small
                    />
                </div>

                <div className="objects-new-modal-content-big-services-block-item-radios-block">
                    <Field
                        component={RenderRadio}
                        name={service}
                        label="Нет"
                        value="no"
                        small
                    />
                </div>

                <div className="objects-new-modal-content-big-services-block-item-radios-block">
                    <Field
                        component={RenderRadio}
                        name={service}
                        label="Платно"
                        value="pay"
                        small
                    />
                </div>
            </div>
        </div>
    );
};

export default ObjectsNewModalsServicesBlockItem;

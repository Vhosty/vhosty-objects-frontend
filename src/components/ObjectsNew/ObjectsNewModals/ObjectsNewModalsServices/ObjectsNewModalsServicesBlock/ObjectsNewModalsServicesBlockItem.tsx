import React from "react";
import {Field} from "redux-form";

import {RenderRadio} from "../../../../";

import {IObjectsNewServicesGroupItem} from "../../../../../models/IObjectsNew/IObjectsNewServices";

interface ObjectsNewModalsServicesBlockItemProps
    extends IObjectsNewServicesGroupItem {}

const ObjectsNewModalsServicesBlockItem: React.FC<
    ObjectsNewModalsServicesBlockItemProps
> = ({name, service, is_disabled}) => {
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
                        value_init="yes"
                        small
                    />
                </div>

                <div className="objects-new-modal-content-big-services-block-item-radios-block">
                    <Field
                        component={RenderRadio}
                        name={service}
                        label="Нет"
                        value_init="no"
                        small
                    />
                </div>

                <div className="objects-new-modal-content-big-services-block-item-radios-block">
                    <Field
                        component={RenderRadio}
                        name={service}
                        label="Платно"
                        value_init="pay"
                        small
                        disabled={is_disabled}
                    />
                </div>
            </div>
        </div>
    );
};

export default ObjectsNewModalsServicesBlockItem;

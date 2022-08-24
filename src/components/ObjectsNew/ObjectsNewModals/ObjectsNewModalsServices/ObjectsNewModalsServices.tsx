import React from "react";

import {reduxForm, InjectedFormProps} from "redux-form";

import {ObjectsNewModalsBig, ObjectsNewModalsServicesBlock} from "../../../";

import {useTypedSelector} from "../../../../hooks/useTypedSelector";

const ObjectsNewModalsServices: React.FC<{} & InjectedFormProps<{}, {}>> = ({
    handleSubmit,
    initialize,
}) => {
    const {services, itemByIdServices} = useTypedSelector(
        ({objects_new}) => objects_new
    );

    React.useEffect(() => {
        const services_object: any = {};

        itemByIdServices.map((group: any) => {
			group.services.map((service: any) => {
                services_object[service.service] = service.is_available
                    ? "yes"
                    : service.is_chargeable
                    ? "pay"
                    : "no";
            });
        });

        initialize(services_object);
    }, []);

    return (
        <form
            className="objects-new-modal-content-form big"
            onSubmit={handleSubmit}
        >
            <ObjectsNewModalsBig
                title="Удобства и услуги"
                description="Выберите из списка те удобства и услуги, что соответствуют вашему отелю, или добавьте свое с помощью вкладки “прочее”"
                fullWidth
            >
                {services.map((group, index) => (
                    <ObjectsNewModalsServicesBlock
                        {...group}
                        key={`objects-new-modal-content-big-services-block-${index}`}
                    />
                ))}
            </ObjectsNewModalsBig>
        </form>
    );
};

export default reduxForm<{}, {}>({
    form: "objects-new-modals-services",
    // validate,
})(ObjectsNewModalsServices);

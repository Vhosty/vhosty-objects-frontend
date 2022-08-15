import React from "react";

import {ObjectsNewModalsBig, ObjectsNewModalsServicesBlock} from "../../../";

import {useTypedSelector} from "../../../../hooks/useTypedSelector";

const ObjectsNewModalsServices: React.FC = () => {
    const {services} = useTypedSelector(({objects_new}) => objects_new);

    return (
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
    );
};

export default ObjectsNewModalsServices;

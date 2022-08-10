import React from "react";

import {ObjectsNewModalsBig, ObjectsNewModalsServicesBlock} from "../../../";

const ObjectsNewModalsServices: React.FC = () => {
    return (
        <ObjectsNewModalsBig
            title="Удобства и услуги"
            description="Выберите из списка те удобства и услуги, что соответствуют вашему отелю, или добавьте свое с помощью вкладки “прочее”"
            fullWidth
        >
            <ObjectsNewModalsServicesBlock />
        </ObjectsNewModalsBig>
    );
};

export default ObjectsNewModalsServices;

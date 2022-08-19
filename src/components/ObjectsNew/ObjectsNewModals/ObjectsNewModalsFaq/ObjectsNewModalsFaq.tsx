import React from "react";

import {FieldArray, reduxForm, InjectedFormProps} from "redux-form";

import {ObjectsNewModalsBig, ObjectsNewModalsFaqItem} from "../../../";

import {validate} from "./validate";

const ObjectsNewModalsFaq: React.FC<{} & InjectedFormProps<{}, {}>> = ({
    handleSubmit,
}) => {
    return (
        <form
            className="objects-new-modal-content-form big"
            onSubmit={handleSubmit}
        >
            <ObjectsNewModalsBig
                title="Часто задаваемые вопросы"
                description="Добавьте как вопросы, так и ответы на них, чтобы дать гостям популярную информацию"
            >
                <FieldArray component={ObjectsNewModalsFaqItem} name="faq" />
            </ObjectsNewModalsBig>
        </form>
    );
};

export default reduxForm<{}, {}>({
    form: "objects-new-modals-faq",
    validate,
})(ObjectsNewModalsFaq);

import React from "react";
import {createTextMask} from "redux-form-input-masks";

import {Field, reduxForm, InjectedFormProps} from "redux-form";

import {useTypedSelector} from "../../hooks/useTypedSelector";

import {validate} from "./validate";

import {RenderInput, PolicyCheckbox} from "../";

const RequestRegisterForm: React.FC<{} & InjectedFormProps<{}, {}>> = ({
    handleSubmit,
    invalid,
    pristine,
    submitting,
}) => {
    const {isPending} = useTypedSelector(
        ({request_register}) => request_register
    );

    return (
        <form className="reglog-form" onSubmit={handleSubmit}>
            <div className="reglog-content-padding-top">
                <div className="reglog-form-text">
                    <p className="reglog-form-text__title">Оставьте заявку</p>
                    <p className="reglog-form-text__description">
                        Заполните поля, чтобы мы смогли оперативно с Вами
                        связаться и ответить на интересующие вопросы.
                    </p>
                </div>
            </div>

            <div className="reglog-content-padding-bottom">
                <div className="reglog-form-block">
                    <div className="reglog-form-block-input">
                        <Field
                            component={RenderInput}
                            type="email"
                            name="email"
                            label="examplemyemail@mail.ru"
                            title="Электронная почта"
                        />
                    </div>
                    <div className="reglog-form-block-input">
                        <Field
                            component={RenderInput}
                            type="phone"
                            name="phone"
                            label="8 989 999 99 99"
                            title="Номер телефона"
                        />
                    </div>

                    <div className="reglog-form-block-btn">
                        <PolicyCheckbox />

                        <button
                            className={`btn ${
                                isPending ? "disabled" : ""
                            } reglog-form-block-btn__btn`}
                            disabled={
                                invalid || submitting || pristine || isPending
                            }
                        >
                            {isPending ? "Загрузка" : "Оставить заявку"}
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default reduxForm<{}, {}>({
    form: "request-register-form",
    validate,
})(RequestRegisterForm);

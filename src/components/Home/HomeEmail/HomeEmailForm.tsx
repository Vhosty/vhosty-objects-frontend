import React from "react";
import {Field, reduxForm, InjectedFormProps} from "redux-form";
import {createTextMask} from "redux-form-input-masks";

import {validate} from "./validate";

import {RenderInput, PolicyCheckbox} from "../../";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

interface HomeEmailFormProps {}

const HomeEmailForm: React.FC<
    HomeEmailFormProps & InjectedFormProps<{}, HomeEmailFormProps>
> = ({handleSubmit, invalid, pristine, submitting}) => {
    const {isPending} = useTypedSelector(
        ({request_register}) => request_register
    );

    return (
        <form className="home-email-form" onSubmit={handleSubmit}>
            <div className="home-email-form-text">
                <h2 className="home-email-form-text__title">
                    Есть вопросы или сложности с сервисом?
                </h2>

                <p className="home-email-form-text__subtitle">
                    Мы поможем! Оставьте свои данные, и наши менеджеры свяжутся
                    с Вами в самое ближайшее время
                </p>
            </div>

            <div className="home-email-form-wrapper">
                <div className="home-email-form-field">
                    <div className="home-email-form-field-input">
                        <Field
                            component={RenderInput}
                            type="email"
                            name="email"
                            label="E-mail"
                        />
                    </div>

                    <div className="home-email-form-field-input">
                        <Field
                            component={RenderInput}
                            type="phone"
                            name="phone"
                            label="8 989 999 99 99"
                        />
                    </div>

                    <button
                        className={`btn ${
                            isPending ? "disabled" : ""
                        } home-email-form-field__btn desktop`}
                        disabled={
                            invalid || submitting || pristine || isPending
                        }
                    >
                        {isPending ? "Загрузка" : "Отправить"}
                    </button>
                </div>

                <PolicyCheckbox />

                <button
                    className={`btn ${
                        isPending ? "disabled" : ""
                    } home-email-form-field__btn mobile`}
                    disabled={invalid || submitting || pristine || isPending}
                >
                    {isPending ? "Загрузка" : "Отправить"}
                </button>
            </div>
        </form>
    );
};

export default reduxForm<{}, HomeEmailFormProps>({
    form: "home-email-form",
    validate,
})(HomeEmailForm);

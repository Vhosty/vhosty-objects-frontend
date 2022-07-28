import React from "react";

import {Field, reduxForm, InjectedFormProps} from "redux-form";

import {useTypedSelector} from "../../hooks/useTypedSelector";

import {validate} from "./validate";

import {RenderInput, PolicyCheckbox, RegisterMessageError} from "../";

const RegisterForm: React.FC<{} & InjectedFormProps<{}, {}>> = ({
    handleSubmit,
    invalid,
    pristine,
    submitting,
}) => {
    const {isPending} = useTypedSelector(({register}) => register);

    return (
        <form className="reglog-form" onSubmit={handleSubmit}>
            <div className="reglog-content-padding-top">
                <div className="reglog-form-text">
                    <p className="reglog-form-text__subtitle">
                        Гость №{localStorage.getItem("userNumber")}
                    </p>
                    <p className="reglog-form-text__title">
                        Регистрация нового объекта
                    </p>
                </div>
			</div>
			
			<RegisterMessageError />

            <div className="reglog-content-padding-bottom">
                <div className="reglog-form-block-inputs-row">
                    <div className="reglog-form-block-inputs-row-input">
                        <Field
                            component={RenderInput}
                            type="name"
                            name="name"
                            label="Алексей"
                            title="Имя"
                            small
                        />
                    </div>
                    <div className="reglog-form-block-inputs-row-input">
                        <Field
                            component={RenderInput}
                            type="surname"
                            name="surname"
                            label="Иванов"
                            title="Фамилия"
                            small
                        />
                    </div>
                </div>

                <div className="reglog-form-block-inputs-row">
                    <div className="reglog-form-block-inputs-row-input">
                        <Field
                            component={RenderInput}
                            type="email"
                            name="email"
                            label="examplemyemail@mail.ru"
                            title="Электронная почта"
                            small
                        />
                    </div>

                    <div className="reglog-form-block-inputs-row-input">
                        <Field
                            component={RenderInput}
                            type="phone"
                            name="phone"
                            label="8 989 999 99 99"
                            title="Номер телефона"
                            small
                        />
                    </div>
                </div>

                <div className="reglog-form-block-inputs-row">
                    <div className="reglog-form-block-inputs-row-input">
                        <Field
                            component={RenderInput}
                            type="password"
                            name="password"
                            label="• • • • • • • • • •"
                            title="Пароль"
                            small
                        />
                    </div>

                    <div className="reglog-form-block-inputs-row-input">
                        <Field
                            component={RenderInput}
                            type="password"
                            name="repeat_password"
                            label="• • • • • • • • • •"
                            title="Повторите пароль"
                            small
                        />
                    </div>
                </div>

                <div className="reglog-form-block-btn">
                    <PolicyCheckbox />

                    <button
                        className={`btn ${
                            isPending ? "disabled" : ""
                        } reglog-form-block-btn__btn middle-width`}
                        disabled={
                            invalid || submitting || pristine || isPending
                        }
                    >
                        {isPending ? "Загрузка" : "Зарегистрироваться"}
                    </button>
                </div>
            </div>
        </form>
    );
};

export default reduxForm<{}, {}>({
    form: "register-form",
    validate,
})(RegisterForm);

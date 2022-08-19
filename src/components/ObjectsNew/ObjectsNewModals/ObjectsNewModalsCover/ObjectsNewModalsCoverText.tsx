import React from "react";

import {Field, reduxForm, InjectedFormProps} from "redux-form";

import {
    TitleIcon,
    RenderInput,
    ObjectsNewModalsSmall,
    ObjectsNewModalsCoverTextStarsInput,
} from "../../../";

import {useTypedSelector} from "../../../../hooks/useTypedSelector";

import {validate} from "./validate";

const ObjectsNewModalsCoverText: React.FC<{} & InjectedFormProps<{}, {}>> = ({
    handleSubmit,
    initialize,
}) => {
    const {itemById, isLoadedItemById} = useTypedSelector(
        ({objects_new}) => objects_new
    );

    React.useEffect(() => {
        if (isLoadedItemById) {
            initialize({...itemById});
        }
    }, [isLoadedItemById]);

    return (
        <form
            className="objects-new-modal-content-form"
            onSubmit={handleSubmit}
        >
            <ObjectsNewModalsSmall
                title="Главная информация"
                description="Добавьте информацию о наименовании объекта, количестве звезд, местоположении"
            >
                <div className="objects-new-modal-content-input">
                    <TitleIcon title="Наименование объекта" marginBottom>
                        <svg
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6.875 11.25H10.625C10.7907 11.25 10.9497 11.1841 11.0669 11.0669L17.3169 4.81689C17.561 4.57275 17.561 4.17725 17.3169 3.93311L13.5669 0.183105C13.3228 -0.0610352 12.9272 -0.0610352 12.6831 0.183105L6.43311 6.43311C6.31592 6.55029 6.25 6.70929 6.25 6.875V10.625C6.25 10.9702 6.52985 11.25 6.875 11.25ZM8.75 7.5C9.4392 7.5 10 8.0608 10 8.75C10 9.4392 9.4392 10 8.75 10C8.0608 10 7.5 9.4392 7.5 8.75C7.5 8.0608 8.0608 7.5 8.75 7.5Z"
                                fill="#00A0A0"
                            />
                            <path
                                d="M16.875 15H0.625C0.279846 15 0 15.2798 0 15.625C0 16.6589 0.841064 17.5 1.875 17.5H15.625C16.6589 17.5 17.5 16.6589 17.5 15.625C17.5 15.2798 17.2202 15 16.875 15Z"
                                fill="#00A0A0"
                            />
                            <path
                                d="M16.25 7.5C16.25 7.28851 16.1925 7.0924 16.0998 6.91776L11.5088 11.5088C11.2726 11.745 10.9589 11.875 10.625 11.875H6.875C6.18561 11.875 5.625 11.3144 5.625 10.625V6.875C5.625 6.65108 5.68817 6.43848 5.79796 6.25H2.5C1.80965 6.25 1.25 6.80962 1.25 7.5V14.375H16.25V7.5Z"
                                fill="#00A0A0"
                            />
                        </svg>
                    </TitleIcon>

                    <Field
                        component={RenderInput}
                        label="Например, гостевой дом “Кедр”"
                        type="text"
                        name="name"
                        small
                    />
                </div>

                <ObjectsNewModalsCoverTextStarsInput
                    initialize={initialize}
                    initStars={itemById.stars}
                />

                <div className="objects-new-modal-content-input">
                    <TitleIcon title="Полный адрес объекта" marginBottom>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0.500083 6.11344C0.498016 6.24013 0.534506 6.36446 0.604715 6.46994C0.674923 6.57542 0.775535 6.65707 0.893208 6.70406L6.89383 9.10469L9.29446 15.1059C9.34083 15.222 9.42094 15.3215 9.52445 15.3916C9.62795 15.4617 9.75009 15.4991 9.87508 15.4991H9.88508C10.0117 15.4971 10.1347 15.4567 10.2378 15.3832C10.3409 15.3098 10.4193 15.2068 10.4626 15.0878L15.4626 1.33781C15.5035 1.22595 15.5116 1.10473 15.486 0.988413C15.4603 0.872097 15.4019 0.765536 15.3178 0.681278C15.2336 0.59702 15.127 0.538575 15.0108 0.512825C14.8945 0.487076 14.7732 0.495095 14.6613 0.535938L0.911333 5.53594C0.792312 5.57933 0.689269 5.65784 0.615835 5.76107C0.542402 5.8643 0.502038 5.98739 0.500083 6.11406V6.11344Z"
                                fill="#00A0A0"
                            />
                        </svg>
                    </TitleIcon>

                    <Field
                        component={RenderInput}
                        label="Например, Московская область, Москва, ул. Пушкина"
                        type="text"
                        small
                        name="address"
                    />
                </div>
            </ObjectsNewModalsSmall>
        </form>
    );
};

export default reduxForm<{}, {}>({
    form: "objects-new-modals-cover-text",
    validate,
})(ObjectsNewModalsCoverText);

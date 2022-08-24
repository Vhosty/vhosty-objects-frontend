import React from "react";

import {reduxForm, InjectedFormProps, Field} from "redux-form";

import {
    RenderTime,
    TitleIcon,
    RenderSelect,
    RenderTextarea,
    ObjectsNewModalsSmall,
    ObjectsNewModalsTermsYesOrNo,
} from "../../../";

import {useTypedSelector} from "../../../../hooks/useTypedSelector";

import {validate} from "./validate";

const ObjectsNewModalsTerms: React.FC<{} & InjectedFormProps<{}, {}>> = ({
    handleSubmit,
    initialize,
}) => {
    const [selectIsActive, setSelectIsActive] = React.useState<boolean>(true);

    const onChangeYesOrNo = (status: boolean) => {
        setSelectIsActive(status);
    };

    const {itemByIdTerms, isLoadedItemByIdTerms} = useTypedSelector(
        ({objects_new}) => objects_new
    );

    React.useEffect(() => {
        if (isLoadedItemByIdTerms) {
            initialize({
                ["from-hourses"]: itemByIdTerms.checkin_time.split(":")[0],
                ["from-minutes"]: itemByIdTerms.checkin_time.split(":")[1],

                ["to-hourses"]: itemByIdTerms.checkout_time.split(":")[0],
                ["to-minutes"]: itemByIdTerms.checkout_time.split(":")[1],

                other_time_available: selectIsActive,
                timesPossibilityType: itemByIdTerms.other_time_price,

                about: itemByIdTerms.additional_info,
            });
        }
    }, [isLoadedItemByIdTerms, selectIsActive]);

    React.useEffect(() => {
        if (isLoadedItemByIdTerms) {
            setSelectIsActive(itemByIdTerms.other_time_available);
        }
    }, [isLoadedItemByIdTerms]);

    return (
        <form
            className="objects-new-modal-content-form"
            onSubmit={handleSubmit}
        >
            <ObjectsNewModalsSmall
                title="Условия размещения"
                description="Добавьте информацию о времени заезда и выезда, а также об условиях проживания, оплаты или иную полезную для гостей информацию."
                fullWidth
            >
                <div className="objects-new-modal-content-terms">
                    <div className="objects-new-modal-content-terms-times">
                        <div className="objects-new-modal-content-terms-times-from-to">
                            <div className="objects-new-modal-content-terms-times-from-to-block">
                                <TitleIcon title="Заселение" marginBottom>
                                    <svg
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M8.9915 0.666748C4.3915 0.666748 0.666504 4.40008 0.666504 9.00008C0.666504 13.6001 4.3915 17.3334 8.9915 17.3334C13.5998 17.3334 17.3332 13.6001 17.3332 9.00008C17.3332 4.40008 13.5998 0.666748 8.9915 0.666748ZM11.7415 12.9251L8.1665 9.34175V4.83341H9.83317V8.65841L12.9248 11.7501L11.7415 12.9251Z"
                                            fill="#00A0A0"
                                        />
                                    </svg>
                                </TitleIcon>

                                <RenderTime name="from" />
                            </div>

                            <div className="objects-new-modal-content-terms-times-from-to-block">
                                <TitleIcon title="Выезд" marginBottom>
                                    <svg
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M8.9915 0.666748C4.3915 0.666748 0.666504 4.40008 0.666504 9.00008C0.666504 13.6001 4.3915 17.3334 8.9915 17.3334C13.5998 17.3334 17.3332 13.6001 17.3332 9.00008C17.3332 4.40008 13.5998 0.666748 8.9915 0.666748ZM11.7415 12.9251L8.1665 9.34175V4.83341H9.83317V8.65841L12.9248 11.7501L11.7415 12.9251Z"
                                            fill="#00A0A0"
                                        />
                                    </svg>
                                </TitleIcon>

                                <RenderTime name="to" />
                            </div>
                        </div>

                        <div className="objects-new-modal-content-terms-times-possibility-from-to-wrapper">
                            <TitleIcon
                                title="Возможность другого времени заезда/выезда"
                                marginBottom
                            >
                                <svg
                                    width="18"
                                    height="17"
                                    viewBox="0 0 18 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.83333 12.8333C8.83333 13.6916 9.05 14.4999 9.425 15.1916C8.96667 15.2833 8.49167 15.3333 8 15.3333C6.01088 15.3333 4.10322 14.5431 2.6967 13.1366C1.29018 11.73 0.5 9.82238 0.5 7.83325C0.5 5.84413 1.29018 3.93647 2.6967 2.52995C4.10322 1.12343 6.01088 0.333252 8 0.333252C9.76667 0.333252 11.3917 0.949919 12.6833 1.99992L13.8583 3.15825C14.0191 3.36613 14.1186 3.5028 13.8583 3.15825C14.9216 4.4844 15.5007 6.13352 15.5 7.83325V8.12492C14.9667 7.94159 14.4167 7.83325 13.8333 7.83325C11.075 7.83325 8.83333 10.0749 8.83333 12.8333ZM8.83333 2.83325H7.16667V8.66658H8.83333V2.83325ZM14.6667 11.9999V9.49992H13V11.9999H10.5V13.6666H13V16.1666H14.6667V13.6666H17.1667V11.9999H14.6667Z"
                                        fill="#00A0A0"
                                    />
                                </svg>
                            </TitleIcon>

                            <div className="objects-new-modal-content-terms-times-possibility-from-to">
                                <ObjectsNewModalsTermsYesOrNo
                                    onChange={onChangeYesOrNo}
                                    selectIsActive={selectIsActive}
                                />

                                <div className="objects-new-modal-content-terms-times-possibility-from-to-select">
                                    <Field
                                        component={RenderSelect}
                                        choices={[
                                            {title: "Бесплатно", key: 0},
                                            {title: "Платно", key: 1},
                                        ]}
                                        border
                                        small
                                        disabled={!selectIsActive}
                                        name="timesPossibilityType"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="objects-new-modal-content-terms-about">
                        <TitleIcon
                            title="Дополнительная информация"
                            marginBottom
                        >
                            <svg
                                viewBox="0 0 14 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M13.875 1.875V2.5H0.125V1.875C0.126451 1.37817 0.324461 0.902094 0.675778 0.550778C1.02709 0.199461 1.50317 0.00145101 2 0L12 0C12.4968 0.00145101 12.9729 0.199461 13.3242 0.550778C13.6755 0.902094 13.8735 1.37817 13.875 1.875Z"
                                    fill="#00A0A0"
                                />
                                <path
                                    d="M0.125 17.5H13.875V18.125C13.8735 18.6218 13.6755 19.0979 13.3242 19.4492C12.9729 19.8005 12.4968 19.9985 12 20H2C1.50317 19.9985 1.02709 19.8005 0.675778 19.4492C0.324461 19.0979 0.126451 18.6218 0.125 18.125V17.5Z"
                                    fill="#00A0A0"
                                />
                                <path
                                    d="M0.125 3.75V16.25H13.875V3.75H0.125ZM7 5C7.12361 5 7.24445 5.03666 7.34723 5.10533C7.45001 5.17401 7.53012 5.27162 7.57743 5.38582C7.62473 5.50003 7.63711 5.62569 7.61299 5.74693C7.58888 5.86817 7.52935 5.97953 7.44194 6.06694C7.35453 6.15435 7.24317 6.21388 7.12193 6.23799C7.00069 6.26211 6.87503 6.24973 6.76082 6.20242C6.64662 6.15512 6.54901 6.07501 6.48033 5.97223C6.41166 5.86945 6.375 5.74861 6.375 5.625C6.375 5.45924 6.44085 5.30027 6.55806 5.18306C6.67527 5.06585 6.83424 5 7 5ZM5.75 7.5C5.75 7.33424 5.81585 7.17527 5.93306 7.05806C6.05027 6.94085 6.20924 6.875 6.375 6.875H7C7.16576 6.875 7.32473 6.94085 7.44194 7.05806C7.55915 7.17527 7.625 7.33424 7.625 7.5V11.25C7.79076 11.25 7.94973 11.3158 8.06694 11.4331C8.18415 11.5503 8.25 11.7092 8.25 11.875C8.25 12.0408 8.18415 12.1997 8.06694 12.3169C7.94973 12.4342 7.79076 12.5 7.625 12.5H6.375C6.20924 12.5 6.05027 12.4342 5.93306 12.3169C5.81585 12.1997 5.75 12.0408 5.75 11.875C5.75 11.7092 5.81585 11.5503 5.93306 11.4331C6.05027 11.3158 6.20924 11.25 6.375 11.25V8.125C6.20924 8.125 6.05027 8.05915 5.93306 7.94194C5.81585 7.82473 5.75 7.66576 5.75 7.5ZM10.125 15H3.875C3.70924 15 3.55027 14.9342 3.43306 14.8169C3.31585 14.6997 3.25 14.5408 3.25 14.375C3.25 14.2092 3.31585 14.0503 3.43306 13.9331C3.55027 13.8158 3.70924 13.75 3.875 13.75H10.125C10.2908 13.75 10.4497 13.8158 10.5669 13.9331C10.6842 14.0503 10.75 14.2092 10.75 14.375C10.75 14.5408 10.6842 14.6997 10.5669 14.8169C10.4497 14.9342 10.2908 15 10.125 15Z"
                                    fill="#00A0A0"
                                />
                            </svg>
                        </TitleIcon>

                        <Field
                            component={RenderTextarea}
                            label="Полотенца включены в стоимость проживания"
                            name="about"
                        />
                    </div>

                    <div className="objects-new-modal-content-terms-selects">
                        <div className="objects-new-modal-content-terms-selects-pay">
                            <TitleIcon title="Оплата в отеле" marginBottom>
                                <svg
                                    viewBox="0 0 18 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.429199 2.53533C0.429199 2.01437 0.63615 1.51475 1.00453 1.14637C1.3729 0.777996 1.87252 0.571045 2.39348 0.571045H15.6078C16.1287 0.571045 16.6284 0.777996 16.9967 1.14637C17.3651 1.51475 17.5721 2.01437 17.5721 2.53533V4.14247H0.429199V2.53533ZM0.429199 5.2139H17.5721V10.7496C17.5721 11.2706 17.3651 11.7702 16.9967 12.1386C16.6284 12.507 16.1287 12.7139 15.6078 12.7139H2.39348C1.87252 12.7139 1.3729 12.507 1.00453 12.1386C0.63615 11.7702 0.429199 11.2706 0.429199 10.7496V5.2139ZM12.2149 8.7139C12.0444 8.7139 11.8809 8.78163 11.7603 8.90219C11.6398 9.02275 11.5721 9.18626 11.5721 9.35676C11.5721 9.52725 11.6398 9.69077 11.7603 9.81133C11.8809 9.93189 12.0444 9.99962 12.2149 9.99962H14.3578C14.5283 9.99962 14.6918 9.93189 14.8123 9.81133C14.9329 9.69077 15.0006 9.52725 15.0006 9.35676C15.0006 9.18626 14.9329 9.02275 14.8123 8.90219C14.6918 8.78163 14.5283 8.7139 14.3578 8.7139H12.2149Z"
                                        fill="#00A0A0"
                                    />
                                </svg>
                            </TitleIcon>

                            <Field
                                component={RenderSelect}
                                choices={[
                                    {
                                        title: "Безналичный и наличный расчет",
                                        key: "cashless-and-cash-payment",
                                    },
                                    {
                                        title: "Безналичный расчет",
                                        key: "cashless-payment",
                                    },
                                    {
                                        title: "Наличный расчет",
                                        key: "cash-payment",
                                    },
                                ]}
                                small
                                border
                                name="payType"
                            />
                        </div>
                        {/* 
                        <div className="objects-new-modal-content-terms-selects-confirmed">
                            <TitleIcon
                                title="Подтверждение бронирования"
                                marginBottom
                            >
                                <svg
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M15.8872 0.605469H4.11281C1.845 0.605469 0 2.45047 0 4.71828C0 6.99707 1.86418 8.83109 4.08828 8.83109H5.93555V5.60867C5.93555 4.16555 7.10957 2.99148 8.55266 2.99148H8.55836C9.9984 2.99457 11.1699 4.16863 11.1699 5.60867V8.83109H15.8872C18.155 8.83109 20 6.98609 20 4.71828C20 2.45047 18.155 0.605469 15.8872 0.605469ZM17.0511 4.14477L14.7073 6.48852C14.4785 6.71734 14.1075 6.71738 13.8787 6.48852L12.7068 5.31664C12.478 5.08781 12.478 4.71684 12.7068 4.48801C12.9356 4.25918 13.3066 4.25918 13.5354 4.48801L14.293 5.24555L16.2225 3.31613C16.4513 3.0873 16.8223 3.0873 17.0511 3.31613C17.2799 3.54496 17.2799 3.91598 17.0511 4.14477Z"
                                        fill="#00A0A0"
                                    />
                                    <path
                                        d="M13.7703 10.4808L9.99834 10.0888V5.60938C9.99834 4.81235 9.35315 4.16578 8.55611 4.16407C7.7567 4.16235 7.10772 4.80993 7.10772 5.60938V13.1062H7.09459L5.66791 11.9148C5.06615 11.4123 4.16818 11.5065 3.68381 12.123C3.21932 12.7141 3.309 13.5675 3.88623 14.0491L6.78205 16.4656H15.3108V12.2251C15.3108 11.3383 14.6503 10.5904 13.7703 10.4808Z"
                                        fill="#00A0A0"
                                    />
                                    <path
                                        d="M7.10938 18.8086C7.10938 19.1322 7.37172 19.3945 7.69531 19.3945H14.7266C15.0502 19.3945 15.3125 19.1322 15.3125 18.8086V17.6367H7.10938V18.8086Z"
                                        fill="#00A0A0"
                                    />
                                </svg>
                            </TitleIcon>

                            <Field
                                component={RenderSelect}
                                choices={[
                                    {
                                        title: "Безналичный и наличный расчет",
                                        key: "cashless-and-cash-payment",
                                    },
                                    {
                                        title: "Безналичный расчет",
                                        key: "cashless-payment",
                                    },
                                    {
                                        title: "Наличный расчет",
                                        key: "cash-payment",
                                    },
                                ]}
                                small
                                border
                                name="confirmedType"
                            />
                        </div> */}
                    </div>
                </div>
            </ObjectsNewModalsSmall>
        </form>
    );
};

export default reduxForm<{}, {}>({
    form: "objects-new-modals-terms",
    validate,
})(ObjectsNewModalsTerms);

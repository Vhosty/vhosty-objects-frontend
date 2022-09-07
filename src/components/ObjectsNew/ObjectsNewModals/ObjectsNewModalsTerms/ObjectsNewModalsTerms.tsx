import React from "react";

import {reduxForm, InjectedFormProps, Field} from "redux-form";

import {
    ObjectsNewModalsSmall,
    ObjectsNewModalsBig,
    ObjectsNewModalsTermsContent,
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
            className={`objects-new-modal-content-form ${
                document.documentElement.clientWidth > 700 ? "" : "big"
            }`}
            onSubmit={handleSubmit}
        >
            {document.documentElement.clientWidth > 700 ? (
                <ObjectsNewModalsSmall
                    title="Условия размещения"
                    description="Добавьте информацию о времени заезда и выезда, а также об условиях проживания, оплаты или иную полезную для гостей информацию."
                    fullWidth
                >
                    <ObjectsNewModalsTermsContent
                        onChangeYesOrNo={onChangeYesOrNo}
                        selectIsActive={selectIsActive}
                    />
                </ObjectsNewModalsSmall>
            ) : (
                <ObjectsNewModalsBig
                    title="Условия размещения"
                    description="Добавьте информацию о времени заезда и выезда, а также об условиях проживания, оплаты или иную полезную для гостей информацию."
                    fullWidth
                >
                    <ObjectsNewModalsTermsContent
                        onChangeYesOrNo={onChangeYesOrNo}
                        selectIsActive={selectIsActive}
                    />
                </ObjectsNewModalsBig>
            )}
        </form>
    );
};

export default reduxForm<{}, {}>({
    form: "objects-new-modals-terms",
})(ObjectsNewModalsTerms);

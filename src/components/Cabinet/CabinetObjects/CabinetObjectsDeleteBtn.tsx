import React from "react";
import {useDispatch} from "react-redux";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

import {sendDeleteObjects} from "../../../redux/actions/user/userObjects";

const CabinetObjectsDeleteBtn: React.FC = () => {
    const dispatch = useDispatch();

    const {deleteIds} = useTypedSelector(({userObjects}) => userObjects);

    const sendDeleteOnClick = () => {
        dispatch(sendDeleteObjects(deleteIds) as any);
    };

    return (
        <div className="cabinet-block-objects-delete">
            <button
                className={`cabinet-block-objects-delete__btn ${
                    Object.keys(deleteIds).length ? "" : "disabled"
                }`}
                onClick={sendDeleteOnClick}
            >
                <svg
                    viewBox="0 0 14 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M1.16565 15.6665C1.16565 16.5874 2.03577 17.3332 3.11011 17.3332H10.8879C11.9622 17.3332 12.8323 16.5874 12.8323 15.6665V5.6665H1.16565V15.6665Z" />
                    <path d="M10.3323 1.7776L9.37988 0.666504H4.618L3.66559 1.7776H0.332275V3.99984H13.6656V1.7776H10.3323Z" />
                </svg>
                Удалить выбранные
            </button>
        </div>
    );
};

export default CabinetObjectsDeleteBtn;

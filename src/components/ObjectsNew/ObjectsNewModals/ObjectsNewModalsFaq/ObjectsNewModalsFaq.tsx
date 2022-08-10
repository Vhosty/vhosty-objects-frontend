import React from "react";

import {ObjectsNewModalsBig, ObjectsNewModalsFaqItem} from "../../../";

const ObjectsNewModalsFaq: React.FC = () => {
    return (
        <ObjectsNewModalsBig
            title="Часто задаваемые вопросы"
            description="Добавьте как вопросы, так и ответы на них, чтобы дать гостям популярную информацию"
        >
            <ObjectsNewModalsFaqItem />

            <button className="objects-new-modal-content-big-faq__btn">
                <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M34.25 18.125C34.25 9.22266 27.0273 2 18.125 2C9.22266 2 2 9.22266 2 18.125C2 27.0273 9.22266 34.25 18.125 34.25C27.0273 34.25 34.25 27.0273 34.25 18.125Z"
                        stroke="#116E67"
                        strokeWidth="3"
                        strokeMiterlimit="10"
                    />
                    <path
                        d="M18.1248 25.7264V10.5236M25.7262 18.125H10.5234H25.7262Z"
                        stroke="#116E67"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                Добавить еще вопрос-ответ
            </button>
        </ObjectsNewModalsBig>
    );
};

export default ObjectsNewModalsFaq;

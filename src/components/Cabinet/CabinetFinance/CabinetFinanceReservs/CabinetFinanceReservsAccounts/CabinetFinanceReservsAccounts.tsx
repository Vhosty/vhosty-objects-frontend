import React from "react";
import AnimateHeight from "react-animate-height";

import {CabinetFinanceNull} from "../../../../";

const CabinetFinanceReservsAccounts: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    return (
        <div className="cabinet-block-finance-reservs-accounts">
            <div
                className="cabinet-block-finance-reservs-accounts-title"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="cabinet-block-finance-reservs-accounts-title__title">
                    Выставленный счет за выбранный период
                </h3>

                <div
                    className={`cabinet-block-finance-reservs-accounts-title-arrow ${
                        isOpen ? "rotate" : ""
                    }`}
                >
                    <svg
                        width="21"
                        height="11"
                        viewBox="0 0 21 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1 1L8.325 8.71053C9.50775 9.95553 11.4922 9.95553 12.675 8.71053L20 1"
                            stroke="#253021"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>
            </div>

            <AnimateHeight height={isOpen ? "auto" : 0} duration={200}>
                <div className="cabinet-block-finance-reservs-accounts-content">
                    <CabinetFinanceNull
                        title="Счет был выставлен 3 авг. 2022 на основании данных ниже."
                        link="Посмотреть бронирования"
                    />
                </div>
            </AnimateHeight>
        </div>
    );
};

export default CabinetFinanceReservsAccounts;

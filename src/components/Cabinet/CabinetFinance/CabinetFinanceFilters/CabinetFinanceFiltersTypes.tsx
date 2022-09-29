import React from "react";

const CabinetFinanceFiltersTypes: React.FC = () => {
    return (
        <div className="cabinet-block-finance-filters-types">
            <button
                className={`cabinet-block__btn active cabinet-block-finance-filters-types__btn`}
            >
                Счета
            </button>

            <button
                className={`cabinet-block__btn cabinet-block-finance-filters-types__btn`}
            >
                Отчеты по бронированиям
            </button>

            <button
                className={`cabinet-block__btn cabinet-block-finance-filters-types__btn`}
            >
                Статистика и показатели
            </button>
        </div>
    );
};

export default CabinetFinanceFiltersTypes;

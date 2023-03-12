import React from "react";
import {NavLink} from "react-router-dom";

const CabinetFinanceTopText: React.FC = () => {
    return (
        <div className="cabinet-block-text">
            <h2 className="cabinet-block-text__title">Финансы</h2>

            <p className="cabinet-block-text__subtitle">
                Детальные финансовые отчеты, задолженности, выставленные счета
            </p>

            <div className="cabinet-block-btn">
                <NavLink
                    to="/cabinet/finance/accounts"
                    className={({isActive}) =>
                        `cabinet-block__btn ${
                            isActive ? "active" : ""
                        } abinet-block-text-link__link`
                    }
                >
                    Счета
                </NavLink>

                <NavLink
                    to="/cabinet/finance/reservs"
                    className={({isActive}) =>
                        `cabinet-block__btn ${
                            isActive ? "active" : ""
                        } abinet-block-text-link__link`
                    }
                >
                    Отчеты по бронированиям
                </NavLink>

                <NavLink
                    to="/cabinet/finance/statistics"
                    className={({isActive}) =>
                        `cabinet-block__btn ${
                            isActive ? "active" : ""
                        } abinet-block-text-link__link`
                    }
                >
                    Статистика и показатели
                </NavLink>
            </div>
        </div>
    );
};

export default CabinetFinanceTopText;

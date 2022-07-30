import React from "react";
import {Link} from "react-router-dom";

const CabinetReservItem: React.FC = () => {
    return (
        <div className="cabinet-block-reserv-item">
            <div className="cabinet-block-reserv-item-block-object">
                <div
                    className="cabinet-block-reserv-item-block-object-cover"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1658595637559-6e026a2f7646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')`,
                    }}
                >
                    <div className="cabinet-block-reserv-item-block-object-cover-icon">
                        <svg
                            width="14"
                            height="11"
                            viewBox="0 0 14 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12.9796 1.45536H9.27374L8.52543 0.198218C8.45222 0.0753055 8.31978 0 8.17673 0H5.82317C5.68013 0 5.54765 0.0753055 5.47448 0.198218L4.72616 1.45536H3.51011V1.17828C3.51011 0.954189 3.32843 0.772508 3.10434 0.772508H1.60292C1.37878 0.772508 1.19714 0.954189 1.19714 1.17828V1.45536H1.02038C0.456799 1.45536 0 1.91221 0 2.4757V9.86348C0 10.427 0.456799 10.8839 1.02034 10.8839H12.9796C13.5431 10.8839 14 10.427 14 9.86348V2.4757C14 1.91221 13.5431 1.45536 12.9796 1.45536ZM6.99995 9.07398C5.3959 9.07398 4.09557 7.77365 4.09557 6.16954C4.09557 4.56553 5.3959 3.26515 6.99995 3.26515C8.60401 3.26515 9.90434 4.56553 9.90434 6.16954C9.90434 7.77365 8.60401 9.07398 6.99995 9.07398ZM12.343 3.559H11.0715C10.8474 3.559 10.6657 3.37732 10.6657 3.15318C10.6657 2.92904 10.8474 2.74735 11.0715 2.74735H12.343C12.5671 2.74735 12.7488 2.92904 12.7488 3.15318C12.7488 3.37732 12.5671 3.559 12.343 3.559Z"
                                fill="white"
                                fillOpacity="0.7"
                            />
                            <path
                                d="M7.00167 8.19865C8.12226 8.19865 9.03068 7.29023 9.03068 6.16964C9.03068 5.04905 8.12226 4.14062 7.00167 4.14062C5.88108 4.14062 4.97266 5.04905 4.97266 6.16964C4.97266 7.29023 5.88108 8.19865 7.00167 8.19865Z"
                                fill="white"
                                fillOpacity="0.7"
                            />
                        </svg>
                    </div>

                    <div className="cabinet-block-reserv-item-block-object-cover-plaecholder"></div>
                </div>
                <div className="cabinet-block-reserv-item-block-object-text">
                    <p className="cabinet-block-reserv-item-block-object-text__title">
                        Уютный домик в лесу для пары и романтического уютный
                        домик в лесу для пары и романтического
                    </p>

                    <Link
                        to="/"
                        className="btn-line cabinet-block-reserv-item-block-object-text__link"
                    >
                        Редактировать объект
                    </Link>
                </div>
            </div>

            <div className="cabinet-block-reserv-item-block-guests">
                <p className="cabinet-block-reserv-item-block-guests__title">
                    Филипова Анастасия Александровна
                </p>
                <p className="cabinet-block-reserv-item-block-guests__subtitle">
                    2 гостя, 1 ребенок
                </p>
            </div>

            <div className="cabinet-block-reserv-item-block-from">
                <p className="cabinet-block-reserv-item-block-from__title">
                    25 сент. 2021
                </p>
            </div>

            <div className="cabinet-block-reserv-item-block-to">
                <p className="cabinet-block-reserv-item-block-to__title">
                    25 окт. 2021
                </p>
            </div>

            <div className="cabinet-block-reserv-item-block-status">
                <p className="cabinet-block-reserv-item-block-status__title cancel">
                    Отмена
                </p>
            </div>

            <div className="cabinet-block-reserv-item-block-price">
                <p className="cabinet-block-reserv-item-block-price__title">
                    210 000 ₽
                </p>
            </div>

            <div className="cabinet-block-reserv-item-block-commission">
                <p className="cabinet-block-reserv-item-block-commission__title">
                    2100 ₽
                </p>
            </div>

            <div className="cabinet-block-reserv-item-block-booking">
                <p className="cabinet-block-reserv-item-block-booking__number">
                    № 2372533808
                </p>
                <p className="cabinet-block-reserv-item-block-booking__date">
                    12 сент. 2021
                </p>
            </div>
        </div>
    );
};

export default CabinetReservItem;

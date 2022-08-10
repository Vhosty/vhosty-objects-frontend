import React from "react";
import {Link} from "react-router-dom";

const ObjectsNewRooms: React.FC = () => {
    return (
        <div className="objects-new-block objects-new-block-rooms">
            <div className="objects-new-block-text">
                <h2 className="objects-new-block-text__title">
                    Выбор доступного номера
                </h2>
                <p className="objects-new-block-text__description">
                    У вас не создано ни одного номера и вариантов его удобств.
                    Вы можете создать номер и включить в опции/комплектацию как
                    еду, так и условия бронирований.
                </p>
                <Link to="#rooms" className="btn-line objects-new-block-text__btn">
                    Создать номер
                </Link>
            </div>

            <div className="objects-new-block-icon">
                <svg
                    width="216"
                    height="129"
                    viewBox="0 0 216 129"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0 63.293V113.918H12.6562V128.479H25.3125V113.918H190.688V128.479H203.344V113.918H216V63.293H0Z"
                        fill="#00A0A0"
                        fillOpacity="0.2"
                    />
                    <path
                        d="M12.6914 0V50.636H38.0039V25.3125H101.291V50.636H113.948V25.3125H178.066V50.636H203.345V0H12.6914Z"
                        fill="#00A0A0"
                        fillOpacity="0.2"
                    />
                </svg>
            </div>
        </div>
    );
};

export default ObjectsNewRooms;

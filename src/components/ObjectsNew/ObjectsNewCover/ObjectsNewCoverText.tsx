import React from "react";
import {Link} from "react-router-dom";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

import {Stars, Location} from "../../";

const ObjectsNewCoverText: React.FC = () => {
    const {itemById}: any = useTypedSelector(({objects_new}) => objects_new);

    return (
        <>
            {itemById.name !== "" ? (
                <div className="container">
                    <div className="object-page-cover-text">
                        <div className="object-page-cover-text-info">
                            <div className="object-page-cover-text-info-stars">
                                <Stars count={itemById.stars} />
                            </div>
                            <h2 className="object-page-cover-text-info__title">
                                {itemById.name}
                            </h2>
                            <Location
                                title={itemById.address}
                                subtitle="10,9 км от центра"
                            />
                            <div className="object-page-cover-text-info-btn">
                                <Link to="#cover" className="object-page-cover-text-info-btn__edit">
                                    <svg
                                        width="22"
                                        height="22"
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1.81399 14.463L0.547323 19.9297C0.503627 20.1295 0.505125 20.3366 0.551707 20.5358C0.598289 20.735 0.688779 20.9212 0.816565 21.081C0.944352 21.2407 1.10621 21.3699 1.29031 21.459C1.47441 21.5482 1.6761 21.5951 1.88066 21.5964C1.97597 21.606 2.07201 21.606 2.16732 21.5964L7.66732 20.3297L18.2273 9.80969L12.334 3.92969L1.81399 14.463Z"
                                            fill="#116E67"
                                        />
                                        <path
                                            d="M21.5471 4.546L17.6138 0.612662C17.3552 0.355372 17.0053 0.210937 16.6405 0.210938C16.2757 0.210938 15.9257 0.355372 15.6671 0.612662L13.4805 2.79933L19.3671 8.686L21.5538 6.49933C21.6818 6.37072 21.7831 6.21813 21.852 6.05031C21.921 5.88248 21.9561 5.70271 21.9555 5.52128C21.9549 5.33985 21.9185 5.16032 21.8484 4.99297C21.7784 4.82562 21.676 4.67373 21.5471 4.546V4.546Z"
                                            fill="#116E67"
                                        />
                                    </svg>
                                    Редактировать
                                </Link>
                            </div>
                        </div>

                        <div className="object-page-cover-text-feedbacks"></div>
                    </div>
                </div>
            ) : (
                <div className="objects-new-cover-text">
                    <div className="objects-new-cover-text-description">
                        <h2 className="objects-new-cover-text-description__title">
                            Главная информация
                        </h2>
                        <p className="objects-new-cover-text-description__subtitle">
                            Наименование объекта, количество звезд,
                            местоположение
                        </p>

                        <Link
                            to="#cover"
                            className="btn-line objects-new-cover-text-description__btn"
                        >
                            Добавить информацию
                        </Link>
                    </div>

                    <div className="objects-new-cover-text-feedbacks"></div>
                </div>
            )}
        </>
    );
};

export default ObjectsNewCoverText;

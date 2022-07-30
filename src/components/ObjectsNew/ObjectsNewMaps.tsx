import React from "react";

import MapImage from "../../assets/images/filters-small-map.png";

const ObjectPageMaps: React.FC = () => {
    return (
        <div className="objects-new-block-maps">
            <div className="objects-new-block-maps-padding">
                <div className="objects-new-block-maps-text">
                    <h2 className="objects-new-maps-block__title">
                        Отель на карте и ориентиры
                    </h2>
                    <div className="objects-new-block-maps-text-location">
                        <p className="objects-new-block-maps-text-location__title">
                            Дубай Медиа-Сити, Дубай, st. general city
                            employment, 1440
                        </p>
                        <p className="objects-new-block-maps-text-location__subtitle">
                            10,9 км от центра
                        </p>
                    </div>
                    <div className="objects-new-block-maps-text-list-wrapper">
                        <div className="objects-new-block-maps-text-list">
                            <h3 className="objects-new-block-maps-text-list__title">
                                Достопримечательности
                            </h3>
                            <div className="objects-new-block-maps-text-list-item">
                                <p className="objects-new-block-maps-text-list-item__title">
                                    Отель Burj Al Arab
                                </p>
                                <p className="objects-new-block-maps-text-list-item__distance">
                                    5,9 км
                                </p>
                            </div>
                            <div className="objects-new-block-maps-text-list-item">
                                <p className="objects-new-block-maps-text-list-item__title">
                                    Гольф-поле Montgomerie в Дубае
                                </p>
                                <p className="objects-new-block-maps-text-list-item__distance">
                                    25,9 км
                                </p>
                            </div>
                            <div className="objects-new-block-maps-text-list-item">
                                <p className="objects-new-block-maps-text-list-item__title">
                                    Аквапарк Aquaventure
                                </p>
                                <p className="objects-new-block-maps-text-list-item__distance">
                                    5,9 км
                                </p>
                            </div>
                            <div className="objects-new-block-maps-text-list-item">
                                <p className="objects-new-block-maps-text-list-item__title">
                                    Dubai Autodrome
                                </p>
                                <p className="objects-new-block-maps-text-list-item__distance">
                                    5,9 км
                                </p>
                            </div>
                        </div>

                        <div className="objects-new-block-maps-text-list">
                            <h3 className="objects-new-block-maps-text-list__title">
                                Инфраструктура
                            </h3>
                            <div className="objects-new-block-maps-text-list-item">
                                <p className="objects-new-block-maps-text-list-item__title">
                                    Отель Burj Al Arab
                                </p>
                                <p className="objects-new-block-maps-text-list-item__distance">
                                    5,9 км
                                </p>
                            </div>
                            <div className="objects-new-block-maps-text-list-item">
                                <p className="objects-new-block-maps-text-list-item__title">
                                    Гольф-поле Montgomerie в Дубае
                                </p>
                                <p className="objects-new-block-maps-text-list-item__distance">
                                    25,9 км
                                </p>
                            </div>
                        </div>
                    </div>
                    <p className="objects-new-block-maps-text__warning">
                        * Все расстояния измерены по прямой. Фактическая
                        дистанция может отличаться.
                    </p>
                </div>
            </div>

            <div
                className="objects-new-block-maps-map"
                style={{backgroundImage: `url('${MapImage}')`}}
            >
                <button className="btn objects-new-block-maps-map__btn">
                    Метки и отель на карте
                </button>
            </div>
        </div>
    );
};

export default ObjectPageMaps;

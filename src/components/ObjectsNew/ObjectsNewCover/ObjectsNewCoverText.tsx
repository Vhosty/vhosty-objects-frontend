import React from "react";
import {Link} from "react-router-dom";

const ObjectsNewCoverText: React.FC = () => {
    return (
        <div className="objects-new-cover-text">
            <div className="objects-new-cover-text-description">
                <h2 className="objects-new-cover-text-description__title">
                    Главная информация
                </h2>
                <p className="objects-new-cover-text-description__subtitle">
                    Наименование объекта, количество звезд, местоположение
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
    );
};

export default ObjectsNewCoverText;

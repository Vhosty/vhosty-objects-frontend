import React from "react";

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

                <button className="btn-line objects-new-cover-text-description__btn">
                    Добавить информацию
                </button>
            </div>
            <div className="objects-new-cover-text-feedbacks"></div>
        </div>
    );
};

export default ObjectsNewCoverText;

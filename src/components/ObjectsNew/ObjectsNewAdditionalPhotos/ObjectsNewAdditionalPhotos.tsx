import React from "react";

import ObjectsNewAdditionalPhotosImg from "../../../assets/images/objects-new-additional-photos.png";

const ObjectsNewAdditionalPhotos: React.FC = () => {
    return (
        <div className="objects-new-additional-photos">
            <img
                src={ObjectsNewAdditionalPhotosImg}
                className="objects-new-additional-photos__img"
            ></img>
            <div className="objects-new-additional-photos-text">
                <h3 className="objects-new-additional-photos-text__title">
                    Дополнительные фотографии
                </h3>

                <p className="objects-new-additional-photos-text__subtitle">
                    Больше фотографий объекта, чтобы пользователь получил больше
                    информации о внешнем виде
                </p>

                <button className="btn-line objects-new-additional-photos-text__btn">
                    Загрузить фото
                </button>
            </div>
        </div>
    );
};

export default ObjectsNewAdditionalPhotos;

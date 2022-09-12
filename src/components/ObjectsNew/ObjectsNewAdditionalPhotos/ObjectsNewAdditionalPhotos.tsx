import React from "react";
import {useDispatch} from "react-redux";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

import {uploadObjectByIdAdditionalImage} from "../../../redux/actions/objects_new/objects_new";

import ObjectsNewAdditionalPhotosImg from "../../../assets/images/objects-new-additional-photos.png";

const ObjectsNewAdditionalPhotos: React.FC = () => {
    const dispatch = useDispatch();

    const {itemById} = useTypedSelector(({objects_new}) => objects_new);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            dispatch(
                uploadObjectByIdAdditionalImage(
                    e.target.files,
                    itemById,
                    itemById.id
                ) as any
            );
        }
    };

    return (
        <div className="objects-new-additional-photos">
            <img
                src={ObjectsNewAdditionalPhotosImg}
                className="objects-new-additional-photos__img"
            />

            <div className="objects-new-additional-photos-text">
                <h3 className="objects-new-additional-photos-text__title">
                    Дополнительные фотографии
                </h3>
                <p className="objects-new-additional-photos-text__subtitle">
                    Больше фотографий объекта, чтобы пользователь получил больше
                    информации о внешнем виде
                </p>

                <input
                    id="objects-new-additional-photos"
                    type="file"
                    accept=".png, .jpg, .jpeg"
					onChange={onChange}
					multiple
                />

                <label
                    htmlFor="objects-new-additional-photos"
                    className="btn-line objects-new-additional-photos-text__btn"
                >
                    Загрузить фото
                </label>
            </div>
        </div>
    );
};

export default ObjectsNewAdditionalPhotos;

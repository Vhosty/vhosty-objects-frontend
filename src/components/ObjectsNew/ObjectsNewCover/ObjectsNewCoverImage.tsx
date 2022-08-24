import React from "react";
import {useDispatch} from "react-redux";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

import {uploadObjectByIdCoverImage} from "../../../redux/actions/objects_new/objects_new";

const ObjectsNewCoverImage: React.FC = () => {
    const dispatch = useDispatch();

    const {itemById} = useTypedSelector(({objects_new}) => objects_new);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const data = new FormData();

        if (e.target.files) {
            data.append("uploading_file", e.target.files[0]);

            dispatch(
                uploadObjectByIdCoverImage(data, itemById.id, itemById) as any
            );
        }
    };

    return (
        <div className="objects-new-cover-image">
            <svg
                width="216"
                height="168"
                viewBox="0 0 216 168"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M200.256 22.501H143.081L131.535 3.1051C130.406 1.20873 128.362 0.046875 126.155 0.046875H89.8433C87.6362 0.046875 85.5922 1.20873 84.4634 3.1051L72.918 22.501H54.156V18.2261C54.156 14.7687 51.353 11.9656 47.8955 11.9656H24.7308C21.2726 11.9656 18.4702 14.7687 18.4702 18.2261V22.501H15.7431C7.04776 22.501 0 29.5495 0 38.2434V152.226C0 160.921 7.04776 167.969 15.7424 167.969H200.256C208.951 167.969 215.999 160.921 215.999 152.226V38.2434C216 29.5495 208.951 22.501 200.256 22.501ZM107.999 140.045C83.251 140.045 63.1887 119.983 63.1887 95.2341C63.1887 70.4865 83.251 50.4235 107.999 50.4235C132.748 50.4235 152.81 70.4865 152.81 95.2341C152.81 119.983 132.748 140.045 107.999 140.045ZM190.434 54.9571H170.817C167.359 54.9571 164.556 52.154 164.556 48.6959C164.556 45.2377 167.359 42.4346 170.817 42.4346H190.434C193.893 42.4346 196.695 45.2377 196.695 48.6959C196.695 52.154 193.892 54.9571 190.434 54.9571Z"
                    fill="white"
                    fillOpacity="0.7"
                />
                <path
                    d="M108.024 126.539C125.313 126.539 139.328 112.524 139.328 95.2345C139.328 77.9453 125.313 63.9297 108.024 63.9297C90.7344 63.9297 76.7188 77.9453 76.7188 95.2345C76.7188 112.524 90.7344 126.539 108.024 126.539Z"
                    fill="white"
                    fillOpacity="0.7"
                />
            </svg>
            <div className="objects-new-cover-image-text">
                <h2 className="objects-new-cover-image-text__title">
                    Обложка объекта
                </h2>

                <p className="objects-new-cover-image-text__subtitle">
                    Самая эффектная фотография вашего объекта, встречающая
                    пользователей на главном экране
                </p>

                <input
                    id="objects-new-cover-image"
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    onChange={onChange}
                />

                <label
                    htmlFor="objects-new-cover-image"
                    className="btn-line objects-new-cover-image-text__btn"
                >
                    Загрузить фото
                </label>
            </div>
        </div>
    );
};

export default ObjectsNewCoverImage;

import React from "react";
import {useDispatch} from "react-redux";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

import {
    uploadObjectByIdCoverImage,
    updateObjectByIdCoverImage,
} from "../../../redux/actions/objects_new/objects_new";

interface ObjectsNewCoverImageFilledProps {
    background_images: {
        id: string;
        url: string;
    }[];
}

const ObjectsNewCoverImageFilled: React.FC<ObjectsNewCoverImageFilledProps> = ({
    background_images,
}) => {
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

    const deleteAllImages = () => {
        dispatch(
            updateObjectByIdCoverImage(itemById.id, {
                ...itemById,
                background_images: [],
            }) as any
        );
    };

    const deleteImage = (id: string) => {
        dispatch(
            updateObjectByIdCoverImage(
                {
                    ...itemById,
                    background_images: itemById.background_images.filter(
                        (image: any) => image.id !== id
                    ),
                },
                itemById.id
            ) as any
        );
    };

    return (
        <div className="container">
            <div className="objects-new-filled-cover-image">
                <div className="objects-new-filled-cover-image-btn-wrapper">
                    <label
                        htmlFor="objects-new-filled-cover-image"
                        className="objects-new-filled-cover-image-btn"
                    >
                        {background_images.length < 5 ? (
                            <input
                                id="objects-new-filled-cover-image"
                                type="file"
                                accept=".png, .jpg, .jpeg"
                                onChange={onChange}
                            />
                        ) : null}

                        <svg
                            width="100"
                            height="78"
                            viewBox="0 0 100 78"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M92.7112 10.5282H66.241L60.8959 1.54866C60.373 0.670709 59.427 0.132812 58.4052 0.132812H41.5941C40.5723 0.132812 39.626 0.670709 39.1034 1.54866L33.7583 10.5282H25.0722V8.54912C25.0722 6.94845 23.7745 5.65073 22.1738 5.65073H11.4494C9.84842 5.65073 8.55103 6.94845 8.55103 8.54912V10.5282H7.28845C3.26285 10.5282 0 13.7914 0 17.8164V70.5862C0 74.6115 3.26285 77.8747 7.28813 77.8747H92.7112C96.7365 77.8747 99.9997 74.6115 99.9997 70.5862V17.8164C100 13.7914 96.7365 10.5282 92.7112 10.5282ZM49.9997 64.9469C38.5421 64.9469 29.254 55.6589 29.254 44.201C29.254 32.7437 38.5421 23.4553 49.9997 23.4553C61.4572 23.4553 70.7453 32.7437 70.7453 44.201C70.7453 55.6589 61.4572 64.9469 49.9997 64.9469ZM88.164 25.5542H79.0819C77.4812 25.5542 76.1835 24.2565 76.1835 22.6555C76.1835 21.0545 77.4812 19.7568 79.0819 19.7568H88.164C89.7653 19.7568 91.0627 21.0545 91.0627 22.6555C91.0627 24.2565 89.765 25.5542 88.164 25.5542Z"
                                fill="white"
                            />
                            <path
                                d="M50.0125 58.6929C58.0167 58.6929 64.5054 52.2042 64.5054 44.2C64.5054 36.1957 58.0167 29.707 50.0125 29.707C42.0082 29.707 35.5195 36.1957 35.5195 44.2C35.5195 52.2042 42.0082 58.6929 50.0125 58.6929Z"
                                fill="white"
                            />
                        </svg>

                        {background_images.length < 5 ? (
                            <p className="objects-new-filled-cover-image-btn__btn">
                                Загрузить еще фото
                            </p>
                        ) : (
                            <p className="objects-new-filled-cover-image-btn__text">
                                Нельзя загрузить более 5 фото. Удалите фото в
                                правом нижнем углу, чтобы загрузить новые.
                            </p>
                        )}
                    </label>

                    <div
                        className="objects-new-filled-cover-image-btn"
                        onClick={deleteAllImages}
                    >
                        <svg
                            width="68"
                            height="84"
                            viewBox="0 0 68 84"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4.83594 75.332C4.83594 79.9363 9.18656 83.6654 14.5582 83.6654H53.4472C58.8187 83.6654 63.1693 79.9363 63.1693 75.332V25.332H4.83594V75.332Z"
                                fill="white"
                            />
                            <path
                                d="M50.6681 5.8875L45.906 0.332031H22.0966L17.3345 5.8875H0.667969V16.9987H67.3346V5.8875H50.6681Z"
                                fill="white"
                            />
                        </svg>

                        <button className="objects-new-filled-cover-image-btn__btn">
                            Удалить все фотографии
                        </button>
                    </div>
                </div>

                <div className="objects-new-filled-cover-image-catalog">
                    {background_images.map((image, index) => (
                        <div
                            className="objects-new-filled-cover-image-catalog-item"
                            key={`objects-new-filled-cover-image-catalog-item-${index}`}
                            style={{backgroundImage: `url('${image.url}')`}}
                        >
							<div className="objects-new-filled-cover-image-catalog-item-plaecholder"></div>
							
                            <div
                                className="objects-new-filled-cover-image-catalog-item-icon"
                                onClick={() => deleteImage(image.id)}
                            >
                                <svg
                                    width="14"
                                    height="18"
                                    viewBox="0 0 14 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M1.16406 15.668C1.16406 16.5888 2.03419 17.3346 3.10852 17.3346H10.8863C11.9606 17.3346 12.8307 16.5888 12.8307 15.668V5.66797H1.16406V15.668Z" />
                                    <path d="M10.3321 1.77906L9.37964 0.667969H4.61776L3.66534 1.77906H0.332031V4.0013H13.6654V1.77906H10.3321Z" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ObjectsNewCoverImageFilled;

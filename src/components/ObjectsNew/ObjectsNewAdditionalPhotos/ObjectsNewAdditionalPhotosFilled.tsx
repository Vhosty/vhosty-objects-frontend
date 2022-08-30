import React from "react";
import {useDispatch} from "react-redux";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

import {
    uploadObjectByIdAdditionalImage,
    updateObjectByIdAdditionalImage,
} from "../../../redux/actions/objects_new/objects_new";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

interface ObjectsNewAdditionalPhotosFilledProps {
    images: {
        id: string;
        url: string;
    }[];
}

const ObjectsNewAdditionalPhotosFilled: React.FC<
    ObjectsNewAdditionalPhotosFilledProps
> = ({images}) => {
    const setting = {
        items: 4,
        dots: false,
        margin: 20,
        id: "objects-new-filled-slider-images",
        autoWidth: true,
    };

    const sliderRef = React.useRef<any>(null);

    const onClickPrev = () => {
        sliderRef.current?.prev();
    };

    const onClickNext = () => {
        sliderRef.current?.next();
    };

    const dispatch = useDispatch();

    const {itemById} = useTypedSelector(({objects_new}) => objects_new);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const data = new FormData();

        if (e.target.files) {
            data.append("uploading_file", e.target.files[0]);

            dispatch(
                uploadObjectByIdAdditionalImage(
                    data,
                    itemById.id,
                    itemById
                ) as any
            );
        }
    };

    const deleteImage = (id: string) => {
        dispatch(
            updateObjectByIdAdditionalImage(
                {
                    ...itemById,
                    images: itemById.images.filter(
                        (image: any) => image.id !== id
                    ),
                },
                itemById.id
            ) as any
        );
    };

    return (
        <div className="objects-new-filled-slider-images">
            <button
                className="objects-new-filled-slider-images__btn prev"
                onClick={onClickPrev}
            >
                <svg
                    width="9"
                    height="16"
                    viewBox="0 0 9 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M8 1L2.41421 6.58579C1.63316 7.36684 1.63316 8.63316 2.41421 9.41421L8 15"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
            </button>

            <button
                className="objects-new-filled-slider-images__btn next"
                onClick={onClickNext}
            >
                <svg
                    width="9"
                    height="16"
                    viewBox="0 0 9 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M1 15L6.58579 9.41421C7.36684 8.63316 7.36684 7.36684 6.58579 6.58579L1 1"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
            </button>

            <OwlCarousel
                {...setting}
                ref={sliderRef}
                key={`objects-new-filled-slider-images-carousel-${Date.now()}`}
            >
                <label
                    htmlFor="objects-new-filled-slider-images-item-add"
                    className="objects-new-filled-slider-images-item-add"
                >
                    <input
                        id="objects-new-filled-slider-images-item-add"
                        type="file"
                        accept=".png, .jpg, .jpeg"
                        onChange={onChange}
                    />

                    <svg
                        width="70"
                        height="56"
                        viewBox="0 0 70 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M64.8979 8.06977H46.3687L42.6271 1.78406C42.2611 1.1695 41.5989 0.792969 40.8837 0.792969H29.1159C28.4006 0.792969 27.7382 1.1695 27.3724 1.78406L23.6308 8.06977H17.5506V6.68439C17.5506 5.56391 16.6422 4.65551 15.5217 4.65551H8.0146C6.8939 4.65551 5.98572 5.56391 5.98572 6.68439V8.06977H5.10192C2.284 8.06977 0 10.354 0 13.1715V50.1104C0 52.9281 2.284 55.2123 5.10169 55.2123H64.8979C67.7155 55.2123 69.9998 52.9281 69.9998 50.1104V13.1715C70 10.354 67.7155 8.06977 64.8979 8.06977ZM34.9998 46.1629C26.9795 46.1629 20.4778 39.6612 20.4778 31.6407C20.4778 23.6206 26.9795 17.1187 34.9998 17.1187C43.0201 17.1187 49.5217 23.6206 49.5217 31.6407C49.5217 39.6612 43.0201 46.1629 34.9998 46.1629ZM61.7148 18.5879H55.3573C54.2369 18.5879 53.3284 17.6795 53.3284 16.5588C53.3284 15.4381 54.2369 14.5297 55.3573 14.5297H61.7148C62.8357 14.5297 63.7439 15.4381 63.7439 16.5588C63.7439 17.6795 62.8355 18.5879 61.7148 18.5879Z"
                            fill="white"
                            fillOpacity="0.7"
                        />
                        <path
                            d="M35.0083 41.7862C40.6113 41.7862 45.1534 37.2441 45.1534 31.6412C45.1534 26.0382 40.6113 21.4961 35.0083 21.4961C29.4054 21.4961 24.8633 26.0382 24.8633 31.6412C24.8633 37.2441 29.4054 41.7862 35.0083 41.7862Z"
                            fill="white"
                            fillOpacity="0.7"
                        />
                    </svg>
                </label>

                {images.map((image, index) => (
                    <div
                        className="objects-new-filled-slider-images-item"
                        style={{
                            backgroundImage: `url('${image.url}')`,
                        }}
                        key={`objects-new-filled-slider-images-item-${index}`}
                    >
                        <div className="objects-new-filled-slider-images-item-plaecholder"></div>

                        <div
                            className="objects-new-filled-slider-images-item-icon"
                            onClick={() => deleteImage(image.id)}
                        >
                            <svg
                                width="16"
                                height="20"
                                viewBox="0 0 16 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M1 18C1 19.105 2.04415 20 3.33335 20H12.6667C13.9559 20 15 19.105 15 18V6H1V18Z" />
                                <path d="M12 1.33331L10.8571 0H5.14287L3.99997 1.33331H0V4H16V1.33331H12Z" />
                            </svg>
                        </div>
                    </div>
                ))}
            </OwlCarousel>
        </div>
    );
};

export default ObjectsNewAdditionalPhotosFilled;

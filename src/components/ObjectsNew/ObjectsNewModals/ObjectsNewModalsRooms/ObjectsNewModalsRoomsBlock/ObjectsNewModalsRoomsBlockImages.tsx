import React from "react";
import {useDispatch} from "react-redux";
import {WrappedFieldProps, change} from "redux-form";

interface ObjectsNewModalsRoomsBlockImagesProps extends WrappedFieldProps {
    values: any;
}

const ObjectsNewModalsRoomsBlockImages: React.FC<
    ObjectsNewModalsRoomsBlockImagesProps
> = ({input: {value: omitValue, onChange, ...input}, values, meta: {form}}) => {
    const dispatch = useDispatch();

    const [imagesBase, setImagesBase] = React.useState<
        {id: string; url: string}[]
    >([]);

    React.useEffect(() => {
        if (values.images) {
            const images: {id: string; url: string}[] = [];

            values.images.map((image: any) => {
                if (!image.id) {
                    images.push({
                        id: "",
                        url: URL.createObjectURL(image),
                    });
                } else {
                    images.push({
                        id: image.id,
                        url: image.url,
                    });
                }
            });

            setImagesBase(images);
        }
    }, [values.images]);

    React.useEffect(() => {
        if (values.images) setImagesBase(values.images);
    }, []);

    const adaptFileEventToValue = (delegate: any) => (e: any) => {
        if (e.target.files) {
            if (values.images) {
                delegate([...values.images, ...e.target.files]);
            } else {
                delegate([...e.target.files]);
            }
        }
    };

    const deleteFile = (indexDelete: number) => {
        if (values.images) {
            dispatch(
                change(
                    form,
                    input.name,
                    values.images.filter(
                        (_: any, index: number) => index !== indexDelete
                    )
                )
            );
        }
    };

    return (
        <div className="objects-new-modal-content-big-rooms-block-images">
            <input
                {...input}
                id={`objects-new-modal-content-big-rooms-block-images-${input.name}`}
                type="file"
                accept=".png, .jpg, .jpeg"
                onChange={adaptFileEventToValue(onChange)}
                multiple
            />

            <label
                htmlFor={`objects-new-modal-content-big-rooms-block-images-${input.name}`}
                className="objects-new-modal-content-big-rooms-block-images__btn"
            >
                <svg
                    width="95"
                    height="95"
                    viewBox="0 0 95 95"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        width="95"
                        height="95"
                        rx="20"
                        fill="#00A0A0"
                        fillOpacity="0.2"
                    />
                    <path
                        d="M65.9387 36.0419H54.8212L52.5763 32.2704C52.3567 31.9017 51.9593 31.6758 51.5302 31.6758H44.4695C44.0404 31.6758 43.6429 31.9017 43.4234 32.2704L41.1785 36.0419H37.5303V35.2106C37.5303 34.5383 36.9853 33.9933 36.313 33.9933H31.8088C31.1363 33.9933 30.5914 34.5383 30.5914 35.2106V36.0419H30.0612C28.3704 36.0419 27 37.4124 27 39.1029V61.2662C27 62.9568 28.3704 64.3274 30.061 64.3274H65.9387C67.6293 64.3274 68.9999 62.9568 68.9999 61.2662V39.1029C69 37.4124 67.6293 36.0419 65.9387 36.0419ZM47.9999 58.8977C43.1877 58.8977 39.2867 54.9967 39.2867 50.1844C39.2867 45.3724 43.1877 41.4712 47.9999 41.4712C52.812 41.4712 56.713 45.3724 56.713 50.1844C56.713 54.9967 52.812 58.8977 47.9999 58.8977ZM64.0289 42.3528H60.2144C59.5421 42.3528 58.9971 41.8077 58.9971 41.1353C58.9971 40.4629 59.5421 39.9178 60.2144 39.9178H64.0289C64.7014 39.9178 65.2463 40.4629 65.2463 41.1353C65.2463 41.8077 64.7013 42.3528 64.0289 42.3528Z"
                        fill="white"
                        fillOpacity="0.7"
                    />
                    <path
                        d="M48.005 56.2717C51.3668 56.2717 54.092 53.5465 54.092 50.1847C54.092 46.8229 51.3668 44.0977 48.005 44.0977C44.6432 44.0977 41.918 46.8229 41.918 50.1847C41.918 53.5465 44.6432 56.2717 48.005 56.2717Z"
                        fill="white"
                        fillOpacity="0.7"
                    />
                </svg>

                <span>Загрузить фото</span>
            </label>

            <div className="objects-new-modal-content-big-rooms-block-images-catalog">
                {imagesBase.map((image, index) => (
                    <div
                        key={`objects-new-modal-content-big-rooms-block-images-catalog-item-${index}`}
                        className="objects-new-modal-content-big-rooms-block-images-catalog-item"
                        style={{backgroundImage: `url('${image.url}')`}}
                    >
                        <div className="objects-new-modal-content-big-rooms-block-images-catalog-item-plaecholder"></div>

                        <div
                            className="objects-new-modal-content-big-rooms-block-images-catalog-item-icon"
                            onClick={() => deleteFile(index)}
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
    );
};

export default ObjectsNewModalsRoomsBlockImages;

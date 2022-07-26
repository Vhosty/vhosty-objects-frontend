import React from "react";
import {Link} from "react-router-dom";

import {Checkbox} from "../../";

interface CabinetObjectsItemProps {
    hotel: any;
    room_categories: any;
    price_max: number;
    price_min: number;

    isSelected: boolean;

    setObjectsDeleteIdsOnClick: (id: {
        hotel_id: number;
        room_category_id: string;
    }) => void;
}

const CabinetObjectsItem: React.FC<CabinetObjectsItemProps> = ({
    hotel: {address, background_images, booking_type, id, name, status},
    room_categories,
    price_max,
    price_min,
    isSelected,
    setObjectsDeleteIdsOnClick,
}) => {
    return (
        <div
            className={`cabinet-block-objects-item ${
                isSelected ? "selected" : ""
            }`}
        >
            <div className="cabinet-block-objects-item-block-checkbox">
                <Checkbox
                    checked={isSelected}
                    onClick={() =>
                        setObjectsDeleteIdsOnClick({
                            hotel_id: id,
                            room_category_id: room_categories.id,
                        })
                    }
                >
                    <></>
                </Checkbox>
            </div>

            <div className="cabinet-block-objects-item-block-object">
                <div
                    className="cabinet-block-objects-item-block-object-cover"
                    style={{
                        backgroundImage: `url(${
                            background_images[0] && background_images[0].url
                        })`,
                    }}
                >
                    <div className="cabinet-block-objects-item-block-object-cover-icon">
                        <svg
                            width="14"
                            height="11"
                            viewBox="0 0 14 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12.9796 1.45536H9.27374L8.52543 0.198218C8.45222 0.0753055 8.31978 0 8.17673 0H5.82317C5.68013 0 5.54765 0.0753055 5.47448 0.198218L4.72616 1.45536H3.51011V1.17828C3.51011 0.954189 3.32843 0.772508 3.10434 0.772508H1.60292C1.37878 0.772508 1.19714 0.954189 1.19714 1.17828V1.45536H1.02038C0.456799 1.45536 0 1.91221 0 2.4757V9.86348C0 10.427 0.456799 10.8839 1.02034 10.8839H12.9796C13.5431 10.8839 14 10.427 14 9.86348V2.4757C14 1.91221 13.5431 1.45536 12.9796 1.45536ZM6.99995 9.07398C5.3959 9.07398 4.09557 7.77365 4.09557 6.16954C4.09557 4.56553 5.3959 3.26515 6.99995 3.26515C8.60401 3.26515 9.90434 4.56553 9.90434 6.16954C9.90434 7.77365 8.60401 9.07398 6.99995 9.07398ZM12.343 3.559H11.0715C10.8474 3.559 10.6657 3.37732 10.6657 3.15318C10.6657 2.92904 10.8474 2.74735 11.0715 2.74735H12.343C12.5671 2.74735 12.7488 2.92904 12.7488 3.15318C12.7488 3.37732 12.5671 3.559 12.343 3.559Z"
                                fill="white"
                                fillOpacity="0.7"
                            />
                            <path
                                d="M7.00167 8.19865C8.12226 8.19865 9.03068 7.29023 9.03068 6.16964C9.03068 5.04905 8.12226 4.14062 7.00167 4.14062C5.88108 4.14062 4.97266 5.04905 4.97266 6.16964C4.97266 7.29023 5.88108 8.19865 7.00167 8.19865Z"
                                fill="white"
                                fillOpacity="0.7"
                            />
                        </svg>
                    </div>

                    <div className="cabinet-block-objects-item-block-object-cover-plaecholder"></div>
                </div>
                <div className="cabinet-block-objects-item-block-object-text">
                    <p className="cabinet-block-objects-item-block-object-text__title">
                        {name !== "" ? name : "Без имени"}
                    </p>

                    <Link
                        to={`/objects/new/${id}`}
                        className="btn-line cabinet-block-objects-item-block-object-text__link"
                    >
                        Редактировать объект
                    </Link>
                </div>
            </div>
            <div className="cabinet-block-objects-item-block-status">
                {status === "created" ? (
                    <>
                        <svg
                            viewBox="0 0 20 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M18.75 0.25H1.25C0.559648 0.25 0 0.809687 0 1.5V4H20V1.5C20 0.809687 19.4404 0.25 18.75 0.25Z"
                                fill="#253021"
                            />
                            <path
                                d="M1.25 16.5003C1.25 17.1903 1.80957 17.75 2.4998 17.75H17.5002C18.1905 17.75 18.75 17.1903 18.75 16.5003V5.25H1.25V16.5003ZM8.125 7.75H11.875C12.5654 7.75 13.125 8.30969 13.125 9C13.125 9.69031 12.5654 10.25 11.875 10.25H8.125C7.43465 10.25 6.875 9.69031 6.875 9C6.875 8.30969 7.43465 7.75 8.125 7.75Z"
                                fill="#253021"
                            />
                        </svg>

                        <p className="cabinet-block-objects-item-block-status__title">
                            В архиве
                        </p>
                    </>
                ) : null}

                {/* <>
                    <svg
                        viewBox="0 0 15 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M14.1667 4.02305V2.2682C14.6624 1.97918 15 1.44762 15 0.83332V0.41668C15 0.186367 14.8136 0 14.5833 0H0.41668C0.186367 0 0 0.186367 0 0.41668V0.833359C0 1.44762 0.337578 1.97918 0.83332 2.26824V4.02305C0.83332 5.67426 1.53727 7.25465 2.76449 8.35898L4.58781 10L2.76449 11.641C1.53727 12.7454 0.83332 14.3257 0.83332 15.977V17.7318C0.337578 18.0208 0 18.5524 0 19.1667V19.5834C0 19.8136 0.186367 20 0.41668 20H14.5834C14.8137 20 15 19.8136 15 19.5833V19.1666C15 18.5524 14.6625 18.0208 14.1667 17.7318V15.977C14.1667 14.3257 13.4628 12.7454 12.2355 11.641L10.4122 10L12.2355 8.35898C13.4627 7.25465 14.1667 5.67422 14.1667 4.02305ZM11.1206 7.12035L8.60922 9.3807C8.43344 9.53859 8.33332 9.76359 8.33332 10C8.33332 10.2364 8.43344 10.4614 8.60922 10.6193L11.1206 12.8796C11.9971 13.6686 12.5 14.7978 12.5 15.977V17.5H11.4581L7.83324 12.6668C7.67617 12.4569 7.32379 12.4569 7.16672 12.6668L3.54187 17.5H2.5V15.977C2.5 14.7977 3.00293 13.6686 3.87941 12.8796L6.39082 10.6193C6.5666 10.4614 6.66672 10.2364 6.66672 9.99996C6.66672 9.76355 6.5666 9.53852 6.39082 9.38066L3.87941 7.12031C3.00293 6.33137 2.5 5.20223 2.5 4.02305V2.5H12.5V4.02305C12.5 5.20223 11.9971 6.33137 11.1206 7.12035Z"
                            fill="#253021"
                        />
                        <path
                            d="M10.3718 5.83203H4.62755C4.46275 5.83203 4.31341 5.9293 4.2467 6.07984C4.17998 6.23082 4.20802 6.4066 4.31912 6.52867L7.22033 9.20527C7.29966 9.27731 7.39978 9.31309 7.49986 9.31309C7.59994 9.31309 7.70006 9.27727 7.77939 9.20527L10.6802 6.52867C10.7913 6.4066 10.8194 6.23082 10.7526 6.07984C10.6859 5.9293 10.5366 5.83203 10.3718 5.83203Z"
                            fill="#253021"
                        />
                    </svg>
                    <p className="cabinet-block-objects-item-block-status__title">
                        Проверка
                    </p>
                </> */}
            </div>
            <div className="cabinet-block-objects-item-block-reserv">
                {booking_type === "" ? (
                    <>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.99998 0.833496C4.93748 0.833496 0.833313 4.93766 0.833313 10.0002C0.833313 15.0627 4.93748 19.1668 9.99998 19.1668C15.0625 19.1668 19.1666 15.0627 19.1666 10.0002C19.1666 4.93766 15.0625 0.833496 9.99998 0.833496ZM13.9733 8.45016C14.0465 8.36653 14.1022 8.26911 14.1371 8.16364C14.1721 8.05816 14.1856 7.94676 14.1769 7.83598C14.1681 7.72521 14.1373 7.6173 14.0863 7.5186C14.0352 7.41991 13.965 7.33242 13.8796 7.26128C13.7942 7.19015 13.6955 7.1368 13.5892 7.10438C13.4829 7.07197 13.3713 7.06113 13.2607 7.07252C13.1502 7.08391 13.043 7.11729 12.9456 7.17069C12.8482 7.2241 12.7624 7.29645 12.6933 7.3835L9.10998 11.6827L7.25581 9.82766C7.09864 9.67587 6.88814 9.59187 6.66965 9.59377C6.45115 9.59567 6.24214 9.68331 6.08763 9.83781C5.93312 9.99232 5.84548 10.2013 5.84358 10.4198C5.84169 10.6383 5.92568 10.8488 6.07748 11.006L8.57748 13.506C8.65936 13.5878 8.75739 13.6517 8.86533 13.6935C8.97326 13.7354 9.08873 13.7543 9.20437 13.749C9.32001 13.7438 9.43329 13.7145 9.53699 13.663C9.64069 13.6116 9.73252 13.5391 9.80665 13.4502L13.9733 8.45016Z"
                                fill="#1C952F"
                            />
                        </svg>

                        <p className="cabinet-block-objects-item-block-reserv__title">
                            Мгновенное
                        </p>
                    </>
                ) : (
                    <>
                        <svg
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M11 0C4.925 0 0 4.925 0 11C0 17.075 4.925 22 11 22C17.075 22 22 17.075 22 11C22 4.925 17.075 0 11 0ZM15.768 9.14C15.8558 9.03964 15.9226 8.92274 15.9646 8.79617C16.0065 8.6696 16.0227 8.53591 16.0123 8.40298C16.0018 8.27005 15.9648 8.14056 15.9036 8.02213C15.8423 7.90369 15.758 7.79871 15.6555 7.71334C15.5531 7.62798 15.4346 7.56396 15.3071 7.52506C15.1796 7.48616 15.0455 7.47316 14.9129 7.48683C14.7802 7.50049 14.6517 7.54055 14.5347 7.60463C14.4178 7.66872 14.3149 7.75554 14.232 7.86L9.932 13.019L7.707 10.793C7.5184 10.6108 7.2658 10.51 7.0036 10.5123C6.7414 10.5146 6.49059 10.6198 6.30518 10.8052C6.11977 10.9906 6.0146 11.2414 6.01233 11.5036C6.01005 11.7658 6.11084 12.0184 6.293 12.207L9.293 15.207C9.39126 15.3052 9.50889 15.3818 9.63842 15.4321C9.76794 15.4823 9.9065 15.505 10.0453 15.4986C10.184 15.4923 10.32 15.4572 10.4444 15.3954C10.5688 15.3337 10.6791 15.2467 10.768 15.14L15.768 9.14Z"
                                fill="#253021"
                                fillOpacity="0.5"
                            />
                        </svg>

                        <p className="cabinet-block-objects-item-block-reserv__title">
                            С подтверждением
                        </p>
                    </>
                )}
            </div>
            <div className="cabinet-block-objects-item-block-price">
                <p className="cabinet-block-objects-item-block-price__title">
                    {/* {price} */}
                    от {price_min}₽ до {price_max}₽
                </p>
            </div>
            <div className="cabinet-block-objects-item-block-location">
                <p className="cabinet-block-objects-item-block-location__title">
                    {address}
                </p>
            </div>
        </div>
    );
};

export default CabinetObjectsItem;

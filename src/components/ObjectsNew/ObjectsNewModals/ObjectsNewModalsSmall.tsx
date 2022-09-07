import React from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import {setObjectsNewModalsClose} from "../../../redux/actions/objects_new/objects_new_modals";

interface ObjectsNewModalsSmallProps {
    title: string;
    description: string;

    children: React.ReactNode;

    fullWidth?: boolean;
}

const ObjectsNewModalsSmall: React.FC<ObjectsNewModalsSmallProps> = ({
    title,
    description,
    children,
    fullWidth,
}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const PopupRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        document.addEventListener("mousedown", toggleObjectsNewModals);
        document.addEventListener("touchstart", toggleObjectsNewModals);

        return () => {
            document.removeEventListener("mousedown", toggleObjectsNewModals);
            document.removeEventListener("touchstart", toggleObjectsNewModals);
        };
    }, [PopupRef]);

    const closeFunc = () => {
        dispatch(setObjectsNewModalsClose() as any);

        navigate({
            pathname: window.location.pathname,
            search: ``,
            hash: "",
        });
    };

    const toggleObjectsNewModals = (e: any) => {
        if (PopupRef.current && !PopupRef.current.contains(e.target)) {
            closeFunc();
        }
    };

    return (
        <div
            className={`objects-new-modal-content ${
                fullWidth ? "fullWidth" : ""
            }`}
            ref={PopupRef}
        >
            <div
                className="objects-new-modal-content-close"
                onClick={closeFunc}
            >
                <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M24.25 13C24.25 6.78906 19.2109 1.75 13 1.75C6.78906 1.75 1.75 6.78906 1.75 13C1.75 19.2109 6.78906 24.25 13 24.25C19.2109 24.25 24.25 19.2109 24.25 13Z"
                        stroke="#00A0A0"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                    />
                    <path
                        d="M9.25 16.75L16.75 9.25M16.75 16.75L9.25 9.25L16.75 16.75Z"
                        stroke="#00A0A0"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>

            <div className="objects-new-modal-content-text">
                <h2 className="objects-new-modal-content-text__title">
                    {title}
                </h2>
                <p className="objects-new-modal-content-text__description">
                    {description}
                </p>
            </div>
            {children}
            <div className="objects-new-modal-content-btn">
                <button
                    type="button"
                    className="btn-line gray objects-new-modal-content-btn__cancel"
                    onClick={closeFunc}
                >
                    Отменить изменения
                </button>

                <button
                    type="submit"
                    className="btn small objects-new-modal-content-btn__save"
                >
                    Сохранить
                </button>
            </div>
        </div>
    );
};

export default ObjectsNewModalsSmall;

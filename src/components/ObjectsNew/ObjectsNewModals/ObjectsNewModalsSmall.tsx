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
                <button className="btn-line gray objects-new-modal-content-btn__cancel">
                    Отменить изменения
                </button>

                <button className="btn small objects-new-modal-content-btn__save">
                    Сохранить
                </button>
            </div>
        </div>
    );
};

export default ObjectsNewModalsSmall;

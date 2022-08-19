import React from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import {setObjectsNewModalsClose} from "../../../redux/actions/objects_new/objects_new_modals";

interface ObjectsNewModalsBigProps {
    title: string;
    description: string;

    fullWidth?: boolean;

    children: React.ReactNode;
}

const ObjectsNewModalsBig: React.FC<ObjectsNewModalsBigProps> = ({
    title,
    description,
    fullWidth,
    children,
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

    const top = React.useRef<HTMLDivElement>(null);
    const bottom = React.useRef<HTMLDivElement>(null);

    const [totalHeightContent, setTotalHeightContent] =
        React.useState<number>(0);

    React.useEffect(() => {
        if (PopupRef.current && top.current && bottom.current) {
            setTotalHeightContent(
                PopupRef.current.offsetHeight -
                    top.current.offsetHeight -
                    bottom.current.offsetHeight
            );
        }
    }, []);

    return (
        <div
            className={`objects-new-modal-content-big ${
                fullWidth ? "fullWidth" : ""
            }`}
            ref={PopupRef}
        >
            <div className="objects-new-modal-content-big-top-text" ref={top}>
                <h2 className="objects-new-modal-content-big-top-text__title">
                    {title}
                </h2>
                <p className="objects-new-modal-content-big-top-text__description">
                    {description}
                </p>
            </div>
            <div
                className="objects-new-modal-content-big-scroll-wrapper"
                style={{height: `${totalHeightContent}px`}}
            >
                <div className="objects-new-modal-content-big-scroll">
                    {children}
                </div>
            </div>
            <div
                className="objects-new-modal-content-big-bottom-btn"
                ref={bottom}
            >
                <button
                    type="button"
                    className="btn-line gray objects-new-modal-content-big-bottom-btn__cancel"
                    onClick={closeFunc}
                >
                    Отменить изменения
                </button>

                <button
                    type="submit"
                    className="btn small objects-new-modal-content-big-bottom-btn__save"
                >
                    Сохранить
                </button>
            </div>
        </div>
    );
};

export default ObjectsNewModalsBig;

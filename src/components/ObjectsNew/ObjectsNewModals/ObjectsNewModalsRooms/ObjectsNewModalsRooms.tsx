import React from "react";

import {ObjectsNewModalsRoomsBlock} from "../../../";

const ObjectsNewModalsRooms: React.FC = () => {
    return (
        <div className="objects-new-modal-content-big objects-new-modal-content-big-rooms">
            <div className="objects-new-modal-content-big-top-text">
                <h2 className="objects-new-modal-content-big-top-text__title">
                    Выбор доступного номера
                </h2>
                <p className="objects-new-modal-content-big-top-text__description">
                    Вы можете создать номер и включить в опции/комплектацию как
                    еду, так и условия бронирований.
                </p>
            </div>

            <div className="objects-new-modal-content-big-scroll-wrapper">
                <div className="objects-new-modal-content-big-scroll">
                    <ObjectsNewModalsRoomsBlock />
				</div>
            </div>

            <div className="objects-new-modal-content-big-bottom-btn">
                <button className="btn-line gray objects-new-modal-content-big-bottom-btn__cancel">
                    Отменить изменения
                </button>

                <button className="btn small objects-new-modal-content-big-bottom-btn__save">
                    Сохранить
                </button>
            </div>
        </div>
    );
};

export default ObjectsNewModalsRooms;

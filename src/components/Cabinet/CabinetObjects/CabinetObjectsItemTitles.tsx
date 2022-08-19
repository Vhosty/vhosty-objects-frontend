import React from "react";

import {Checkbox} from "../../";

const CabinetObjectsItemTitles: React.FC = () => {
    return (
        <div className="cabinet-block-objects-titles">
            <div className="cabinet-block-objects-titles-checkbox">
                {/* <Checkbox>
                    <></>
                </Checkbox> */}
            </div>

            <p className="cabinet-block-objects-titles__item object">
                Объявление
            </p>

            <p className="cabinet-block-objects-titles__item status">Статус</p>

            <p className="cabinet-block-objects-titles__item reserv">
                Бронирование
            </p>

            <p className="cabinet-block-objects-titles__item price">
                Цена (Ночь)
            </p>

            <p className="cabinet-block-objects-titles__item location">
                Местоположение
            </p>
        </div>
    );
};

export default CabinetObjectsItemTitles;

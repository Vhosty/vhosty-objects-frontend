import React from "react";
import {Link} from "react-router-dom";

import {useDispatch} from "react-redux";

import {
    CabinetObjectsFilters,
    CabinetObjectsItemTitles,
    CabinetObjectsItem,
} from "../../";

import {fetchUserObjects} from "../../../redux/actions/user/user";

const CabinetObjects: React.FC = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchUserObjects() as any);
    }, []);

    return (
        <div className="cabinet-block cabinet-block-objects">
            <div className="cabinet-block-padding-top">
                <div className="cabinet-block-top">
                    <div className="cabinet-block-top-text">
                        <h2 className="cabinet-block-top-text__title">
                            4 объекта
                        </h2>

                        <p className="cabinet-block-top-text__subtitle">
                            Объекты в Вашем администрировании.
                        </p>
                    </div>

                    <Link
                        to="/objects/new"
                        className="btn cabinet-block-top__likn"
                    >
                        Создать объявление
                    </Link>
                </div>

                <CabinetObjectsFilters />
            </div>

            <div className="cabinet-block-objects-items-wrapper">
                <CabinetObjectsItemTitles />

                {Array(10)
                    .fill(0)
                    .map((item, index) => (
                        <CabinetObjectsItem
                            key={`"cabinet-block-objects-item-${index}`}
                        />
                    ))}
            </div>
        </div>
    );
};

export default CabinetObjects;

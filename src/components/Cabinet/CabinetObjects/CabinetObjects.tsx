import React from "react";
import {Link} from "react-router-dom";

import {useDispatch} from "react-redux";

import {
    CabinetObjectsFilters,
    CabinetObjectsItemTitles,
    CabinetObjectsItem,
} from "../../";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

import {fetchUserObjects} from "../../../redux/actions/user/user";
import {sendCreateObjectNew} from "../../../redux/actions/objects_new/objects_new";

const CabinetObjects: React.FC = () => {
    const dispatch = useDispatch();

    const {user} = useTypedSelector(({user}) => user);

    React.useEffect(() => {
        dispatch(fetchUserObjects() as any);
    }, []);

    const createObject = () => {
        dispatch(
            sendCreateObjectNew({
                name: "",
                description: "",
                address: "",
                background_image: {id: ""},
                city_id: 0,
                images: [],
                contacts: [
                    {
                        email: user.email,
                        phone: user.phone,
                    },
                ],
                stars: 1,
                status: "created",
            }) as any
        );
    };

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

                    {/* <Link
                        to="/objects/new"
                        className="btn small cabinet-block-top__link"
                    >
                        Создать объявление
                    </Link> */}
                    <button
                        className="btn small cabinet-block-top__link"
                        onClick={createObject}
                    >
                        Создать объявление
                    </button>
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

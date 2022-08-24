import React from "react";
import {useDispatch} from "react-redux";

import {
    CabinetObjectsFilters,
    CabinetObjectsDeleteBtn,
    CabinetObjectsItemTitles,
    CabinetObjectsItem,
} from "../../";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

import {
    fetchUserObjects,
    setObjectsDeleteIds,
    setFillObjectsDeleteIds,
} from "../../../redux/actions/user/userObjects";

import {sendCreateObjectNew} from "../../../redux/actions/objects_new/objects_new";

import {checkDeclension} from "../../../functions/checkDeclension";

const CabinetObjects: React.FC = () => {
    const dispatch = useDispatch();

    const {objects, isLoadedObjects, deleteIds} = useTypedSelector(
        ({userObjects}) => userObjects
    );

    React.useEffect(() => {
        dispatch(fetchUserObjects() as any);
    }, []);

    const createObject = () => {
        dispatch(
            sendCreateObjectNew({
                name: "",
                description: "",
                address: "",
                background_images: [],
                city_id: 0,
                images: [],
                contacts: [],
                stars: null,
                status: null,
            }) as any
        );
    };

    const setObjectsDeleteIdsOnClick = (id: {
        hotel_id: number;
        room_category_id: string;
    }) => {
        dispatch(setObjectsDeleteIds(id));
    };

    const setFillObjectsDeleteIdsOnClick = () => {
        if (checkIsAll()) {
            dispatch(setFillObjectsDeleteIds({}));
        } else {
            const newObjects: {
                [key: string]: {
                    hotel_id: number;
                    room_category_id: string;
                };
            } = {};

            objects.map((object: any) => {
                newObjects[object.hotel.id] = {
                    hotel_id: object.hotel.id,
                    room_category_id: object.room_categories.id,
                };
            });

            dispatch(setFillObjectsDeleteIds(newObjects));
        }
    };

    const checkIsAll = () => {
        return objects.length === Object.keys(deleteIds).length;
    };

    return (
        <div className="cabinet-block cabinet-block-objects">
            {isLoadedObjects ? (
                <>
                    <div className="cabinet-block-padding-top">
                        <div className="cabinet-block-top">
                            <div className="cabinet-block-top-text">
                                <h2 className="cabinet-block-top-text__title">
                                    {
                                        checkDeclension(objects.length, [
                                            "объект",
                                            "объекта",
                                            "объектов",
                                        ]).title
                                    }
                                </h2>

                                <p className="cabinet-block-top-text__subtitle">
                                    Объекты в Вашем администрировании.
                                </p>
                            </div>

                            <button
                                className="btn small cabinet-block-top__link"
                                onClick={createObject}
                            >
                                Создать объявление
                            </button>
                        </div>

                        {/* <CabinetObjectsFilters /> */}
                    </div>

                    <div className="cabinet-block-objects-items-wrapper">
                        <CabinetObjectsDeleteBtn />

                        <CabinetObjectsItemTitles
                            isAll={checkIsAll()}
                            setFillObjectsDeleteIdsOnClick={
                                setFillObjectsDeleteIdsOnClick
                            }
                        />

                        {objects.map((object: any, index: any) => (
                            <CabinetObjectsItem
                                {...object}
                                isSelected={
                                    deleteIds[object.hotel.id] ? true : false
                                }
                                setObjectsDeleteIdsOnClick={
                                    setObjectsDeleteIdsOnClick
                                }
                                key={`"cabinet-block-objects-item-${index}`}
                            />
                        ))}
                    </div>
                </>
            ) : null}
        </div>
    );
};

export default CabinetObjects;

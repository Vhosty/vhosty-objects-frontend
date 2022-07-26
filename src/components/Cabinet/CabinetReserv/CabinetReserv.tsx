import React from "react";
import {useDispatch} from "react-redux";

import {
    CabinetReservItemTitle,
    CabinetReservItem,
    CabinetReservFilters,
    CabinetReservEvents,
    CabinetNull,
    Loader,
} from "../../";

import {fetchUserReservs} from "../../../redux/actions/user/userReservs";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

import {checkDeclension} from "../../../functions/checkDeclension";

const CabinetReserv: React.FC = () => {
    const dispatch = useDispatch();

    const {reservs, reservsCreatedCount, isLoadedReservs} = useTypedSelector(
        ({userReservs}) => userReservs
    );

    React.useEffect(() => {
        if (!reservs.length) dispatch(fetchUserReservs() as any);
    }, []);

    return (
        <div className="cabinet-block cabinet-block-reserv">
            <div className="cabinet-block-padding-top">
                <div className="cabinet-block-text">
                    <h2 className="cabinet-block-text__title cabinet-block-reserv-text__title">
                        Бронирования{" "}
                        {reservsCreatedCount ? (
                            <span>
                                {
                                    checkDeclension(reservsCreatedCount, [
                                        "новый",
                                        "новых",
                                        "новый",
                                    ]).title
                                }
                            </span>
                        ) : null}
                    </h2>
                </div>

                {/* <CabinetReservFilters /> */}

                {/* <CabinetReservEvents /> */}
            </div>

            {isLoadedReservs ? (
                <>
                    {reservs.length ? (
                        <div className="cabinet-block-reserv-items-wrapper">
                            <CabinetReservItemTitle />

                            {reservs.map((reserv: any, index: number) => (
                                <CabinetReservItem
                                    {...reserv}
                                    key={`cabinet-block-reserv-item-${index}`}
                                />
                            ))}
                        </div>
                    ) : (
                        <CabinetNull title="Нет бронирований" />
                    )}
                </>
            ) : (
                <Loader />
            )}
        </div>
    );
};

export default CabinetReserv;

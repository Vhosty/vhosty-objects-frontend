import React from "react";
import {useDispatch} from "react-redux";

import {
    CabinetReservItemTitle,
    CabinetReservItem,
    CabinetReservFilters,
    CabinetReservEvents,
} from "../../";

import {fetchUserReservs} from "../../../redux/actions/user/userReservs";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

const CabinetReserv: React.FC = () => {
    const dispatch = useDispatch();

    const {reservs, isLoadedReservs} = useTypedSelector(
        ({userReservs}) => userReservs
    );

    React.useEffect(() => {
        if (!reservs.length) dispatch(fetchUserReservs() as any);
    }, []);

    return (
        <div className="cabinet-block cabinet-block-reserv">
            <div className="cabinet-block-padding-top">
                <div className="cabinet-block-text">
                    <h2 className="cabinet-block-text__title">Бронирования</h2>
                </div>

                {/* <CabinetReservFilters /> */}

                {/* <CabinetReservEvents /> */}
            </div>

            {isLoadedReservs ? (
                <div className="cabinet-block-reserv-items-wrapper">
                    <CabinetReservItemTitle />

                    {reservs.map((reserv: any, index: number) => (
                        <CabinetReservItem
                            {...reserv}
                            key={`cabinet-block-reserv-item-${index}`}
                        />
                    ))}
                </div>
            ) : null}
        </div>
    );
};

export default CabinetReserv;

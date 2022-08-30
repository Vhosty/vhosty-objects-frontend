import React from "react";
import {useDispatch} from "react-redux";

import {
    CabinetMainReservFilters,
    CabinetReservItemTitle,
    CabinetReservItem,
} from "../../../";

import {fetchUserReservs} from "../../../../redux/actions/user/userReservs";

import {useTypedSelector} from "../../../../hooks/useTypedSelector";

const CabinetMainReserv: React.FC = () => {
    const dispatch = useDispatch();

    const {reservs, isLoadedReservs} = useTypedSelector(
        ({userReservs}) => userReservs
    );

    React.useEffect(() => {
        if (!reservs.length) dispatch(fetchUserReservs() as any);
    }, []);

    return (
        <div className="cabinet-block-main-reserv">
            {/* <div className="cabinet-block-padding">
                <CabinetMainReservFilters />
            </div> */}

            {isLoadedReservs ? (
                <div className="cabinet-block-main-reserv-items-wrapper">
                    <CabinetReservItemTitle />

                    {reservs.map((reserv: any, index: number) => (
                        <CabinetReservItem
                            {...reserv}
                            key={`cabinet-block-main-reserv-item-${index}`}
                        />
                    ))}
                </div>
            ) : null}
        </div>
    );
};

export default CabinetMainReserv;

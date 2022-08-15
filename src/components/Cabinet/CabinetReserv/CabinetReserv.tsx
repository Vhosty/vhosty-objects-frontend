import React from "react";
import {useDispatch} from "react-redux";

import {
    CabinetReservItemTitle,
    CabinetReservItem,
    CabinetReservFilters,
    CabinetReservEvents,
} from "../../";

import {fetchUserReservs} from "../../../redux/actions/user/user";

const CabinetReserv: React.FC = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchUserReservs() as any);
    }, []);

    return (
        <div className="cabinet-block cabinet-block-reserv">
            <div className="cabinet-block-padding-top">
                <div className="cabinet-block-text">
                    <h2 className="cabinet-block-text__title">Бронирования</h2>
                </div>

                <CabinetReservFilters />

                <CabinetReservEvents />
            </div>

            <div className="cabinet-block-reserv-items-wrapper">
				<CabinetReservItemTitle />
				
                <CabinetReservItem />
                <CabinetReservItem />
                <CabinetReservItem />
                <CabinetReservItem />
                <CabinetReservItem />
            </div>
        </div>
    );
};

export default CabinetReserv;

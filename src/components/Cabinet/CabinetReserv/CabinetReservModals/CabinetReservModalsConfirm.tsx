import React from "react";
import {useDispatch} from "react-redux";
import {Link, useSearchParams, useNavigate} from "react-router-dom";

import {sendConfirmUserReservById} from "../../../../redux/actions/user/userReservs";

const CabinetReservModalsConfirm: React.FC = () => {
    const dispatch = useDispatch();

    const [query] = useSearchParams();
    const navigate = useNavigate();

    const sendConfirm = () => {
        dispatch(sendConfirmUserReservById(query.get("id")) as any);

        navigate("/cabinet/reserv");
    };

    return (
        <div className="reglog-content-padding">
            <div className="reglog-confirm-reject">
                <h2 className="reglog-confirm-reject__title">
                    Вы уверены, что хотите{" "}
                    <span className="green">подтвердить</span> бронирование
                    пользователя?
                </h2>
                <p className="reglog-confirm-reject__subtitle">
                    Вы не сможете изменить свое решение, приняв его сейчас.
                </p>

                <div className="reglog-confirm-reject-btn">
                    <button
                        className="btn reglog-confirm-reject-btn__confirm"
                        onClick={sendConfirm}
                    >
                        Подтвердить
                    </button>

                    <Link
                        to="/cabinet/reserv"
                        className="reglog-confirm-reject-btn__reject"
                    >
                        Нет, отменить решение
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CabinetReservModalsConfirm;

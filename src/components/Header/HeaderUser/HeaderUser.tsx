import React from "react";
import {Link} from "react-router-dom";

import {HeaderUserNotifications, HeaderUserModal, Popup} from "../../";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

const HeaderUser: React.FC = () => {
    // const {isLoadedUser} = useTypedSelector(({user}) => user);
	const isLoadedUser = true

    const [activeHeaderModal, setActiveHeaderModal] =
        React.useState<boolean>(false);
	
    const openHeaderModal = () => {
        setActiveHeaderModal(true);
    };

    return (
        <>
            {isLoadedUser ? (
                <div className="header-block-user">
                    {/* <HeaderUserNotifications /> */}

                    <button
                        className="header-block-user__btn"
                        onClick={openHeaderModal}
                    >
                        Личный кабинет
                    </button>

                    <Popup
                        wrapperActive={activeHeaderModal}
                        setWrapperActive={setActiveHeaderModal}
                        addClassWrapper="header-block-user-modal-wrapper"
                    >
                        <HeaderUserModal />
                    </Popup>
                </div>
            ) : (
                <Link to="#request_register" className="header-block-user">
                    {/* <HeaderUserNotifications /> */}

                    <button className="header-block-user__btn">
                        Личный кабинет
                    </button>
                </Link>
            )}
        </>
    );
};

export default HeaderUser;

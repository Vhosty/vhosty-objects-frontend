import React from "react";
import {Link} from "react-router-dom";

import {
    HeaderModal,
    HeaderTransparentPassLink,
    HeaderTransparentSearch,
    HeaderTransparentUser,
} from "../";

import LogoWhite from "../../assets/images/logo-white.svg";

interface HeaderTransparentProps {
    bgImage?: string;
}

const HeaderTransparent: React.FC<HeaderTransparentProps> = ({bgImage}) => {
    return (
        <>
            {bgImage ? (
                <div
                    className="header-transparent-bg"
                    style={{backgroundImage: `url('${bgImage}')`}}
                ></div>
            ) : null}

            <header className="header-transparent">
                <div className="header-transparent-block">
                    <HeaderModal />

                    <Link to="/" className="header-transparent-block-logo">
                        <img
                            src={LogoWhite}
                            alt="Bookover"
                            className="header-transparent-block-logo__image"
                        />
                    </Link>
                </div>

                <HeaderTransparentSearch />

                <HeaderTransparentPassLink />

                <HeaderTransparentUser />
            </header>
        </>
    );
};

export default HeaderTransparent;

import React from "react";
import {Link} from "react-router-dom";

import {HeaderModal, HeaderPassLink, HeaderUser} from "../";

import LogoColor from "../../assets/images/logo-color.svg";

const Header: React.FC = () => {
    const headerContentRef = React.useRef<HTMLDivElement>(null);

    const [height, setHeight] = React.useState<number>(0);

    React.useEffect(() => {
        if (headerContentRef.current) {
            setHeight(headerContentRef.current.offsetHeight);
        }
	}, [headerContentRef.current]);
	
    return (
        <>
            <div
                className="header-height"
                style={{height: `${height-1}px`}}
            ></div>

            <header className="header" ref={headerContentRef}>
                <div className="container">
                    <div className="header-wrapper">
                        <div className="header-block">
                            <HeaderModal color />

                            <Link to="/" className="header-block-logo">
                                <img
                                    src={LogoColor}
                                    alt="Vhosty"
                                    className="header-block-logo__image"
                                />
                            </Link>
                        </div>

                        <div className="header-block">
                            <HeaderPassLink />

                            <HeaderUser />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;

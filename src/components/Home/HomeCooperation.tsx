import React from "react";
import {Link} from "react-router-dom";
import Marquee from "react-fast-marquee";

import Logo from "../../assets/images/home-cooperation-logo.png";

const HomeCooperation: React.FC = () => {
    return (
        <section className="home-cooperation">
            <div className="home-cooperation-wrapper">
                <h2 className="home-cooperation__title">
                    С нами <span>уже работают</span> как сетевые, <br /> так и
                    независимые отели. <span>Присоединяйтесь!</span>
                </h2>
                <div className="home-cooperation-logos">
                    <Marquee
                        gradientColor={[243, 244, 245]}
                        speed={50}
                        pauseOnHover={true}
                    >
                        {Array(10)
                            .fill(0)
                            .map((_, index) => (
                                <div
                                    className="home-cooperation-logos-img"
                                    key={`home-cooperation-logos-img-${index}`}
                                >
                                    <img
                                        src={Logo}
                                        alt=""
                                        className="home-cooperation-logos-img__img"
                                    />
                                </div>
                            ))}
                    </Marquee>
                </div>

                <Link
                    to="#register"
                    className="btn home-cooperation__btn"
                >
                    Быть частью Bookover
                </Link>
            </div>
        </section>
    );
};

export default HomeCooperation;

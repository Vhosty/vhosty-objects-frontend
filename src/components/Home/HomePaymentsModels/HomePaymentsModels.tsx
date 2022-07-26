import React from "react";

import MainPaymentsModels1 from "../../../assets/images/main-payments-models-1.png";
import MainPaymentsModelsMiddleMobile1 from "../../../assets/images/main-payments-models-middle-mobile-1.png";
import MainPaymentsModelsSmallMobile1 from "../../../assets/images/main-payments-models-small-mobile-1.png";

import MainPaymentsModels2 from "../../../assets/images/main-payments-models-2.png";
import MainPaymentsModelsMiddleMobile2 from "../../../assets/images/main-payments-models-middle-mobile-2.png";
import MainPaymentsModelsSmallMobile2 from "../../../assets/images/main-payments-models-small-mobile-2.png";

import MainPaymentsModels3 from "../../../assets/images/main-payments-models-3.png";

const HomePaymentsModels: React.FC = () => {
    const [currentIndexItem, setCurrentIndexItem] = React.useState<number>(0);

    const items = [
        {
            titleBtn: "Оплата на сайте",
            desktopImage: MainPaymentsModels1,
            mobileMiddleImage: MainPaymentsModelsMiddleMobile1,
            mobileSmallImage: MainPaymentsModelsSmallMobile1,
        },
        {
            titleBtn: "Оплата в отеле",
            desktopImage: MainPaymentsModels2,
            mobileMiddleImage: MainPaymentsModelsMiddleMobile2,
            mobileSmallImage: MainPaymentsModelsSmallMobile2,
        },
        {
            titleBtn: "Гибридная оплата",
            desktopImage: MainPaymentsModels3,
            mobileMiddleImage: MainPaymentsModels3,
            mobileSmallImage: MainPaymentsModels3,
            widthProccent: 50,
        },
    ];

    return (
        <section className="home-payments-models">
            <div className="container">
                <div className="home-payments-models-wrapper">
                    <h2 className="home-payments-models__title">
                        <span>Модель оплаты</span> для вашего бизнеса
                    </h2>
                    {/* <div className="home-payments-models-btn">
                        {items.map((item, index) => (
                            <button
                                className={`btn-light home-payments-models-btn__btn ${
                                    currentIndexItem === index ? "active" : ""
                                }`}
                                onClick={() => setCurrentIndexItem(index)}
                                key={`home-payments-models-btn__btn-${index}`}
                            >
                                {item.titleBtn}
                            </button>
                        ))}
					</div>
					 */}
                    {items.map((item, index) => (
                        <div
                            className={`home-payments-models-img ${
                                0 === index ? "active" : ""
                            }`}
                            key={`home-payments-models-img-${index}`}
                            style={
                                item.widthProccent
                                    ? {
                                          width: `${item.widthProccent}%`,
                                      }
                                    : {}
                            }
                        >
                            <img
                                src={item.desktopImage}
                                alt=""
                                className="home-payments-models-img__img desktop"
                            />

                            <img
                                src={item.mobileMiddleImage}
                                alt=""
                                className="home-payments-models-img__img middleMobile"
                            />

                            <img
                                src={item.mobileSmallImage}
                                alt=""
                                className="home-payments-models-img__img smallMobile"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomePaymentsModels;

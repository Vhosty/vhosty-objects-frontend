import React from "react";
import Marquee from "react-fast-marquee";

import OwlCarousel from "react-owl-carousel";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import {HomeFeedbacksBlock} from "../../";

const HomeFeedbacks: React.FC = () => {
    const setting = {
        items: 1,
        autoWidth: true,
    };

    return (
        <section className="home-feedbacks">
            <div className="container">
                <div className="home-feedbacks-title">
                    <h2 className="home-feedbacks-title__title">
                        Многие <span>убедились</span> в преимуществах нашего
                        сервиса и <span>доверили</span> нам свои объекты
                    </h2>
                </div>
            </div>
       
			<div className="home-feedbacks-blocks-wrapper">
                <Marquee gradient={false} speed={50} pauseOnHover={true}>
                    <HomeFeedbacksBlock />
                    <HomeFeedbacksBlock />
                    <HomeFeedbacksBlock />
                    <HomeFeedbacksBlock />
                    <HomeFeedbacksBlock />
                    <HomeFeedbacksBlock />
                </Marquee>
            </div>

            <div className="home-feedbacks-blocks-wrapper-slider-mobile">
                <OwlCarousel {...setting}>
                    <HomeFeedbacksBlock />
                    <HomeFeedbacksBlock />
                    <HomeFeedbacksBlock />
                    <HomeFeedbacksBlock />
                    <HomeFeedbacksBlock />
                    <HomeFeedbacksBlock />
                </OwlCarousel>
            </div>
        </section>
    );
};

export default HomeFeedbacks;

import React from "react";
import {Link} from "react-router-dom";

import {Stars} from "../../";

const HomeFeedbacksBlock: React.FC = () => {
    return (
        <div className="home-feedbacks-block">
            <div
                className="home-feedbacks-block-cover"
                style={{
                    backgroundImage: `url("https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1980&q=80")`,
                }}
            >
                <Link to="/" className="btn border home-feedbacks-block-cover__btn">
                    Показать объект
                </Link>
            </div>
            <div className="home-feedbacks-block-text">
                <div
                    className="home-feedbacks-block-text-avatar"
                    style={{
                        backgroundImage: `url("https://images.unsplash.com/photo-1492446845049-9c50cc313f00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80")`,
                    }}
                ></div>
                <div className="home-feedbacks-block-text-block">
                    <div className="home-feedbacks-block-text-block-stars">
                        <Stars count={5} />
                    </div>
                    <h3 className="home-feedbacks-block-text-block__name">
                        Антон стрелецкий
                    </h3>
                    <p className="home-feedbacks-block-text-block__description">
                        Этот сервис помог мне наконец привлечь к своей
                        недвижимости гостей. Теперь пользуюсь только VHOSTY.
                    </p>
                    <p className="home-feedbacks-block-text-block__subtitle">
                        Владелец гостевого дома
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HomeFeedbacksBlock;

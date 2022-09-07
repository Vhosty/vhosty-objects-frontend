import React from "react";
import {Link} from "react-router-dom";

const ObjectsNewServices: React.FC = () => {
    return (
        <div
            className="objects-new-block objects-new-block-services"
            id="objects-new-filled-section-services"
        >
            <div className="objects-new-block-text">
                <h2 className="objects-new-block-text__title">
                    Удобства и услуги
                </h2>
                <p className="objects-new-block-text__description">
                    Вы не добавили удобств. Выберите из списка те, что
                    соответствуют вашему отелю, или добавьте свое с помощью
                    вкладки “прочее”
                </p>
                <Link
                    to="#services"
                    className="btn-line objects-new-block-text__btn"
                >
                    Добавить удобства и услуги
                </Link>
            </div>

            <Link to="#services" className="objects-new-block-icon">
                <svg
                    width="216"
                    height="166"
                    viewBox="0 0 216 166"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M152.666 110.725L142.289 93.9989C153.18 107.531 173.332 108.204 185.098 95.6932C195.84 84.27 195.292 66.3307 183.867 55.5863C172.449 44.8471 154.506 45.3917 143.761 56.817C135.507 65.5945 134.009 78.0748 138.657 88.145L113.553 47.6855L150.806 36.9357C162.375 33.5974 167.842 20.3547 161.964 9.82177C157.696 2.17402 148.838 -1.47183 140.424 0.956486L84.026 17.2307C69.4034 21.4508 62.8551 38.4489 70.8842 51.3904L87.9305 78.8641L58.0352 97.4136C94.0013 98.24 119.988 109.191 152.666 110.725Z"
                        fill="#00A0A0"
                        fillOpacity="0.2"
                    />
                    <path
                        d="M8.06008 129.363C89.8182 106.121 120.696 153.041 211.269 129.398C214.651 128.516 216.676 125.059 215.793 121.677C214.911 118.296 211.454 116.27 208.072 117.153C121.055 139.868 90.1346 92.8737 4.59944 117.188C1.23794 118.144 -0.712814 121.644 0.242733 125.006C1.1987 128.368 4.69984 130.318 8.06008 129.363Z"
                        fill="#00A0A0"
                        fillOpacity="0.2"
                    />
                    <path
                        d="M208.072 146.683C120.895 169.44 90.3042 122.355 4.59944 146.719C1.23794 147.675 -0.712814 151.174 0.242733 154.536C1.19828 157.898 4.69942 159.849 8.06008 158.893C89.8182 135.652 120.696 182.571 211.269 158.929C214.651 158.046 216.676 154.589 215.793 151.208C214.911 147.826 211.454 145.801 208.072 146.683Z"
                        fill="#00A0A0"
                        fillOpacity="0.2"
                    />
                </svg>
            </Link>
        </div>
    );
};

export default ObjectsNewServices;

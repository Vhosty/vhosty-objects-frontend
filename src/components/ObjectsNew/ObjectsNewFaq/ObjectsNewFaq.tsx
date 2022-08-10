import React from "react";
import {Link} from "react-router-dom";

const ObjectsNewFaq: React.FC = () => {
    return (
        <div className="objects-new-block objects-new-block-faq">
            <div className="objects-new-block-text">
                <h2 className="objects-new-block-text__title">
                    Часто задаваемые вопросы
                </h2>
                <p className="objects-new-block-text__description">
                    Посетители часто задают вопросы, ответы на которые
                    комфортнее вывести в отдельную вкладку Добавьте как вопросы,
                    так и ответы на них, чтобы дать гостям популярную информацию
                </p>
                <Link to="#faq" className="btn-line objects-new-block-text__btn">
                    Добавить вопросы и ответы
                </Link>
            </div>

            <div className="objects-new-block-icon">
                <svg
                    width="216"
                    height="216"
                    viewBox="0 0 216 216"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M139.825 95.8968L139.667 18.9447C139.645 8.49867 131.129 0 120.682 0H18.9844C8.51639 0 0 8.51639 0 18.984V95.7631C0 106.231 8.51639 114.747 18.9844 114.747H32.0625V127.403C32.0625 132.606 38.0206 135.59 42.1875 132.465L65.8041 114.753L120.784 114.92C131.459 114.92 139.847 106.319 139.825 95.8968V95.8968ZM69.6094 89.0135C66.1146 89.0135 63.2812 86.1802 63.2812 82.6854C63.2812 79.1906 66.1146 76.3573 69.6094 76.3573C73.1042 76.3573 75.9375 79.1906 75.9375 82.6854C75.9375 86.1802 73.1042 89.0135 69.6094 89.0135ZM76.3594 62.616V63.2796C76.3594 66.7744 73.5261 69.6077 70.0312 69.6077C66.5364 69.6077 63.7031 66.7744 63.7031 63.2796V59.3312C63.7031 55.1517 66.8094 51.5628 70.9286 50.9827C74.0247 50.547 76.3594 47.8537 76.3594 44.7171C76.3594 40.1055 71.2775 36.1513 65.4632 39.8718C62.5185 41.7551 58.6056 40.8949 56.7224 37.9515C54.8391 35.0076 55.6989 31.0943 58.6427 29.2106C65.1691 25.0357 72.8304 24.605 79.1383 28.0572C85.2306 31.393 89.0156 37.7764 89.0156 44.7175C89.0156 52.8424 83.7814 59.978 76.3594 62.616Z"
                        fill="#00A0A0"
                        fillOpacity="0.2"
                    />
                    <path
                        d="M197.016 89.0117H152.467L152.482 95.8689C152.514 111.493 141.324 124.172 126.986 126.98H183.938C187.432 126.98 190.266 129.813 190.266 133.308C190.266 136.803 187.432 139.636 183.938 139.636H108C104.505 139.636 101.672 136.803 101.672 133.308C101.672 130.728 103.218 128.513 105.432 127.528L76.3594 127.439V184.353C76.3594 194.821 84.8758 203.337 95.3438 203.337H138.147L162.123 215.325C166.318 217.422 171.281 214.367 171.281 209.665V203.337H197.016C207.484 203.337 216 194.821 216 184.353V107.996C216 97.5277 207.484 89.0117 197.016 89.0117V89.0117ZM183.938 164.947H108C104.505 164.947 101.672 162.114 101.672 158.619C101.672 155.124 104.505 152.291 108 152.291H183.938C187.432 152.291 190.266 155.124 190.266 158.619C190.266 162.114 187.432 164.947 183.938 164.947Z"
                        fill="#00A0A0"
                        fillOpacity="0.2"
                    />
                </svg>
            </div>
        </div>
    );
};

export default ObjectsNewFaq;

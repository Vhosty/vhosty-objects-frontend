import React from "react";

const ObjectsNewTerms: React.FC = () => {
    return (
        <div className="objects-new-block objects-new-block-terms">
            <div className="objects-new-block-text">
                <h2 className="objects-new-block-text__title">
                    Условия размещения
                </h2>
                <p className="objects-new-block-text__description">
                    Необходимо добавить информацию о времени заезда и выезда, а
                    также об условиях проживания, оплаты или иную полезную для
                    гостей информацию.
                </p>
                <button className="btn-line objects-new-block-text__btn">
                    Добавить информацию об условиях
                </button>
            </div>

            <div className="objects-new-block-icon">
                <svg
                    width="216"
                    height="178"
                    viewBox="0 0 216 178"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M38.9195 177.347H177.08V33.8747H146.285V21.0644C146.285 9.81119 137.13 0.65625 125.877 0.65625H90.1253C78.8707 0.65625 69.7161 9.81119 69.7161 21.0644V33.8747H38.9199L38.9195 177.347ZM81.0395 21.0644C81.0395 16.0554 85.1153 11.9807 90.1242 11.9807H125.876C130.885 11.9807 134.96 16.0565 134.96 21.0644V33.8747H81.0395V21.0644ZM216 48.4657V162.754C216 170.799 209.454 177.346 201.408 177.346H188.405V33.8747H201.408C209.454 33.8747 216 40.4204 216 48.4657ZM27.5947 177.347H14.592C6.54565 177.347 0 170.8 0 162.755V48.4657C0 40.4207 6.54565 33.8737 14.592 33.8737H27.5951L27.5947 177.347Z"
                        fill="#00A0A0"
                        fillOpacity="0.2"
                    />
                </svg>
            </div>
        </div>
    );
};

export default ObjectsNewTerms;

import React from "react";

const HomeSteps: React.FC = () => {
    return (
        <section className="home-steps">
            <div className="container">
                <div className="home-steps-wrapper">
                    <div className="home-steps-block">
                        <div className="home-steps-block-icon">
                            <svg
                                width="145"
                                height="159"
                                viewBox="0 0 145 159"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M117.195 0V159H68.3636V39.75H67.3097L27.9639 60.5566V23.9121L72.2279 0H117.195Z"
                                    fill="#00A0A0"
                                    fillOpacity="0.3"
                                />
                            </svg>
                        </div>
                        <div className="home-steps-block-text">
                            <h3 className="home-steps-block-text__title">
                                Зарегистрируйтесь
                            </h3>
                            <p className="home-steps-block-text__description">
                                Пройдите простую первичную регистрацию в
                                несколько пунктов и получите доступ к панели
                                управления
                            </p>
                        </div>
                    </div>
                    <div className="home-steps-block">
                        <div className="home-steps-block-icon">
                            <svg
                                width="140"
                                height="159"
                                viewBox="0 0 140 159"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.0769 159V128.364L69.8462 79.9595C73.7436 76.7428 77.0769 73.7303 79.8462 70.922C82.6667 68.0626 84.8205 65.1267 86.3077 62.1142C87.8462 59.1016 88.6154 55.7572 88.6154 52.0809C88.6154 48.0472 87.7436 44.6007 86 41.7413C84.3077 38.882 81.9487 36.6864 78.9231 35.1546C75.8974 33.5718 72.4103 32.7803 68.4615 32.7803C64.5128 32.7803 61.0256 33.5718 58 35.1546C55.0256 36.7375 52.718 39.0607 51.0769 42.1243C49.4359 45.1879 48.6154 48.9152 48.6154 53.3064H8C8 42.2775 10.4872 32.7803 15.4615 24.815C20.4359 16.8497 27.4615 10.7225 36.5385 6.43353C45.6154 2.14451 56.2564 0 68.4615 0C81.0769 0 92 2.01686 101.231 6.05058C110.513 10.0332 117.667 15.6498 122.692 22.9003C127.769 30.1508 130.308 38.6522 130.308 48.4046C130.308 54.4297 129.051 60.4292 126.538 66.4032C124.026 72.3261 119.513 78.8873 113 86.0867C106.487 93.2861 97.2308 101.864 85.2308 111.821L70.4615 124.075V124.994H132V159H11.0769Z"
                                    fill="#00A0A0"
                                    fillOpacity="0.3"
                                />
                            </svg>
                        </div>
                        <div className="home-steps-block-text">
                            <h3 className="home-steps-block-text__title">
                                Создайте объект
                            </h3>
                            <p className="home-steps-block-text__description">
                                Детальная, но понятная настройка объекта
                                позволит учесть основные факторы для ваших
                                будущих гостей
                            </p>
                        </div>
                    </div>
                    <div className="home-steps-block">
                        <div className="home-steps-block-icon">
                            <svg
                                width="140"
                                height="159"
                                viewBox="0 0 140 159"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M69.7447 159C57.5778 159 46.7685 156.909 37.3165 152.728C27.9149 148.496 20.5243 142.677 15.1447 135.271C9.76519 127.865 7.05028 119.351 7 109.728H49.232C49.2823 112.701 50.1872 115.371 51.9469 117.739C53.7569 120.056 56.2204 121.87 59.3375 123.18C62.4546 124.49 66.0242 125.144 70.0463 125.144C73.9176 125.144 77.3364 124.464 80.3027 123.104C83.269 121.693 85.5817 119.754 87.2408 117.285C88.8999 114.817 89.7043 111.995 89.654 108.821C89.7043 105.698 88.7491 102.927 86.7883 100.509C84.8778 98.0903 82.188 96.201 78.719 94.8408C75.2499 93.4805 71.253 92.8004 66.7281 92.8004H51.0419V63.7814H66.7281C70.901 63.7814 74.5712 63.1012 77.7386 61.741C80.9563 60.3807 83.4449 58.4914 85.2046 56.0732C87.0145 53.6549 87.8944 50.884 87.8441 47.7605C87.8944 44.7376 87.1654 42.0675 85.6571 39.75C84.1488 37.4325 82.0372 35.6188 79.3223 34.3089C76.6576 32.999 73.5657 32.3441 70.0463 32.3441C66.2253 32.3441 62.8066 33.0242 59.79 34.3845C56.8237 35.7448 54.4859 37.634 52.7765 40.0523C51.0671 42.4705 50.1872 45.2414 50.137 48.365H10.0166C10.0668 38.8935 12.6561 30.5304 17.7842 23.2757C22.9627 16.0209 30.0516 10.3279 39.0511 6.19677C48.0505 2.06559 58.3823 0 70.0463 0C81.459 0 91.5394 1.93964 100.287 5.81892C109.086 9.69819 115.948 15.0385 120.876 21.8398C125.853 28.5908 128.316 36.3241 128.266 45.0399C128.367 53.7053 125.4 60.8089 119.367 66.3508C113.384 71.8926 105.793 75.1673 96.5922 76.1749V77.384C109.061 78.7443 118.437 82.5732 124.722 88.8707C131.006 95.1179 134.098 102.977 133.998 112.449C134.048 121.517 131.333 129.553 125.853 136.556C120.423 143.558 112.856 149.05 103.153 153.03C93.5002 157.01 82.364 159 69.7447 159Z"
                                    fill="#00A0A0"
                                    fillOpacity="0.3"
                                />
                            </svg>
                        </div>
                        <div className="home-steps-block-text">
                            <h3 className="home-steps-block-text__title">
                                Верифицируйтесь
                            </h3>
                            <p className="home-steps-block-text__description">
                                Осталось совсем немного: необходимо пройти
                                простую верификацию, чтобы объект был одобрен
                                модерацией
                            </p>
                        </div>
                    </div>
                    <div className="home-steps-block">
                        <div className="home-steps-block-icon">
                            <svg
                                width="140"
                                height="159"
                                viewBox="0 0 140 159"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1 134.156V100.617L65.4626 0H96.1292V44.7187H78.6054L43.8707 99.375V100.617H139V134.156H1ZM78.9184 159V123.908L79.8571 109.312V0H120.537V159H78.9184Z"
                                    fill="#00A0A0"
                                    fillOpacity="0.3"
                                />
                            </svg>
                        </div>
                        <div className="home-steps-block-text">
                            <h3 className="home-steps-block-text__title">
                                Подпишите договор
                            </h3>
                            <p className="home-steps-block-text__description">
                                Всё! Мы прислали Вам договор, чтобы Вы могли
                                получать доход от сдачи объекта в аренду.
                                Осталось только принять оферту
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSteps;

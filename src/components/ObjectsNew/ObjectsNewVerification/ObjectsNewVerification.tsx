import React from "react";

const ObjectsNewVerification: React.FC = () => {
    return (
        <div className="objects-new-block objects-new-block-verification">
            <div className="objects-new-block-text">
                <h2 className="objects-new-block-text__title">
                    Итоговая верификация объекта
                </h2>
                <p className="objects-new-block-text__description">
                    Вам необходимо предоставить документы для верификации
                    объекта. Это необходимо для доверительных отношений между
                    гостем и владельцем.
                </p>
            </div>

            <div className="objects-new-block-verification-block"></div>

            <div className="objects-new-block-verification-block">
                <h3 className="objects-new-block-verification-block__title">
                    Карточка предприятия
                </h3>
                <p className="objects-new-block-verification-block__description">
                    Информационный лист с юридическими, регистрационными и
                    контактными данными предприятия, организации и
                    индивидуального предпринимателя для целей информирования
                    третьих лиц
                </p>

                {/* <button className="btn-line objects-new-block-verification-block__add">
                    Загрузить документ (формат .pdf)
                </button> */}

                <div className="objects-new-block-verification-block-document">
                    <div
                        className="objects-new-block-verification-block-document-cover"
                        style={{
                            backgroundImage: `url('https://images.unsplash.com/photo-1454496406107-dc34337da8d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1300&q=80')`,
                        }}
                    ></div>
                    <div className="objects-new-block-verification-block-document-text">
                        <p className="objects-new-block-verification-block-document-text__name">
                            nazvaniedocumenta.pdf
                        </p>

                        <p className="objects-new-block-verification-block-document-text__size">
                            3,3 мб
                        </p>

                        <p className="objects-new-block-verification-block-document-text__status work">
                            Статус проверки: <span>Проверяется</span>
                        </p>

                        <p className="objects-new-block-verification-block-document-text__input">
                            Заменить документ (формат .pdf)
                        </p>
                    </div>
                </div>
            </div>

            <div className="objects-new-block-verification-block">
                <h3 className="objects-new-block-verification-block__title">
                    Документ на объект
                </h3>
                <p className="objects-new-block-verification-block__description">
                    Необходим документ, подтверждающий либо право собственности
                    на объект, либо договор аренды объекта, с соответствующими
                    подписями и печатями
                </p>

                <button className="btn-line objects-new-block-verification-block__add">
                    Загрузить документ (формат .pdf)
                </button>

                {/* <div className="objects-new-block-verification-block-document">
                    <div
                        className="objects-new-block-verification-block-document-cover"
                        style={{
                            backgroundImage: `url('https://images.unsplash.com/photo-1454496406107-dc34337da8d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1300&q=80')`,
                        }}
                    ></div>
                    <div className="objects-new-block-verification-block-document-text">
                        <p className="objects-new-block-verification-block-document-text__name">
                            nazvaniedocumenta.pdf
                        </p>

                        <p className="objects-new-block-verification-block-document-text__size">
                            3,3 мб
                        </p>

                        <p className="objects-new-block-verification-block-document-text__status work">
                            Статус проверки: <span>Проверяется</span>
                        </p>

                        <p className="objects-new-block-verification-block-document-text__input">
                            Заменить документ (формат .pdf)
                        </p>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default ObjectsNewVerification;

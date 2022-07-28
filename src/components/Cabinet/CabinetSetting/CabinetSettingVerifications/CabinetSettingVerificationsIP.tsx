import React from "react";

const CabinetSettingVerificationsIP: React.FC = () => {
    return (
        <div className="cabinet-block-setting-vetifications-block cabinet-block-setting-vetifications-passport">
            <h3 className="cabinet-block-setting-vetifications-block__title">
                Документ, подтверждающий статус ИП
            </h3>
            <p className="cabinet-block-setting-vetifications-block__description">
                Если вы ведете деятельность, как индивидуальный предприниматель,
                предоставьте документ с подтверждением статуса ИП
            </p>

            <div className="cabinet-block-setting-vetifications-block-document">
                <div
                    className="cabinet-block-setting-vetifications-block-document-cover"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1454496406107-dc34337da8d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1300&q=80')`,
                    }}
                ></div>
                <div className="cabinet-block-setting-vetifications-block-document-text">
                    <p className="cabinet-block-setting-vetifications-block-document-text__name">
                        nazvaniedocumenta.pdf
                    </p>

                    <p className="cabinet-block-setting-vetifications-block-document-text__size">
                        3,3 мб
                    </p>

                    <p className="cabinet-block-setting-vetifications-block-document-text__status work">
                        Статус проверки: <span>Проверяется</span>
                    </p>

                    <p className="cabinet-block-setting-vetifications-block-document-text__input">
                        Заменить документ (формат .pdf)
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CabinetSettingVerificationsIP;

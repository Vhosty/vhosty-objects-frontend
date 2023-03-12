import React from "react";
import {useDispatch} from "react-redux";

import {uploadObjectDocs} from "../../../redux/actions/objects_new/objects_new";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

// @ts-ignore
import Doc from "../../../assets/docs/doc.docx";

const ObjectsNewDocument: React.FC = () => {
    const dispatch = useDispatch();

    const [isSend, setIsSend] = React.useState<boolean>(false);

    const {itemById} = useTypedSelector(({objects_new}) => objects_new);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            dispatch(
                uploadObjectDocs(
                    e.target.files[0],
                    itemById,
                    itemById.id
                ) as any
            );

            setIsSend(true);
        }
    };

    return (
        <div className="objects-new-block objects-new-block-document">
            <div className="objects-new-block-text">
                <h2 className="objects-new-block-text__title">
                    Договор владельца с bookover.ru
                </h2>
                <p className="objects-new-block-text__description">
                    Мы подготовили договор с нашим сервисом: вам необходимо
                    подписать экземпляр, указав в нем корректные данные.
                </p>
            </div>

            <div className="objects-new-block-document-block">
                <p className="objects-new-block-document-block__subtitle">
                    Шаг первый
                </p>
                <h3 className="objects-new-block-document-block__title">
                    Договор bookover с владельцем объекта
                </h3>
                <p className="objects-new-block-document-block__description">
                    Договор с порядком и условиями размещения Вашего объекта на
                    нашем сервисе, а также с правилами пользования сервисом.
                </p>

                <a
                    href={Doc}
                    download
                    className="btn-line objects-new-block-document-block__file"
                >
                    Скачать документ
                </a>
            </div>

            <div className="objects-new-block-document-block">
                <p className="objects-new-block-document-block__subtitle">
                    Шаг второй
                </p>
                <h3 className="objects-new-block-document-block__title">
                    Подписанный экземляр договора
                </h3>
                <p className="objects-new-block-document-block__description">
                    Введите корректные данные в договор и поставьте свою
                    подпись, отсканируйте и загрузите документ.
                </p>

                <input type="file" name="docs" id="docs" onChange={onChange} />

                {isSend ? (
                    <p className="objects-new-block-document-block__description">
                      Спасибо, документ загружен
                    </p>
                ) : (
                    <label
                        className="btn-line objects-new-block-document-block__file"
                        htmlFor="docs"
                    >
                        Загрузить документ (формат .pdf)
                    </label>
                )}
            </div>
        </div>
    );
};

export default ObjectsNewDocument;

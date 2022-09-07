import React from "react";

import {ObjectsNewEditBtn, ObjectsNewBlockTextWrapper} from "../../";

interface ObjectsNewAboutFilledProps {
    description: string;
}

const ObjectsNewAboutFilled: React.FC<ObjectsNewAboutFilledProps> = ({
    description,
}) => {
    const ObjectsNewFilledSectionAboutTextRef =
        React.useRef<HTMLDivElement>(null);

    const [totalHeight, setTotalHeight] = React.useState(0);

    React.useEffect(() => {
        if (ObjectsNewFilledSectionAboutTextRef.current) {
            setTotalHeight(
                ObjectsNewFilledSectionAboutTextRef.current?.offsetHeight
            );
        }
    }, [ObjectsNewFilledSectionAboutTextRef]);

    return (
        <div
            className="objects-new-filled-section objects-new-filled-section-about"
            id="objects-new-filled-section-about"
        >
            <div className="objects-new-filled-section-padding">
                <div className="objects-new-filled-section-about-text">
                    <ObjectsNewBlockTextWrapper
                        isFullHeight={totalHeight < 350 ? true : false}
                    >
                        <div
                            className="objects-new-filled-section-about-text-wrapper"
                            ref={ObjectsNewFilledSectionAboutTextRef}
                        >
                            <div className="objects-new-filled-section-top marginBottom">
                                <h2 className="objects-new-filled-section-top__title">
                                    Об отеле
                                </h2>

                                <ObjectsNewEditBtn hash="about" />
                            </div>

                            <p className="objects-new-filled-section__description">
                                {description}
                            </p>
                        </div>
                    </ObjectsNewBlockTextWrapper>
                </div>
            </div>
        </div>
    );
};

export default ObjectsNewAboutFilled;

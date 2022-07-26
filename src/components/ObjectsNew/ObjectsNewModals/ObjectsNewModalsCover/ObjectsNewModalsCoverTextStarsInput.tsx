import React from "react";
import {formValueSelector, Field, WrappedFieldProps} from "redux-form";

import {TitleIcon} from "../../../";

import {useTypedSelector} from "../../../../hooks/useTypedSelector";

const ObjectsNewModalsCoverTextStarsInput: React.FC<any> = ({
    initialize,
    initStars,
}) => {
    const [currentIndex, setCurrentIndex] = React.useState<number>(0);

    const selector = formValueSelector("objects-new-modals-cover-text");

    const values = useTypedSelector((state) => {
        const {name, address} = selector(state, "name", "address");

        return {
            name,
            address,
        };
    });

    React.useEffect(() => {
        initialize({
            ...values,
            stars: currentIndex + 1,
        });
    }, [currentIndex]);

    React.useEffect(() => {
        if (initStars) setCurrentIndex(initStars-1);
    }, [initStars]);

    return (
        <div className="objects-new-modal-content-stars-input">
            <Field
                component={({input}: WrappedFieldProps) => (
                    <input {...input} type="hidden" />
                )}
                name="stars"
            />

            <TitleIcon title="Количество звезд">
                <svg
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M16.7359 5.89649L11.7769 5.17579L9.56013 0.681648C9.49958 0.558601 9.39997 0.458992 9.27692 0.398445C8.96833 0.246101 8.59333 0.373054 8.43903 0.681648L6.22223 5.17579L1.26325 5.89649C1.12653 5.91602 1.00153 5.98048 0.905829 6.07813C0.790129 6.19705 0.726373 6.35704 0.728571 6.52294C0.730768 6.68884 0.798739 6.84709 0.917548 6.9629L4.50544 10.4609L3.65778 15.4004C3.6379 15.5153 3.65062 15.6335 3.69449 15.7415C3.73835 15.8496 3.81161 15.9432 3.90596 16.0117C4.00031 16.0802 4.11198 16.1209 4.22829 16.1292C4.3446 16.1375 4.46091 16.113 4.56403 16.0586L8.99958 13.7266L13.4351 16.0586C13.5562 16.1231 13.6968 16.1445 13.8316 16.1211C14.1715 16.0625 14.4 15.7402 14.3414 15.4004L13.4937 10.4609L17.0816 6.9629C17.1793 6.8672 17.2437 6.74219 17.2633 6.60548C17.316 6.26368 17.0777 5.94727 16.7359 5.89649Z"
                        fill="#00A0A0"
                    />
                </svg>
            </TitleIcon>

            <div className="objects-new-modal-content-stars-input-items-wrapper">
                {Array(5)
                    .fill(0)
                    .map((_, index) => (
                        <div
                            className={`objects-new-modal-content-stars-input-item ${
                                currentIndex >= index ? "active" : ""
                            }`}
                            key={`objects-new-modal-content-stars-input-item-${index}`}
                            onClick={() => setCurrentIndex(index)}
                        >
                            <svg
                                width="42"
                                height="40"
                                viewBox="0 0 42 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M40.3388 14.2403L27.9413 12.4385L22.3993 1.20314C22.248 0.895526 21.9989 0.646502 21.6913 0.495135C20.9198 0.114276 19.9823 0.431659 19.5966 1.20314L14.0546 12.4385L1.65715 14.2403C1.31535 14.2891 1.00285 14.4502 0.763596 14.6944C0.474346 14.9917 0.314957 15.3916 0.32045 15.8064C0.325943 16.2211 0.49587 16.6167 0.792892 16.9063L9.76262 25.6514L7.64348 38C7.59378 38.2873 7.62557 38.5827 7.73524 38.8528C7.8449 39.1229 8.02806 39.3569 8.26393 39.5282C8.4998 39.6995 8.77896 39.8013 9.06975 39.8221C9.36053 39.8428 9.65131 39.7816 9.9091 39.6455L20.998 33.8154L32.0868 39.6455C32.3896 39.8067 32.7411 39.8604 33.0781 39.8018C33.9277 39.6553 34.4989 38.8496 34.3525 38L32.2333 25.6514L41.203 16.9063C41.4472 16.667 41.6083 16.3545 41.6572 16.0127C41.789 15.1582 41.1933 14.3672 40.3388 14.2403Z" />
                            </svg>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default ObjectsNewModalsCoverTextStarsInput;

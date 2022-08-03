import React from "react";

import {TitleIcon, YesOrNo, Select} from "../../../../";

const ObjectsNewModalsRoomsBlockFoods: React.FC = () => {
    const [selectIsActive, setSelectIsActive] = React.useState<boolean>(true);

    const onChangeYesOrNo = (status: boolean) => {
        setSelectIsActive(status);
    };

    return (
        <div className="objects-new-modal-content-big-rooms-block-row-inputs-foods-wrapper">
            <TitleIcon title="Питание" marginBottom>
                <svg
                    viewBox="0 0 17 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M16.667 9.83317V15.6665C16.667 16.1085 16.4563 16.5325 16.0812 16.845C15.7061 17.1576 15.1974 17.3332 14.667 17.3332C14.1366 17.3332 13.6279 17.1576 13.2528 16.845C12.8777 16.5325 12.667 16.1085 12.667 15.6665V11.4998H10.667V3.1665C10.667 2.50346 10.9831 1.86758 11.5457 1.39874C12.1083 0.929896 12.8713 0.666504 13.667 0.666504L16.667 0.666504V9.83317ZM2.66699 8.99984C2.13656 8.99984 1.62785 8.82424 1.25278 8.51168C0.877706 8.19912 0.666992 7.7752 0.666992 7.33317V1.49984C0.666992 1.27882 0.772349 1.06686 0.959885 0.910582C1.14742 0.754301 1.40178 0.666504 1.66699 0.666504C1.93221 0.666504 2.18656 0.754301 2.3741 0.910582C2.56164 1.06686 2.66699 1.27882 2.66699 1.49984V4.83317H3.66699V1.49984C3.66699 1.27882 3.77235 1.06686 3.95989 0.910582C4.14742 0.754301 4.40178 0.666504 4.66699 0.666504C4.93221 0.666504 5.18656 0.754301 5.3741 0.910582C5.56164 1.06686 5.66699 1.27882 5.66699 1.49984V4.83317H6.66699V1.49984C6.66699 1.27882 6.77235 1.06686 6.95989 0.910582C7.14742 0.754301 7.40178 0.666504 7.66699 0.666504C7.93221 0.666504 8.18656 0.754301 8.3741 0.910582C8.56164 1.06686 8.66699 1.27882 8.66699 1.49984V7.33317C8.66699 7.7752 8.45628 8.19912 8.08121 8.51168C7.70613 8.82424 7.19743 8.99984 6.66699 8.99984V15.6665C6.66699 16.1085 6.45628 16.5325 6.08121 16.845C5.70613 17.1576 5.19743 17.3332 4.66699 17.3332C4.13656 17.3332 3.62785 17.1576 3.25278 16.845C2.87771 16.5325 2.66699 16.1085 2.66699 15.6665V8.99984Z"
                        fill="#00A0A0"
                    />
                </svg>
            </TitleIcon>

            <div className="objects-new-modal-content-big-rooms-block-row-inputs-foods">
                <YesOrNo onChange={onChangeYesOrNo} />

                <div className="objects-new-modal-content-big-rooms-block-row-inputs-foods-select">
                    <Select
                        choices={[
                            {
                                title: "Все включено",
                                key: "all",
                            },
                            {
                                title: "Завтрак включен",
                                key: "breakfast-included",
                            },
                            {
                                title: "Завтрак и обед включен",
                                key: "breakfast-lunch-included",
                            },
                            {
                                title: "Завтрак и ужин включен",
                                key: "breakfast-dinner-included",
                            },
                            {
                                title: "Обед включен",
                                key: "lunch-included",
                            },
                            {
                                title: "Ужин включен",
                                key: "dinner-included",
                            },
                            {
                                title: "Обед и ужин включен",
                                key: "lunch-dinner-included",
                            },
                        ]}
                        small
                        border
                        disabled={!selectIsActive}
                    />
                </div>
            </div>
        </div>
    );
};

export default ObjectsNewModalsRoomsBlockFoods;

import React from "react";
import {Field} from "redux-form";

import {TitleIcon, RenderSelect} from "../../../../";

const ObjectsNewModalsRoomsBlockTypesBed: React.FC<any> = ({room}) => {
    return (
        <div className="objects-new-modal-content-big-rooms-block-row-inputs-select-types-bed">
            <TitleIcon title="Кровать" marginBottom>
                <svg
                    viewBox="0 0 20 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M2.52632 8.26401H19.5789C19.75 8.26401 19.898 8.32651 20.023 8.45151C20.148 8.57651 20.2105 8.72453 20.2105 8.89559V13.3166H17.6842V10.7903H2.52632V13.3166H0V1.31664C0 1.14558 0.0625 0.997559 0.1875 0.872559C0.3125 0.747559 0.460526 0.685059 0.631579 0.685059H1.89474C2.06579 0.685059 2.21382 0.747559 2.33882 0.872559C2.46382 0.997559 2.52632 1.14558 2.52632 1.31664V8.26401ZM8.21053 5.10611C8.21053 4.40874 7.96382 3.81335 7.4704 3.31993C6.97697 2.82651 6.38158 2.5798 5.68421 2.5798C4.98684 2.5798 4.39145 2.82651 3.89803 3.31993C3.40461 3.81335 3.15789 4.40874 3.15789 5.10611C3.15789 5.80348 3.40461 6.39887 3.89803 6.8923C4.39145 7.38572 4.98684 7.63243 5.68421 7.63243C6.38158 7.63243 6.97697 7.38572 7.4704 6.8923C7.96382 6.39887 8.21053 5.80348 8.21053 5.10611ZM20.2105 7.63243V7.00085C20.2105 5.9548 19.8405 5.0617 19.1003 4.32157C18.3602 3.58144 17.4671 3.21137 16.4211 3.21137H9.47368C9.30263 3.21137 9.15461 3.27387 9.02961 3.39887C8.90461 3.52387 8.84211 3.6719 8.84211 3.84295V7.63243H20.2105Z"
                        fill="#00A0A0"
                    />
                </svg>
            </TitleIcon>

            <Field
                component={RenderSelect}
                choices={[
                    {
                        title: "1 Двуспальная кровать",
                        key: "double",
                    },
                    {
                        title: "2 Двуспальная кровати",
                        key: "two_double",
                    },
                    {
                        title: "1 Односпальная кровать",
                        key: "single",
                    },
                    {
                        title: "2 Односпальных кровати",
                        key: "two_single",
                    },
                    {
                        title: "1 Односпальная кровать и 1 двуспальная кровать",
                        key: "single_double",
                    },
                    {
                        title: "1 Односпальная кровать и 2 двуспальные кровати",
                        key: "single_two_double",
                    },
                    {
                        title: "2 Односпальные кровати и 1 двуспальная кровать",
                        key: "two_single_double",
                    },
                ]}
                small
                border
                name={`${room}.bed_type`}
            />
        </div>
    );
};

export default ObjectsNewModalsRoomsBlockTypesBed;

import React from "react";
import {v4} from "uuid";

import {Radio} from "../../../../";

interface ObjectsNewModalsRoomsBlockYesOrNoProps {
    selectIsActive?: boolean;
    onChange?: (status: boolean) => void;
}

const ObjectsNewModalsRoomsBlockYesOrNo: React.FC<
    ObjectsNewModalsRoomsBlockYesOrNoProps
> = ({selectIsActive, onChange}) => {
    const id = v4();

    return (
        <div className="objects-new-modal-content-big-rooms-block-yes-or-no">
            <div className="objects-new-modal-content-big-rooms-block-yes-or-no-block">
                <Radio
                    name={`objects-new-modal-content-big-rooms-block-yes-or-no-${id}`}
                    label="Да"
                    value={1}
                    checked={selectIsActive}
                    onChange={(value: any) =>
                        onChange && onChange(Boolean(parseInt(value)))
                    }
                />
            </div>
            <div className="objects-new-modal-content-big-rooms-block-yes-or-no-block">
                <Radio
                    name={`objects-new-modal-content-big-rooms-block-yes-or-no-${id}`}
                    label="Нет"
                    value={0}
                    checked={!selectIsActive}
                    onChange={(value: any) =>
                        onChange && onChange(Boolean(parseInt(value)))
                    }
                />
            </div>
        </div>
    );
};

export default ObjectsNewModalsRoomsBlockYesOrNo;

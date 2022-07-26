import React from "react";
import {v4} from "uuid";

import {Radio} from "../../../";

interface ObjectsNewModalsTermsYesOrNoProps {
    selectIsActive: boolean;
    onChange?: (status: boolean) => void;
}

const ObjectsNewModalsTermsYesOrNo: React.FC<
    ObjectsNewModalsTermsYesOrNoProps
> = ({selectIsActive, onChange}) => {
    const id = v4();

    return (
        <div className="objects-new-modal-content-terms-times-possibility-from-to-yes-or-no">
            <div className="objects-new-modal-content-terms-times-possibility-from-to-yes-or-no-block">
                <Radio
                    name={`objects-new-modal-content-terms-times-possibility-from-to-yes-or-no-${id}`}
                    label="Да"
                    value={1}
                    checked={selectIsActive}
                    onChange={(value: any) =>
                        onChange && onChange(Boolean(parseInt(value)))
                    }
                />
            </div>
            <div className="objects-new-modal-content-terms-times-possibility-from-to-yes-or-no-block">
                <Radio
                    name={`objects-new-modal-content-terms-times-possibility-from-to-yes-or-no-${id}`}
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

export default ObjectsNewModalsTermsYesOrNo;

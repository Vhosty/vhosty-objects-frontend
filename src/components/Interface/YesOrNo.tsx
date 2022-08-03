import React from "react";
import {v4} from "uuid";

interface YesOrNoProps {
    onChange?: (status: boolean) => void;
}

const YesOrNo: React.FC<YesOrNoProps> = ({onChange}) => {
    const id = v4();

    return (
        <div className="yes-or-no">
            <div className="yes-or-no-item">
                <input
                    type="radio"
                    id={`yes-or-no-${id}-yes`}
                    name={`yes-or-no-${id}`}
                    value={1}
                    defaultChecked={true}
                    onChange={(e) =>
                        onChange && onChange(Boolean(parseInt(e.target.value)))
                    }
                />
                <label htmlFor={`yes-or-no-${id}-yes`}>Да</label>
            </div>

            <div className="yes-or-no-item">
                <input
                    type="radio"
                    id={`yes-or-no-${id}-no`}
                    name={`yes-or-no-${id}`}
                    value={0}
                    onChange={(e) =>
                        onChange && onChange(Boolean(parseInt(e.target.value)))
                    }
                />
                <label htmlFor={`yes-or-no-${id}-no`}>Нет</label>
            </div>
        </div>
    );
};

export default YesOrNo;

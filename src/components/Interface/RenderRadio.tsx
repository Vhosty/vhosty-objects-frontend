import React from "react";
import {v4} from "uuid";
import {WrappedFieldProps} from "redux-form";

interface RadioProps extends WrappedFieldProps {
    label: string;
    value: string | number;

    defaultChecked?: boolean;
    small?: boolean;

    onChange?: (value: string | number) => void;
}

const Radio: React.FC<RadioProps> = ({
    input,
    label,
    value,
    defaultChecked,
    small,
    onChange,
}) => {
    const id = v4();

    return (
        <div className={`radio ${small ? "small" : ""}`}>
            <input
                {...input}
                type="radio"
                id={`radio-${id}`}
                value={value}
                onChange={(e) => onChange && onChange(e.target.value)}
                defaultChecked={defaultChecked}
            />
            <label htmlFor={`radio-${id}`}>{label}</label>
        </div>
    );
};

export default Radio;

import React from "react";
import {v4} from "uuid";
import {WrappedFieldProps} from "redux-form";

interface RadioProps extends WrappedFieldProps {
    label: string;
    value_init: string | number;

    small?: boolean;
}

const RadioProps: React.FC<RadioProps> = ({
    input,
    label,
    value_init,
    small,
}) => {
    const id = v4();

    return (
        <div className={`radio ${small ? "small" : ""}`}>
            <input
                {...input}
                type="radio"
                id={`radio-${id}`}
                value={value_init}
                onChange={(e) => input.onChange(e.target.value)}
                checked={input.value == value_init ? true : false}
            />
            <label htmlFor={`radio-${id}`}>{label}</label>
        </div>
    );
};

export default RadioProps;

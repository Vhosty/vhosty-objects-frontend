import React from "react";
import {WrappedFieldProps} from "redux-form";
import TextareaAutosize from "react-textarea-autosize";

interface RenderTextareaProps extends WrappedFieldProps {
    label: string;
}

const RenderTextarea: React.FC<RenderTextareaProps> = ({
    input,
    label,
    meta: {touched, error},
}) => {
    return (
        <div className="textarea">
            <TextareaAutosize
                {...input}
                placeholder={label}
                className={`textarea__field ${touched && error ? "error" : ""}`}
            />

            {touched && error && (
                <span className="textarea__error">{error}</span>
            )}
        </div>
    );
};

export default RenderTextarea;

import React from "react";
import TextareaAutosize from "react-textarea-autosize";

interface TextareaProps {
    label: string;
}

const Textarea: React.FC<TextareaProps> = ({label}) => {
    return <TextareaAutosize placeholder={label} className={`textarea`} />;
};

export default Textarea;

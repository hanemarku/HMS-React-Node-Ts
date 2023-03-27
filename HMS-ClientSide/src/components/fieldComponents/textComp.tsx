import React from "react";


interface Props {
    text: string;
}

const TextComp: React.FC<Props> = ({ text }) => {
    return (
        <p>{text}</p>
    );
};

export default TextComp;
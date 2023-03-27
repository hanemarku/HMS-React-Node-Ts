import React from "react";


interface Props {
    type: string;
    label: string;
}

const Button: React.FC<Props> = ({type, label }) => {

    return (
        <Button type={type}  label={label}/>
    );
};

export default Button;
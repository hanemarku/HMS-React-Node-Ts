import React from "react";
import { useField } from "formik";
import "./style.sass";
import {InputProps} from "../interfaces/InputProps";


const TextArea: React.FC<InputProps> = ({ name, label, value, onChange, className }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label><br/>
            <textarea
                className={className}
                name={name}
                id={name}
                placeholder={`Enter ${label.toLowerCase()}...`}
                value={value}
                onChange={onChange} />
        </div>
    );
};

export default TextArea;
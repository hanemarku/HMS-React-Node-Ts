import React from "react";
import {InputProps} from "../interfaces/InputProps";


const Input: React.FC<InputProps> = ({ name, label, value, onChange, className }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label><br/>
            <input name={name} id={name}
                   className={className}
                   type="text"
                   placeholder={`Enter ${label.toLowerCase()}...`}
                   value={value}
                   onChange={onChange}
                   style={{backgroundColor: '#fff6f4'}}
            /><br/>
        </div>
    );
};

export default Input;
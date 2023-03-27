import React from 'react';
import "./style.sass"

interface InputProps{
    name: string;
    label: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void | boolean;
    checked: boolean;
}
export const ToggleButton: React.FC<InputProps> = ({ name, label, onChange, checked}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label><br/>
            <label className="switch">
                <input type="checkbox" onChange={onChange} checked={checked}/>
                <span className="slider round"></span>
            </label>
        </div>
    );
};

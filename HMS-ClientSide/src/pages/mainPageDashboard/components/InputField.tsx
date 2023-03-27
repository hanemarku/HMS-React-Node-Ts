import React from 'react';
import {FormProps} from "../../../components/interfaces/FormProps";

interface Props{
    type: string;
    id: string;
    label: string;
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
    name: string;
    value: string;
}
export const InputField:React.FC<Props> = ({ type, id, label, placeholder, onChange, name, value })  => {
    return (
        <div className="col-md-6">
            <div className="form-floating">
                <input type={type} className="form-control" id={id} placeholder={placeholder} onChange={onChange} name={name} value={value}/>
                <label htmlFor={id}>{label}</label>
            </div>
        </div>
    );
};


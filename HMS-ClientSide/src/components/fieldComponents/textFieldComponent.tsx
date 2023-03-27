import React from "react";
import { Field, ErrorMessage } from "formik";
import "./style.sass";


interface Props {
    label: string;
    name: string;
    type: string;
}
const InputControl: React.FC<Props> = ({ label, name, type }) => {
    return (
        <div className="input-control">
            <label htmlFor={name}>{label}</label>
            <Field type={type} name={name} className={"input-field"} label={"Name"}/>
            <ErrorMessage name={name} component="div" className="error" />
        </div>
    );
};

export default InputControl;
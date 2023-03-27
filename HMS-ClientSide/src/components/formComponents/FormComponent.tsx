
import React from "react";
import "./form.sass";
interface FormProps {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    buttonText: string;
    children: React.ReactNode;
}
export const FormComponent: React.FC<FormProps> = ({ onSubmit, buttonText, children }) => {
    return (
        <form className="form" onSubmit={onSubmit}>
            {children}
            <input type="submit" value={buttonText} />
        </form>
    );
};
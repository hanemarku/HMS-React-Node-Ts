import React from "react";

export interface InputProps {
    name: string;
    label: string;
    value: string | number;
    className: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
}
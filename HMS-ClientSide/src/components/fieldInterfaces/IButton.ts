import React from "react";


export interface IButton {
    variant?: string;
    color?: string;
    text?: string;

    onClick?: (
        e:
            | React.MouseEvent<HTMLButtonElement>
            | React.MouseEvent<HTMLAnchorElement>
    ) => void;
}
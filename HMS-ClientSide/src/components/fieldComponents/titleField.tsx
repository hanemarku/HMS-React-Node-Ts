import React, {FC, ReactElement} from "react";
import { TextField } from "@mui/material";
import { ITextField } from "../fieldInterfaces/ITextField";
import PropTypes from "prop-types";

export const TitleField: FC<ITextField> = (
    props
): ReactElement =>{
    const { onChange = (e) => console.log(e),
        disabled = false,
    } = props;
    return (
        <TextField
            id={"title"}
            label={"Title"}
            placeholder={"Title"}
            variant={"outlined"}
            size={"small"}
            name={"title"}
            fullWidth
            disabled={disabled}
            onChange={onChange}
        />
    );
};

TitleField.propTypes = {
    onChange: PropTypes.func,
    disabled: PropTypes.bool
};
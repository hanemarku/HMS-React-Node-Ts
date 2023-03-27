import React, {FC, ReactElement} from "react";
import { TextField } from "@mui/material";
import {ITextField} from "../fieldInterfaces/ITextField";
import PropTypes from "prop-types";
import {TitleField} from "./titleField";

export const DescriptionField: FC<ITextField> = (
    props
): ReactElement =>{
    const { onChange = (e) => console.log(e),
        disabled = false,
    } = props;
    return (
        <TextField
            id={"description"}
            label={"Description"}
            placeholder={"Description"}
            variant={"outlined"}
            size={"small"}
            name={"description"}
            multiline
            rows={4}
            fullWidth
            onChange={onChange}
            disabled={disabled}
        />
    );
};

DescriptionField.propTypes = {
    onChange: PropTypes.func,
    disabled: PropTypes.bool
};
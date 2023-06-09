import React, { FC, ReactElement , useState} from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker} from "@mui/x-date-pickers";
import {TextField} from "@mui/material";
import {IDateField} from "../fieldInterfaces/IDateField";
import PropTypes from "prop-types";

export const DateField: FC<IDateField> = (
        props,
): ReactElement => {
    const { value = new Date(),
        disabled = false,
        onChange = (date) => console.log(date)
    } = props;

    const [date, setDate] = useState<Date | null>(null);

    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                    label="Task Date"
                    inputFormat="dd/MM/yyyy"
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    renderInput={(params) => (
                        <TextField {...params} />
                    )}
                />
            </LocalizationProvider>
        </>
    );
};

DateField.propTypes = {
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    value: PropTypes.instanceOf(Date),

};
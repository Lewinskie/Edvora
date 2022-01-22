import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
    select: {
        color: "#ffffff",
        width: "100%",
        "& .MuiInputLabel-outlined": {
            color: "#ffffff"
        },
        "& .MuiOutlinedInput-root":{
            borderRadius: 5,
        },
        "& .MuiOutlinedInput-notchedOutline": {
            background: "#232323",
        },
        "& .MuiSelect-root":{
            zIndex: 2,
            color: "#ffffff",
        },
        "& .MuiSelect-icon": {
            color: "#ffffff",
            zIndex: 2,
        }
    },
}));

const Select = ({ children, onChange, value, label, ...rest }) => {
    const classes = useStyles();

    return (
        <TextField
            id="products-select"
            select
            label={label}
            value={value}
            onChange={onChange}
            className={classes.select}
            margin="dense"
            variant="outlined"
            {...rest}
        >
            {children}
        </TextField>
    )
};

Select.propTypes = {
    children: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.any.isRequired,
    label: PropTypes.string.isRequired
}

export default React.memo(Select);

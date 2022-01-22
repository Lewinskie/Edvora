import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    // CSS FOR THE PAGE TITLE
    title: {
        fontFamily: "SF Pro Display",
        fontWeight: "bold",
        fontSize: "35px",
        lineHeight: "42px",
        color: "rgba(255, 255, 255, 0.87)",
        textShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
    // CSS FOR PAGE SUBHEADING
    subHeading: {
        fontFamily: "SF Pro Display",
        fontWeight: "500",
        fontSize: "25px",
        lineHeight: "30px",
        color: "rgba(255, 255, 255, 0.5)",
        textShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
        marginTop: theme.spacing(1),
    },
}));
const EdvoraTitle = ({ title, subHeading }) => {
    const classes = useStyles();
    return (
        <>
            <Typography className={classes.title} variant="h2">{title}</Typography>
            <Typography className={classes.subHeading} variant="h3">{subHeading}</Typography>
        </>
    )
};

EdvoraTitle.propTypes = {
    title: PropTypes.string,
    subHeading: PropTypes.string
}

export default React.memo(EdvoraTitle);

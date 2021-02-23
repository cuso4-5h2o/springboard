import { makeStyles } from "@material-ui/core/styles";

import theme from "../theme";

const useStyles = makeStyles({
    label: {
        display: "inline-block",
        padding: "0 10px",
        lineHeight: "1.5",
        fontSize: "12px",
        verticalAlign: "middle",
        whiteSpace: "nowrap",
        borderRadius: "2px",
        textTransform: "uppercase",
        marginTop: "2px"
    },
    info: {
        background: theme.palette.primary.main,
        color: theme.palette.background.default
    }
});

function Label({ type="info", className="", children }) {
    const classes = useStyles();
    return (
        <span className={`${classes.label} ${classes[type]} ${className}`}>{children}</span>
    )
}

export default Label;

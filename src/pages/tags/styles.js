import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%",
  },
  overrideIndex: {
    zIndex: 2,
  },
  priceInput: {
    padding: "17px 14px",
    font: "inherit",
    fontSize: "1rem",
  },
}));

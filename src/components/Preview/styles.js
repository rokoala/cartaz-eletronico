import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  imgPreview: {
    width: "100%",
    height: "100%",
  },
  previewCss: {
    position: "relative",
    width: "211mm",
    height: "29.7cm",
    "@media print": {
      transformOrigin: "0 0 !important",
      transform: "scale(1) !important",
    },
  },
  mainDescriptionPreview: {
    position: "absolute",
    top: "6.5cm",
    left: "25%",
    width: "50%",
    height: "3cm",
    textAlign: "center",
    whiteSpace: "pre-wrap",
  },
  mainDescriptionLabel: {
    height: "100%",
  },
  subDescriptionPreview: {
    display: "flex",
    position: "absolute",
    width: "100%",
    top: "9.5cm",
    whiteSpace: "pre-wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  subDescriptionLabel: {
    fontFamily: "Helvetica",
    fontSize: "2rem",
    fontWeight: "bolder",
  },
  metricPreview: {
    position: "absolute",
    top: "12cm",
    width: "6cm",
    textAlign: "center",
    whiteSpace: "pre-wrap",
  },
  metricLabel: {
    fontFamily: "Helvetica",
    fontSize: "0.8cm",
    marginLeft: "2cm",
    lineHeight: "1cm",
    fontWeight: "bolder",
  },
  verticalSplit: {
    color: "red",
    fontSize: "1cm",
    verticalAlign: "bottom",
  },
  pricePreview: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: "15cm",
    width: "100%",
    whiteSpace: "pre-wrap",
    fontFamily: "Helvetica",
    fontWeight: "bolder",
    color: "red",
  },
  priceWrapper: {
    lineHeight: 0.85,
  },
  printBtn: {
    margin: "1rem",
  },
  previewWrapper: {
    overflow: "scroll",
    backgroundColor: "lightgray",
    maxHeight: "70vh",
  },
}));

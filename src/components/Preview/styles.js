import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  imgPreview: {
    width: "100%",
    height: "100%",
  },
  previewCss: ({ size }) => {
    switch (size) {
      case "A4V":
        return {
          position: "relative",
          width: "210mm",
          height: "29.69cm",
        };
      case "A4H":
        return {
          position: "relative",
          height: "209.9mm",
          width: "297mm",
        };
      default:
        return {};
    }
  },
  printable: {
    "@media print": {
      transformOrigin: "0 0 !important",
      transform: "scale(1) !important",
    },
  },
  mainDescriptionPreview: ({ size }) => {
    switch (size) {
      case "A4V":
        return {
          position: "absolute",
          top: "6.5cm",
          // left: "25%",
          width: "100%",
          height: "3cm",
          textAlign: "center",
          whiteSpace: "pre-wrap",
        };
      case "A4H":
        return {
          position: "absolute",
          top: "9cm",
          left: "0%",
          width: "50%",
          height: "5cm",
          textAlign: "center",
          whiteSpace: "pre-wrap",
        };
      default:
        return {};
    }
  },
  subDescriptionPreview: ({ size }) => {
    switch (size) {
      case "A4V":
        return {
          display: "flex",
          position: "absolute",
          width: "100%",
          top: "9.5cm",
          whiteSpace: "pre-wrap",
          alignItems: "center",
          justifyContent: "center",
        };
      case "A4H":
        return {
          display: "flex",
          position: "absolute",
          width: "50%",
          top: "15cm",
          whiteSpace: "pre-wrap",
          alignItems: "center",
          justifyContent: "center",
        };
      default:
        return {};
    }
  },
  subDescriptionLabel: {
    fontFamily: "Helvetica",
    fontSize: "2.5rem",
    fontWeight: "bolder",
  },
  metricPreview: ({ size }) => {
    switch (size) {
      case "A4V":
        return {
          position: "absolute",
          top: "14cm",
          width: "6cm",
          textAlign: "center",
          whiteSpace: "pre-wrap",
        };
      case "A4H":
        return {
          position: "absolute",
          top: "9.5cm",
          left: "50%",
          textAlign: "center",
          whiteSpace: "pre-wrap",
        };
      default:
        return {};
    }
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
  pricePreview: ({ size }) => {
    switch (size) {
      case "A4V":
        return {
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
        };
      case "A4H":
        return {
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "50%",
          left: "50%",
          top: "10.5cm",
          whiteSpace: "pre-wrap",
          fontFamily: "Helvetica",
          fontWeight: "bolder",
          color: "red",
        };
      default:
        return {};
    }
  },
  printBtn: {
    margin: "1rem",
  },
  previewWrapper: {
    overflow: "scroll",
    backgroundColor: "lightgray",
    maxHeight: "70vh",
  },
  fromToLabel: ({ size }) => {
    switch (size) {
      case "A4V":
        return {
          position: "absolute",
          top: "10.7cm",
          fontWeight: "bold",
          fontSize: "30px",
          textAlign: "left",
          left: "75px",
        };
      case "A4H":
        return {
          position: "absolute",
          top: "6cm",
          fontWeight: "bold",
          fontSize: "30px",
          textAlign: "left",
          left: "630px",
        };
      default:
        return {};
    }
  },
  lineNumber: {
    position: "absolute",
    width: "110%",
    backgroundColor: "#ff2626",
    height: "3px",
    left: 0,
    right: 0,
    top: "45%",
    transform: "rotate(-12deg)",
  },
  originalPrice: {
    position: "relative",
    fontSize: "50px",
  },
}));

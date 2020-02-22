import React from "react";
import useStyles from "./styles";

function digits_count(n) {
  var count = 0;
  if (n >= 1) ++count;

  while (n / 10 >= 1) {
    n /= 10;
    ++count;
  }

  return count;
}

const PricePreview = ({ price }) => {
  const classes = useStyles();
  const aPrice = price.split(",");

  const firstDigitSize = digits_count(
    parseInt(aPrice[0].split(".").join(""), 10),
  );
  const resizeFactor = firstDigitSize >= 2 ? 1.9 / firstDigitSize : 1;

  const firstDigitStyle = { fontSize: 450 * resizeFactor + "px" };
  const secondDigitStyle = {
    verticalAlign: "top",
    fontSize: 200 * resizeFactor + "px",
  };

  return (
    <div className={classes.priceWrapper}>
      <span style={firstDigitStyle}>{aPrice[0]}</span>
      <span style={secondDigitStyle}>{"," + aPrice[1]}</span>
    </div>
  );
};

export default PricePreview;

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

const PricePreview = ({
  price,
  firstDigitInitialSize = 500,
  secondDigitInitialSize = 250,
}) => {
  // const classes = useStyles();
  const aPrice = price.split(",");

  const firstDigitSize = digits_count(
    parseInt(aPrice[0].split(".").join(""), 10),
  );
  const resizeFactor = firstDigitSize > 1 ? 1.6 / firstDigitSize : 1;

  const firstDigitStyle = {
    fontSize: firstDigitInitialSize * resizeFactor + "px",
    lineHeight: 0.85 * (1 / resizeFactor),
  };
  const secondDigitStyle = {
    // verticalAlign: "top",
    fontSize: secondDigitInitialSize * resizeFactor + "px",
    lineHeight: 0.85 * ((1 / resizeFactor) * 1.65),
  };

  // const wrapperStyle = {
  //   lineHeight: 0.85 * (1 / resizeFactor),
  // };

  return (
    <div>
      <span style={firstDigitStyle}>{aPrice[0]}</span>
      <span style={secondDigitStyle}>{"," + aPrice[1]}</span>
    </div>
  );
};

export default PricePreview;

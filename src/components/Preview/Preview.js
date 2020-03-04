import React, { useRef, useState } from "react";
import useStyles from "./styles";
import { Button } from "@material-ui/core/";
import ReactToPrint from "react-to-print";
import Slider from "@material-ui/core/Slider";
import PricePreview from "./PricePreview";

export default function Preview({ size, product, themeSrc }) {
  const classes = useStyles({ size: size.name });
  const defaultZoomLevel = 0.5;
  const componentRef = useRef();
  const [zoom, setZoom] = useState(defaultZoomLevel);

  const previewStyle = {
    transformOrigin: "0 0",
    transform: `scale(${zoom})`,
  };

  const aMainDescription = product.mainDescription.split("\n");

  let pageSize;
  let mainDescriptionStyle = {};
  let firstDigitInitialSize = 500;
  let secondDigitInitialSize = 250;

  switch (size.name) {
    case "A4V":
      pageSize = "210mm 297mm";
      mainDescriptionStyle = {
        fontSize: 80 / aMainDescription.length + "px",
      };
      break;
    case "A4H":
      pageSize = "297mm 210mm";
      mainDescriptionStyle = {
        fontSize: 155 / aMainDescription.length + "px",
      };
      firstDigitInitialSize = 370;
      secondDigitInitialSize = 120;
      break;
    default:
      break;
  }

  const marks = [
    {
      value: 0.01,
      label: "1%",
    },
    {
      value: 1,
      label: "100%",
    },
  ];

  return (
    <>
      <div>
        <ReactToPrint
          pageStyle={`@media print { @page {size: ${pageSize} } }`}
          onBeforePrint={() => {}}
          trigger={() => (
            <Button
              className={classes.printBtn}
              variant="contained"
              color="primary"
            >
              Imprimir cartaz
            </Button>
          )}
          content={() => componentRef.current}
        />
        <Slider
          max={1}
          min={0.01}
          step={0.01}
          defaultValue={defaultZoomLevel}
          marks={marks}
          valueLabelDisplay="auto"
          valueLabelFormat={val => Math.floor(val * 100) + "%"}
          onChange={(_, value) => {
            setZoom(value);
          }}
        />
      </div>
      <div className={classes.previewWrapper}>
        <div
          ref={componentRef}
          className={`${classes.previewCss} ${classes.printable}`}
          style={previewStyle}
        >
          <img
            alt="preview.jpg"
            className={classes.imgPreview}
            src={themeSrc}
          ></img>
          <div
            className={classes.mainDescriptionPreview}
            style={mainDescriptionStyle}
          >
            {product.mainDescription.split("\n").map(chunk => (
              <>
                <span>{chunk}</span>
                <br />
              </>
            ))}
          </div>
          <div className={classes.subDescriptionPreview}>
            <div className={classes.subDescriptionLabel}>
              {product.subDescription}
            </div>
          </div>
          <div className={classes.metricPreview}>
            <div className={classes.metricLabel}>
              R$<span className={classes.verticalSplit}>|</span>
              {product.metric}
            </div>
          </div>
          <div className={classes.pricePreview}>
            <PricePreview
              firstDigitInitialSize={firstDigitInitialSize}
              secondDigitInitialSize={secondDigitInitialSize}
              price={product.price}
            />
          </div>
        </div>
      </div>
    </>
  );
}

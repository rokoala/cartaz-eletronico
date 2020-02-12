import React, { useRef, useState } from "react";
import { Textfit } from "react-textfit";
import useStyles from "./styles";
import { Button } from "@material-ui/core/";
import ReactToPrint from "react-to-print";
import Slider from "@material-ui/core/Slider";

export default function Preview({ product }) {
  const classes = useStyles();
  const componentRef = useRef();
  const [zoom, setZoom] = useState(0.5);

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

  const previewCss = {
    position: "relative",
    width: "21cm",
    height: "29.7cm",
    "transform-origin": "0 0",
    "-moz-transform-origin": "0 0",
    transform: `scale(${zoom})`,
  };

  return (
    <>
      <div>
        <ReactToPrint
          bodyClass={"A4"}
          pageStyle="body{ background-color:'black' }"
          trigger={() => (
            <Button
              onClick={() => {}}
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
          defaultValue={zoom}
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
          // style={previewCss}
          className={classes.previewCss}
        >
          <img
            alt="preview.jpg"
            className={classes.imgPreview}
            src="/oferta.jpeg"
          ></img>
          <div className={classes.mainDescriptionPreview}>
            <Textfit className={classes.mainDescriptionLabel} mode="multi">
              {product.mainDescription.split("\n").map(chunk => (
                <>
                  <span>{chunk}</span>
                  <br />
                </>
              ))}
            </Textfit>
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
            <Textfit className={classes.priceLabel} mode="single" max={800}>
              <span className={classes.priceLabelInteger}>
                {product.price.split(",")[0]}
              </span>
              <span className={classes.priceLabelDecimal}>
                {"," + product.price.split(",")[1]}
              </span>
            </Textfit>
          </div>
        </div>
      </div>
    </>
  );
}

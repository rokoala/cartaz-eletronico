import React, { useRef, useState } from "react";
import { Textfit } from "react-textfit";
import useStyles from "./styles";
import { Button } from "@material-ui/core/";
import ReactToPrint from "react-to-print";
import Slider from "@material-ui/core/Slider";
import PricePreview from "./PricePreview";

export default function Preview({ product }) {
  const classes = useStyles();
  const componentRef = useRef();
  const [zoom, setZoom] = useState(0.5);

  const previewStyle = {
    transformOrigin: "0 0",
    transform: `scale(${zoom})`,
  };

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
          bodyClass={"A4"}
          pageStyle="body{ background-color:'black' }"
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
          className={classes.previewCss}
          style={previewStyle}
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
            <PricePreview price={product.price} />
          </div>
        </div>
      </div>
    </>
  );
}

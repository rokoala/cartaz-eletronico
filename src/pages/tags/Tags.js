import React from "react";
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import Preview from "../../components/Preview";
import {
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import CreatableSelect from "react-select/creatable";
import useStyles from "./styles";
import { mockData, productsDemo, metricHint } from "./data";
import CurrencyInput from "react-currency-input";
import BigText from "../../components/Preview/BigText";

const Tags = () => {
  const classes = useStyles();

  const initialProduct = {
    name: "",
    mainDescription: "",
    subDescription: "",
    metric: "",
    price: "0,00",
    originalPrice: "0,00",
  };

  const [type, setType] = React.useState({
    id: "",
  });

  const [size, setSize] = React.useState("");
  const [theme, setTheme] = React.useState("");

  const handleChangeType = (event) => {
    setType(mockData.types[event.target.value]);
    setSize("");
    setTheme("");
    setProduct({ ...initialProduct });
  };

  const [product, setProduct] = React.useState({
    ...initialProduct,
  });

  const handleProductChange = (newValue) => {
    // if is a new product
    if (newValue.value === newValue.label) {
      setProduct({
        name: newValue.label,
        mainDescription: "",
        subDescription: "",
        metric: "",
        price: "",
      });
    } else {
      setProduct({ ...newValue.value, name: newValue.label });
    }
  };

  const handlePropertyProductChange = (name) => (event) => {
    setProduct({ ...product, [name]: event.target.value });
  };

  return (
    <>
      <PageTitle title="Criar cartaz" />
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Widget title="Modelo" disableWidgetMenu>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="type">Dinâmica Comercial</InputLabel>
                  <Select value={type.id} onChange={handleChangeType}>
                    {mockData.types.map((type) => (
                      <MenuItem key={type.id} value={type.id}>
                        {type.display}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {type.sizes && (
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="type">Tamanho</InputLabel>
                    <Select
                      value={size}
                      onChange={(event) => {
                        setSize(event.target.value);
                      }}
                    >
                      {type.sizes.map((size) => (
                        <MenuItem key={size.name} value={size}>
                          {size.display}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
                {type.themes && (
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="type">Campanha</InputLabel>
                    <Select
                      value={theme}
                      onChange={(event) => {
                        setTheme(event.target.value);
                      }}
                    >
                      {type.themes.map((_theme) => (
                        <MenuItem key={_theme.name} value={_theme}>
                          {_theme.display}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
              </Widget>
            </Grid>
            {size && theme && (
              <>
                <Grid item xs={12}>
                  <Widget title="Descrição" disableWidgetMenu>
                    <div className={classes.formControl}>
                      <InputLabel htmlFor="type">Produto</InputLabel>
                      <CreatableSelect
                        className={classes.overrideIndex}
                        isClearable
                        onChange={handleProductChange}
                        options={productsDemo}
                      />
                    </div>
                    <FormControl className={classes.formControl}>
                      <TextField
                        InputLabelProps={{
                          shrink: true,
                        }}
                        label="Descrição principal"
                        multiline
                        rows="5"
                        margin="normal"
                        variant="outlined"
                        value={product.mainDescription}
                        onChange={handlePropertyProductChange(
                          "mainDescription",
                        )}
                      />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                      <TextField
                        InputLabelProps={{ shrink: true }}
                        label="Descrição secundária"
                        margin="normal"
                        variant="outlined"
                        value={product.subDescription}
                        onChange={handlePropertyProductChange("subDescription")}
                      />
                    </FormControl>
                    <div className={classes.formControl}>
                      <InputLabel htmlFor="type">Unidade da venda</InputLabel>
                      <CreatableSelect
                        className={classes.overrideIndex}
                        value={{ label: product.metric, value: product.metric }}
                        isClearable
                        onChange={(newValue) => {
                          setProduct({ ...product, metric: newValue.value });
                        }}
                        options={metricHint}
                      />
                    </div>
                  </Widget>
                </Grid>
                <Grid item xs={12}>
                  <Widget title="Preço" disableWidgetMenu>
                    <FormControl className={classes.formControl}>
                      {type.name === "de_por" && (
                        <>
                          <Typography>Preço</Typography>
                          <CurrencyInput
                            value={product.originalPrice}
                            decimalSeparator=","
                            thousandSeparator="."
                            precision="2"
                            className={classes.priceInput}
                            onChangeEvent={(event, maskedvalue) => {
                              setProduct({
                                ...product,
                                originalPrice: maskedvalue,
                              });
                            }}
                          />
                        </>
                      )}
                      <Typography>
                        Preço {type.name === "de_por" && "Promocional"}
                      </Typography>
                      <CurrencyInput
                        value={product.price}
                        decimalSeparator=","
                        thousandSeparator="."
                        precision="2"
                        className={classes.priceInput}
                        onChangeEvent={(event, maskedvalue) => {
                          setProduct({ ...product, price: maskedvalue });
                        }}
                      />
                    </FormControl>
                  </Widget>
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          {size && theme && (
            <Widget title="Visualização" disableWidgetMenu>
              <Preview
                size={size}
                typeName={type.name}
                themeSrc={theme.source[size.type]}
                product={product}
              />
            </Widget>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default Tags;

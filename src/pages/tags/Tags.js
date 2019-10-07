import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import {
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
  },
}));

const mockData = {
  types: [
    {
      id: 0,
      display: "à vista",
      sizes: [
        {
          name: "A4H",
          display: "A4 Horizontal",
        },
        {
          name: "A4V",
          display: "A4 Vertical",
        },
        {
          name: "A5H",
          display: "A5 Horizontal",
        },
        {
          name: "A5V",
          display: "A5 Vertical",
        },
      ],
      themes: [
        {
          name: "OFERTA",
          display: "OFERTA",
        },
      ],
    },
    {
      id: 1,
      display: "à vista parcelado",
      sizes: [
        {
          name: "A4H",
          display: "A4 Horizontal",
        },
        {
          name: "A4V",
          display: "A4 Vertical",
        },
        {
          name: "A5H",
          display: "A5 Horizontal",
        },
        {
          name: "A5V",
          display: "A5 Vertical",
        },
      ],
      themes: [
        {
          name: "OFERTA",
          display: "OFERTA",
        },
      ],
    },
    {
      id: 2,
      display: "comunicado",
      sizes: [
        {
          name: "A4H",
          display: "A4 Horizontal",
        },
        {
          name: "A4V",
          display: "A4 Vertical",
        },
        {
          name: "A5H",
          display: "A5 Horizontal",
        },
        {
          name: "A5V",
          display: "A5 Vertical",
        },
      ],
      themes: [
        {
          name: "OFERTA",
          display: "OFERTA",
        },
      ],
    },
    {
      id: 3,
      display: "de por",
      sizes: [
        {
          name: "A4H",
          display: "A4 Horizontal",
        },
        {
          name: "A4V",
          display: "A4 Vertical",
        },
        {
          name: "A5H",
          display: "A5 Horizontal",
        },
        {
          name: "A5V",
          display: "A5 Vertical",
        },
      ],
      themes: [
        {
          name: "OFERTA",
          display: "OFERTA",
        },
      ],
    },
    {
      id: 4,
      display: "de por parcelado",
      sizes: [
        {
          name: "A3H",
          display: "A3 Horizontal",
        },
        {
          name: "A3V",
          display: "A3 Vertical",
        },
        {
          name: "A4H",
          display: "A4 Horizontal",
        },
        {
          name: "A4V",
          display: "A4 Vertical",
        },
      ],
      themes: [
        {
          name: "OFERTA",
          display: "OFERTA",
        },
      ],
    },
  ],
};

const productsDemo = [
  {
    name: "SKOL 269 PURO MALTE - SKOL PURO MALTE",
    mainDescription: "SKOL\nPURO MALTE",
    subDescription: "269ml",
    metric: "UNIDADE",
  },
];

const metricHint = ["UNIDADE", "400g", "PACOTE", "BANDEJA"];

export default function Tags() {
  const classes = useStyles();

  const [type, setType] = React.useState({
    id: "",
  });

  const [size, setSize] = React.useState("");
  const [theme, setTheme] = React.useState("");
  const [product, setProduct] = React.useState("");
  const [metric, setMetric] = React.useState("");

  const handleChange = event => {
    setType(mockData.types[event.target.value]);
    setSize("");
    setTheme("");
  };

  return (
    <>
      <PageTitle title="Criar cartaz" />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Widget title="Modelo" disableWidgetMenu>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="type">Dinâmica Comercial</InputLabel>
                  <Select value={type.id} onChange={handleChange}>
                    {mockData.types.map(type => (
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
                      onChange={event => {
                        setSize(event.target.value);
                      }}
                    >
                      {type.sizes.map(size => (
                        <MenuItem key={size.name} value={size.name}>
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
                      onChange={event => {
                        setTheme(event.target.value);
                      }}
                    >
                      {type.themes.map(theme => (
                        <MenuItem key={theme.name} value={theme.name}>
                          {theme.display}
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
                    <FormControl className={classes.formControl}>
                      <InputLabel htmlFor="type">Produto</InputLabel>
                      <Select
                        value={product}
                        onChange={event => {
                          setProduct(event.target.value);
                        }}
                      >
                        {productsDemo.map(product => (
                          <MenuItem key={product.name} value={product.name}>
                            {product.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                      <TextField
                        label="Descrição principal"
                        multiline
                        rows="5"
                        margin="normal"
                        variant="outlined"
                      />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                      <TextField
                        label="Descrição secundária"
                        margin="normal"
                        variant="outlined"
                      />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                      <InputLabel htmlFor="type">Unidade da venda</InputLabel>
                      <Select
                        value={metric}
                        onChange={event => {
                          setMetric(event.target.value);
                        }}
                      >
                        {metricHint.map(metric => (
                          <MenuItem key={metric} value={metric}>
                            {metric}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Widget>
                </Grid>
                <Grid item xs={12}>
                  <Widget title="Preço" disableWidgetMenu></Widget>
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Widget title="Visualização" disableWidgetMenu>
            <img width="100%" src="/oferta.jpeg"></img>
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}

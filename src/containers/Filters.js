import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import FormControl from "@material-ui/core/FormControl";
import Select from "../components/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Card from "@material-ui/core/Card";
import getUniqueStates from "../utils/getUniqueStates";
import getUniqueCities from "../utils/getUniqueCities";

const useStyles = makeStyles((theme) => ({
  filterContainer: {
    height: "auto",
    background: "#131313",
    borderRadius: "15px",
  },
  filters: {
    fontFamily: "SF Pro Display",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: "20px",
    lineHeight: "24px",
    color: "#A5A5A5",
  },
  divider: {
    backgroundColor: "#CBCBCB",
  },
  formControl: {
    margin: theme.spacing(1),
    width: "100%",
  },
}));

const Filters = ({ products, width }) => {
  const classes = useStyles();
  const [activeProduct, setActiveProduct] = useState({});
  const [activeState, setActiveState] = useState({});
  const [activeCity, setActiveCity] = useState({});

  const selectActiveProduct = (event) => {
    setActiveProduct({
      date: event.target.value,
    });
  };

  const selectActiveState = (event) => {
    setActiveState({
      state: event.target.value,
    });
  };
  const selectActiveCity = (event) => {
    setActiveCity({
      city: event.target.value,
    });
  };

  const getStates = (selectedProduct) => {
    // by default it will always return unique states
    // once a product is selected, it then returns the state array in that product
    let states;
    if (selectedProduct.date) {
      states = products.filter((item) => item.date === selectedProduct.date);
      states[0].state = states[0].address.state;
    } else {
      states = getUniqueStates(products);
    }
    return states;
  };

  const getCities = (selectedProduct) => {
    // by default it will always return unique states
    // once a product is selected, it then returns the state array in that product
    let cities;
    if (selectedProduct.date) {
      cities = products.filter((item) => item.date === selectedProduct.date);
      cities[0].city = cities[0].address.city;
    } else {
      cities = getUniqueCities(products);
    }
    return cities;
  };
  return (
    <Card className={classes.filterContainer} style={{ width }}>
      <CardContent>
        <Typography className={classes.filters}>Filters</Typography>
        <Divider className={classes.divider} />
        <form action="#">
          <FormControl variant="outlined" className={classes.formControl}>
            <Select
              onChange={selectActiveProduct}
              value={activeProduct.date || ""}
              label="Products"
            >
              {products.length > 0 ? (
                products.map((option) => (
                  <MenuItem key={option.date} value={option.date}>
                    {option.product_name}
                  </MenuItem>
                ))
              ) : (
                <MenuItem value="">None</MenuItem>
              )}
            </Select>
          </FormControl>
          <FormControl variant="outlined" className={classes.formControl}>
            <Select
              onChange={selectActiveState}
              value={activeState.state || ""}
              label="States"
            >
              {products.length > 0 ? (
                getStates(activeProduct).map((option) => (
                  <MenuItem key={option.state} value={option.state}>
                    {option.state}
                  </MenuItem>
                ))
              ) : (
                <MenuItem value="">None</MenuItem>
              )}
            </Select>
          </FormControl>
          <FormControl variant="outlined" className={classes.formControl}>
            <Select
              onChange={selectActiveCity}
              value={activeCity.city || ""}
              label="Cities"
            >
              {products.length > 0 ? (
                getCities(activeProduct).map((option) => (
                  <MenuItem key={option.city} value={option.city}>
                    {option.city}
                  </MenuItem>
                ))
              ) : (
                <MenuItem value="">None</MenuItem>
              )}
            </Select>
          </FormControl>
        </form>
      </CardContent>
    </Card>
  );
};

Filters.propTypes = {
  products: PropTypes.array,
};

export default React.memo(Filters);

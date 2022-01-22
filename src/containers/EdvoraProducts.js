import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Alert from '@material-ui/lab/Alert';
import Box from '@material-ui/core/Box';
import categorizeByBrand from "../utils/categorizeByBrand";
import Typography from "@material-ui/core/Typography";
import ProductCard from "../components/ProductCard";
import EdvoraTitle from "./EdvoraTitle";

const useStyles = makeStyles(theme => ({
    productsTitle: {
        fontFamily: "Roboto",
        fontWeight: "normal",
        fontSize: "20px",
        lineHeight: "23px",
        color: "#FFFFFF",
    },
    topProducts: {
        background: "#131313",
        borderRadius: "15px",
        display: "flex",
        overflowY: "hidden",
    },
}));
const EdvoraProducts = ({ products }) => {
  const classes = useStyles();
  return (
      <>
          <EdvoraTitle title="Edvora" subHeading="Products" />
          <Box mt={1}>
              {products.length > 0 ? categorizeByBrand(products).map(item => (
                  <div key={item.brandName}>
                      <Typography className={classes.productsTitle} variant="h4">{item.brandName}</Typography>
                      <Box className={classes.topProducts} mt={1} mb={1}>
                          {item.products.length > 0 ? (
                              <>
                                  {item.products.map((product) => (
                                      <ProductCard product={product} key={product.date} />
                                  ))}
                              </>
                          ) : (
                              <Alert severity="warning" style={{ width: "100%" }}>Sorry we do not have any products in <strong>{item.brandName}</strong></Alert>
                          )}
                      </Box>
                  </div>
              )) : (
                  <Alert severity="warning" style={{ width: "100%" }}>Sorry we do not have any brands currently</Alert>
              )}
          </Box>
      </>
  )
};

EdvoraProducts.propTypes = {
    products: PropTypes.array,
}

export default React.memo(EdvoraProducts);

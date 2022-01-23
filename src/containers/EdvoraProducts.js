import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Alert from '@material-ui/lab/Alert';
import Box from '@material-ui/core/Box';
import categorizeByBrand from "../utils/categorizeByBrand";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
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
        // display: "flex",
        // overflowY: "hidden",
    },
    divider: {
        backgroundColor: "rgba(203, 203, 203, 0.5)",
        marginBottom: theme.spacing(3),
        marginTop: theme.spacing(1)
    }
}));
const EdvoraProducts = ({ products }) => {
  const classes = useStyles();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
      <>
          <EdvoraTitle title="Edvora" subHeading="Products" />
          <Box mt={1}>
              {products.length > 0 ? categorizeByBrand(products).map(item => (
                  <div key={item.brandName} style={{ marginBottom: 40 }}>
                      <Typography className={classes.productsTitle} variant="h4">{item.brandName}</Typography>
                      <Divider className={classes.divider} />
                      <Box className={classes.topProducts} mt={1} mb={1}>
                          {item.products.length > 0 ? (
                              <Slider {...settings}>
                                     {item.products.map((product) => (
                                      <ProductCard product={product} key={product.date} />
                                  ))}
                              </Slider>
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

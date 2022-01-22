import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Filters from "../containers/Filters";
import EdvoraProducts from "../containers/EdvoraProducts";

function Homepage() {
  // css styling for home page
  const useStyles = makeStyles((theme) =>({
    container: {
      paddingTop: theme.spacing(8),
    },
    gridLeft: {
      [theme.breakpoints.up("lg")]: {
        position: "fixed",
      }
    },
    // BOTTOM PRODUCTS CONTAINER CSS
    bottomProductsContainer: {
      background: "#131313",
      borderRadius: "15px",
    },
  }));
  //assigning home class to useStyles
  const home = useStyles();

  //STATE FOR HOLDING THE PRODUCTS
  const [products, setProducts] = useState([]);
  const ref = React.useRef(null);
  const [leftDivWidth, setLeftDivWidth] = React.useState(300);

  // IMPORT DATA USING AXIOS
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios("https://assessment-edvora.herokuapp.com/");
        return setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    const setGridWidthState = () => {
      const width = ref.current ? ref.current.offsetWidth - 20 : 0;
      setLeftDivWidth(width);
    };
    setGridWidthState();
    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 3,
  };
  return (
    <Container maxWidth="lg" className={home.container}>
      {/* building container for filter section */}
      <Grid container spacing={1}>
        <Grid item lg={3} xl={3} sm={3} xs={12} ref={ref}>
          <div className={home.gridLeft}>
            <Filters products={products} width={leftDivWidth} />
          </div>
        </Grid>
        <Grid item lg={9} xl={9} sm={9} xs={12}>
          <EdvoraProducts products={products} />
          <div className={home.bottomProductsContainer}>
            <Slider {...settings}></Slider>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Homepage;

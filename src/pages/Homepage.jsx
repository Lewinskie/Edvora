import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { useEffect, useState } from "react";
import axios from "axios";
import Filters from "../containers/Filters";
import EdvoraProducts from "../containers/EdvoraProducts";

function Homepage() {
  // css styling for home page
  const useStyles = makeStyles((theme) => ({
    container: {
      paddingTop: theme.spacing(8),
    },
    gridLeft: {
      [theme.breakpoints.up("lg")]: {
        position: "fixed",
      },
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
  return (
    <Container maxWidth="lg" className={home.container}>
      {/* building container for filter section */}
      <Grid container spacing={3}>
        <Grid item lg={3} xl={3} sm={3} xs={12} ref={ref}>
          <div className={home.gridLeft}>
            <Filters products={products} width="100%" />
          </div>
        </Grid>
        <Grid item lg={9} xl={9} sm={9} xs={12} style={{ paddingLeft: 20 }}>
          <EdvoraProducts products={products} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Homepage;

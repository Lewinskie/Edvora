import React from "react";
import ProductCard from "../components/ProductCard";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";
import axios from "axios";
import { useState, useEffect } from "react";
import Filters from "../containers/Filters";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

function Homepage() {
  const useStyles = makeStyles({
    homepage: {
      background: "#292929",
      width: "1366px",
      height: "768px",
      position: "relative",
    },
    sideContainer: {
      position: "absolute",
      width: "228px",
      height: "275px",
      left: "41px",
      top: "43px",
      background: "#131313",
      borderRadius: "15px",
    },

    title: {
      position: "absolute",
      width: "111px",
      height: "42px",
      left: "303px",
      top: "43px",
      fontFamily: "SF Pro Display",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "35px",
      lineHeight: "42px",
      color: "rgba(255, 255, 255, 0.87)",
      textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
    subTitle: {
      position: "absolute",
      width: "97px",
      height: "30px",
      left: "303px",
      top: "106px",
      fontFamily: "SF Pro Display",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "25px",
      lineHeight: "30px",
      color: "rgba(255, 255, 255, 0.5)",
      textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
    productName: {
      position: "absolute",
      width: "160px",
      height: "31px",
      left: "305px",
      top: "157px",
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "20px",
      lineHeight: "23px",
      color: "#FFFFFF",
    },
    line: {
      position: "absolute",
      width: "970px",
      height: "0px",
      left: "303px",
      top: "192px",
      border: "1px solid rgba(203, 203, 203, 0.5)",
    },
    cardContainer: {
      position: "absolute",
      width: "984px",
      height: "190px",
      left: "289px",
      top: "204px",
      background: "#131313",
      borderRadius: "15px",
      display: "flex",
    },
    forwardIcon: {
      position: "absolute",
      width: "10px",
      height: "33px",
      left: "1309px",
      top: "284px",
      color: "#FFFFFF",
    },
    secondProductName: {
      position: "absolute",
      width: "160px",
      height: "31px",
      left: "305px",
      top: "439px",
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontSize: "20px",
      lineHeight: "23px",
      color: "#FFFFFF",
    },
    secondLine: {
      position: "absolute",
      width: "970px",
      height: "0px",
      left: "303px",
      top: "473px",
      border: "1px solid rgba(203, 203, 203, 0.5)",
    },
    secondCardContainer: {
      position: "absolute",
      width: "984px",
      height: "190px",
      left: "289px",
      top: "503px",
      background: "#131313",
      borderRadius: "15px",
      display: "flex",
    },
    secondForwardIcon: {
      position: "absolute",
      width: "10px",
      height: "33px",
      left: "1300px",
      top: "583px",
      color: "#FFFFFF",
    },
  });
  const home = useStyles();
  const [products, setProducts] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://assessment-edvora.herokuapp.com/");

        const products = res.data;
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  const categorizeByBrand = (productItems) => {
    const brands = [];
    // {
    //     brandName: "brandName",
    //     products: []
    // }
    for (let x = 0; x < productItems.length; x += 1) {
      // here I get the brand and check if it's in the brands array
      // if it's not, then filter productItems with the brand_name
      // insert the brand and the products that are filtered
      if (
        brands.filter(
          (item) => item.brandName === productItems[x]["brand_name"]
        ).length === 0
      ) {
        const filteredProductsByBrand = productItems.filter(
          (item) => item.brand_name === productItems[x]["brand_name"]
        );
        brands.push({
          brandName: productItems[x]["brand_name"],
          products: filteredProductsByBrand,
        });
      }
    }
    return brands;
  };

  return (
    <div className={home.homepage}>
      <div className={home.sideContainer}>
        <Filters />
      </div>

      <Typography className={home.title}>Edvora</Typography>
      <Typography className={home.subTitle}>Products</Typography>
      <Typography className={home.productName}>Product Name</Typography>
      <div className={home.line}></div>
      <div className={home.cardContainer}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <ArrowForwardIos className={home.forwardIcon} />
      <Typography className={home.secondProductName}>Product Name</Typography>
      <div className={home.secondLine}></div>
      <div className={home.secondCardContainer}>
        {/* <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard /> */}
        <Slider {...settings}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Slider>
      </div>
      <ArrowForwardIos className={home.secondForwardIcon} />
    </div>
  );
}

export default Homepage;

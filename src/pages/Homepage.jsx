import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Select from "@material-ui/core/Select";

function Homepage() {
  // css styling for home page
  const useStyles = makeStyles({
    homeContainer: {
      position: "relative",
      height: "768px",
      width: "100%",
      background: "#292929",
    },
    // CSS FOR FILTER CONTAINER
    filterContainer: {
      position: "absolute",
      width: "228px",
      height: "275px",
      left: "41px",
      top: "43px",
      background: "#131313",
      borderRadius: "15px",
    },
    filters: {
      position: "relative",
      margin: "24px 0px 0px 30px",
      fontFamily: "SF Pro Display",
      fontStyle: "normal",
      fontWeight: 300,
      fontSize: "20px",
      lineHeight: "24px",
      color: "#A5A5A5",
    },
    sideline: {
      position: "relative",
      margin: "11px 0px 36px 30px",
      width: "158px",
      height: "0px",
      border: "1px solid #CBCBCB",
    },
    select: {
      position: "relative",
      margin: "0px 34.55px 12.5px 25px",
      width: "168.45px",
      height: "37.5px",
      background: "#232323",
      borderRadius: "4.68775px",
      color: "#FFFFFF",
    },
    option: {
      position: "relative",
      margin: "8px 11.45px 7.5px 13px",
      width: "144px",
      height: "22px",
      background: "#232323",
      lineHeight: "20px",
      color: "#FFFFFF",
    },
    // CSS FOR THE PAGE TITLE
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
      textShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
    // CSS FOR PAGE SUBHEADING
    subHeading: {
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
      textShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
    // CSS FOR PRODUCTS TITLE
    productsTitle: {
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
    // CSS FOR 1ST HORIZONTAL LINE
    topHr: {
      position: "absolute",
      width: "970px",
      height: "0px",
      left: "303px",
      top: "192px",
      border: "1px solid rgba(203, 203, 203, 0.5)",
    },
    // TOP PRODUCTS CONTAINER CSS
    topProducts: {
      position: "absolute",
      width: "984px",
      height: "190px",
      left: "289px",
      top: "204px",
      background: "#131313",
      borderRadius: "15px",
      display: "flex",
      overflowY: "hidden",
    },
    // BOTTOM PRODUCTS TITLE CSS
    productsBottomTitle: {
      position: "absolute",
      width: "160px",
      height: "31px",
      left: "305px",
      top: "439px",
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "20px",
      lineHeight: "23px",
      color: "#FFFFFF",
    },
    // BOTTOM HR CSS
    bottomHr: {
      position: "absolute",
      width: "970px",
      height: "0px",
      left: "303px",
      top: "473px",
      border: "1px solid rgba(203, 203, 203, 0.5)",
    },
    // BOTTOM PRODUCTS CONTAINER CSS
    bottomProductsContainer: {
      position: "absolute",
      width: "984px",
      height: "190px",
      left: "289px",
      top: "503px",
      background: "#131313",
      borderRadius: "15px",
    },
  });
  //assigning home class to useStyles
  const home = useStyles();

  //STATE FOR HOLDING THE PRODUCTS
  const [products, setProducts] = useState([]);
  const [selectedBrand,setSelectedBrand]=useState([]);

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
  }, []);
  // CATEGORIZE PRODCTS BY BRAND NAME
  const categorizeByBrand = (productItems) => {
    const brands = [];
    for (let x = 0; x < productItems.length; x += 1) {
      if (
        brands.filter(
          (item) => item.brandName === productItems[x]["brand_name"]
        ).length === 0
      ) {
        const filteredBrands = productItems.filter(
          (item) => item.brand_name === productItems[x]["brand_name"]
        );
        brands.push({
          brandName: productItems[x]["brand_name"],
          products: filteredBrands,
        });
      }
    }
    return brands;
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 3,
  };

  return (
    <div className={home.homeContainer}>
      {console.log(products)}
      {/* building container for filter section */}
      <div className={home.filterContainer}>
        <Typography className={home.filters}>Filters</Typography>
        <div className={home.sideline}></div>
        <form action="#">
          <select className={home.select} value={selectedBrand} onChange={categorizeByBrand}>
            {products.map((item) => {
              return (
                <option
                  className={home.option}
                  value={item.brand_name}
                  key={item.date}
                >
                  {item.brand_name}
                </option>
              );
            })}
          </select>

          <select className={home.select}></select>
          <select className={home.select}></select>
        </form>
      </div>

      {/* PAGE LOGO AND TITLE */}
      <Typography className={home.title}>Edvora</Typography>

      {/* PAGE SUBHEADING */}
      <Typography className={home.subHeading}>Products</Typography>

      {/* PRODUCTS TITLE */}
      <Typography className={home.productsTitle}>Product Name</Typography>

      {/* FIRST HORIZONTAL LINE */}
      <div className={home.topHr}></div>

      {/* TOP PRODUCTS CONTAINER  */}
      <div className={home.topProducts}>
        {products.map((product) => (
          <ProductCard product={product} key={product.date} />
        ))}
      </div>

      {/* 2ND PRODUCTS TITLE  */}
      <Typography className={home.productsBottomTitle}>Product Name</Typography>

      {/* BOTTOM HORIZONTAL LINE */}
      <div className={home.bottomHr}></div>

      {/* BOTTOM PRODUCTS CONTAINER */}
      <div className={home.bottomProductsContainer}>
        <Slider {...settings}></Slider>
      </div>
    </div>
  );
}

export default Homepage;

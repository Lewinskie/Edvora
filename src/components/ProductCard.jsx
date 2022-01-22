import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

function ProductCard({ product }) {
  const useStyles = makeStyles({
    wrapper: {
      width: "210px",
      height: "150px",
      left: "309px",
      top: "225px",
      background: "#232323",
      borderRadius: "4.68775px",
      margin: "21px 0px 19px 20px",
    },
    img: {
      width: "70px",
      height: "70px",
      borderRadius: "5px",
      margin: "10px 0px 13px 12px",
    },
    name: {
      width: "93px",
      height: "16px",
      fontFamily: "SF Pro Display",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "15px",
      lineHeight: "18px",
      color: "#FFFFFF",
      margin: "13px 15px 10px 20px",
    },
    brandName: {
      width: "91px",
      height: "14px",
      fontFamily: "SF Pro Display",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "13px",
      lineHeight: "16px",
      color: "rgba(255, 255, 255, 0.6)",
      margin: "10px 15px 11px 22px",
    },
    priceContainer: {
      width: "93px",
      height: "16px",
      display: "flex",
      margin: "0px 15px 14px 20px ",
    },
    currency: {
      width: "10.55px",
      height: "14px",
      fontFamily: "SF Pro Display",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "19px",
      color: "rgba(255, 255, 255, 0.8)",
    },
    price: {
      width: "78.96px",
      height: "15px",
      fontFamily: "SF Pro Display",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "13px",
      lineHeight: "16px",
      color: "#FFFFFF",
      marginLeft: "3.49px",
    },
    location: {
      width: "90px",
      height: "14px",
      fontFamily: "SF Pro Display",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "13px",
      lineHeight: "16px",
      color: "rgba(255, 255, 255, 0.6)",
      margin: "0px 0px 14px 12px",
    },
    dateLabel: {
      width: "26.43px",
      height: "12px",
      fontFamily: "SF Pro Display",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "11px",
      lineHeight: "13px",
      color: "rgba(255, 255, 255, 0.6)",
      margin: "0px 0px 15px 0px",
    },
    date: {
      width: "66.57px",
      height: "14px",
      fontFamily: "SF Pro Rounded",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "13px",
      lineHeight: "16px",
      color: "rgba(255, 255, 255, 0.6)",
      margin: "0px 15px 14px 0px",
    },
    desc: {
      width: "183px",
      height: "15px",
      fontFamily: "SF Pro Display",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "11px",
      lineHeight: "13px",
      color: "rgba(255, 255, 255, 0.6)",
      margin: "0px 15px 14px 12px",
    },
  });
  const card = useStyles();
  //shorten date string
  const date = product.date.slice(0, 10);

  return (
    <div className={card.wrapper}>
      <div style={{ display: "flex" }}>
        <img className={card.img} src={product.image} alt="product" />
        <div>
          <Typography noWrap={true} className={card.name}>
            {product.product_name}
          </Typography>
          <Typography noWrap={true} className={card.brandName}>
            {product.brand_name}
          </Typography>
          <div className={card.priceContainer}>
            <Typography className={card.currency}>$</Typography>
            <Typography className={card.price}>{product.price}</Typography>
          </div>
        </div>
      </div>
      <div>
        <div style={{ display: "flex" }}>
          <Typography noWrap={true} className={card.location}>
            Location
          </Typography>
          <Typography noWrap={true} className={card.location}>
            city:
            {product.address.city} state:{product.address.state}
          </Typography>
          <div style={{ display: "flex" }}>
            <Typography className={card.dateLabel}>Date:</Typography>
            <Typography className={card.date}>{date}</Typography>
          </div>
        </div>
      </div>
      <Typography noWrap={true} className={card.desc}>
        {product.discription}
      </Typography>
    </div>
  );
}

export default ProductCard;

// CATEGORIZE PRODCTS BY BRAND NAME
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

export default categorizeByBrand;

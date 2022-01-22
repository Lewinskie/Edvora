const getUniqueCities = (productItems) => {
  const cities = [];
  // [
  // {
  //      ...productInfo
  //     city
  // }
  // ]
  if (productItems.length === 0) {
    return cities;
  }
  for (let x = 0; x < productItems.length; x += 1) {
    // we check if state is in states array
    // if not then we save in the states array and continue with the loop
    if (
      cities.filter((item) => item.city === productItems[x].address.city)
        .length === 0
    ) {
      const newCity = productItems[x];
      newCity.city = productItems[x].address.city;
      cities.push(newCity);
    }
  }

  return cities;
};

export default getUniqueCities;

const getUniqueStates = (productItems) => {
    const states = [];
    // [
    // {
    //      ...productInfo
    //     state
    // }
    // ]
    if(productItems.length === 0){
        return states;
    }
    for(let x = 0; x < productItems.length; x += 1){
        // we check if state is in states array
        // if not then we save in the states array and continue with the loop
        if(states.filter(item => item.state === productItems[x].address.state).length === 0){
            const newState = productItems[x];
            newState.state = productItems[x].address.state;
            states.push(newState);
        }
    }

    return states;
};

export default getUniqueStates;

// ** get the data from ls

const getLsData = ()=>{
    const storedData = JSON.parse(localStorage.getItem('shopping-cart'));

    let cartData = {};

    storedData && (cartData = storedData);

    return cartData;
};


// ** set data to ls

const setLsData = (id)=>{
    // ** get ls data

    const storedData = getLsData();

    if (storedData[id]) {
        storedData[id] = storedData[id] + 1
        localStorage.setItem('shopping-cart',JSON.stringify(storedData));
    } else{
        storedData[id] = 1;
        localStorage.setItem('shopping-cart',JSON.stringify(storedData));
    }
};


export {
    setLsData,
    getLsData
};


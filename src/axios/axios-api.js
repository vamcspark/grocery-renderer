import axios from 'axios';

const BASE_URL = 'http://localhost:8080'

const getGroceriesMaxPrices = () => {
    return axios({
        method: 'get',
        url: BASE_URL+'/max-price'
    });
}

const getItemPriceHistory = (item) => {
    return axios({
        method: 'get',
        url: BASE_URL+`/item-price-history/${item}`,

    });
}

export const groceryAPI = {
    getGroceriesMaxPrices: getGroceriesMaxPrices,
    getItemPriceHistory: getItemPriceHistory
}


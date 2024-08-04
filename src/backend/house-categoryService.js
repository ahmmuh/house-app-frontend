
import axios from "axios";
import {BASE_URL} from "./base_url";

export const createHouseCategory = async (category) => {
    try {
        const res = await axios.post(`${BASE_URL}/houses/category`,  category);
        console.log("Created house category", res);
        return res.data
    }
    catch (e) {
        console.log("Error creating category", e);
        return null;
    }

}

export const getAllHouseCategory = async () => {
    const res = await axios.get(`${BASE_URL}/houses/category`)
    return  res.data
}

export const getHouseCategory = async (id) => {
    const res = await axios.get(`${BASE_URL}/houses/category/${id}`, {})
    return  res.data
}

export const updateHouseCategory = async (id) => {
    const res = await axios.put(`${BASE_URL}/houses/category/${id}`, {})
    return  res.data
}

export const deleteHouseCategory = async (id) => {
    const res = await axios.delete(`${BASE_URL}/houses/category/${id}`, {})
    return  res.data
}



//lägg category efter /houses/? om du ska aktivera dessa funktioner
/*export const paginateHouses = async (page = 1) => {
    const res = await axios.get(`${BASE_URL}/houses/${page}`, {})
    return  res.data
}

export const searchHousesByHighPrice = async (price) => {
    const res = await axios.get(`${BASE_URL}/houses/${price}`, {})
    return  res.data
}
export const searchHouseByLowPrice = async (price) => {
    const res = await axios.get(`${BASE_URL}/houses/${price}`, {})
    return  res.data
}
export const countHouses = async (count) => {
    const res = await axios.get(`${BASE_URL}/houses/${count}`, {})
    return res.data
}*/



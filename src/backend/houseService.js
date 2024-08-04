import axios from "axios";
import {BASE_URL} from "./base_url";

export const createHouse = async (house) => {
    try {
        const res = await axios.post(`${BASE_URL}/houses`,  house);
        console.log("Created house", res);
        return res.data
    }
    catch (e) {
      console.log("Error creating house", e);
        return null;
    }

}

export const getAllHouses = async () => {
    const res = await axios.get(`${BASE_URL}/houses`)
    return  res.data
}

export const getHouse = async (id) => {
    const res = await axios.get(`${BASE_URL}/houses/${id}`, {})
    return  res.data
}

export const updateHouse = async (id) => {
    const res = await axios.put(`${BASE_URL}/houses/${id}`, {})
    return  res.data
}

export const deleteHouse = async (id) => {
    const res = await axios.delete(`${BASE_URL}/houses/${id}`, {})
    return  res.data
}

export const paginateHouses = async (page = 1) => {
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
}



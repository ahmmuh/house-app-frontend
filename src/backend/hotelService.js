import axios from "axios";
import {BASE_URL} from "./base_url";

export const createHotel = async (house) => {
    try {
        const res = await axios.post(`${BASE_URL}/houses`,  house);
        console.log("Created Hotel", res);
        return res.data
    }
    catch (e) {
      console.log("Error creating Hotel", e);
        return null;
    }

}

export const getAllHotels = async () => {
    const res = await axios.get(`${BASE_URL}/houses`)
    return  res.data
}

export const getHotel = async (id) => {
    const res = await axios.get(`${BASE_URL}/houses/${id}`, {})
    return  res.data
}

export const updateHotel = async (id) => {
    const res = await axios.put(`${BASE_URL}/houses/${id}`, {})
    return  res.data
}

export const deleteHotel = async (id) => {
    const res = await axios.delete(`${BASE_URL}/houses/${id}`, {})
    return  res.data
}

export const paginateHotels = async (page = 1) => {
    const res = await axios.get(`${BASE_URL}/houses/${page}`, {})
    return  res.data
}

export const searchHotelsByHighPrice = async (price) => {
    const res = await axios.get(`${BASE_URL}/houses/${price}`, {})
    return  res.data
}
export const searchHotelsByLowPrice = async (price) => {
    const res = await axios.get(`${BASE_URL}/houses/${price}`, {})
    return  res.data
}
export const countHotels = async (count) => {
    const res = await axios.get(`${BASE_URL}/houses/${count}`, {})
    return res.data
}



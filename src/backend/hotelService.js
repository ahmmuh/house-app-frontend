import axios from "axios";
import {BASE_URL} from "./base_url";

export const createHotel = async (house) => {
    try {
        const res = await axios.post(`${BASE_URL}/hotels`,  house);
        console.log("Created Hotel", res);
        return res.data
    }
    catch (e) {
      console.log("Error creating Hotel", e);
        return null;
    }

}

export const getAllHotels = async () => {
    const res = await axios.get(`${BASE_URL}/hotels`)
    return  res.data
}

export const getHotel = async (id) => {
    const res = await axios.get(`${BASE_URL}/hotels/${id}`, {})
    return  res.data
}

export const updateHotel = async (id) => {
    const res = await axios.put(`${BASE_URL}/hotels/${id}`, {})
    return  res.data
}

export const deleteHotel = async (id) => {
    const res = await axios.delete(`${BASE_URL}/hotels/${id}`, {})
    return  res.data
}

export const paginateHotels = async (page = 1) => {
    const res = await axios.get(`${BASE_URL}/hotels/${page}`, {})
    return  res.data
}

export const searchHotelsByHighPrice = async (price) => {
    const res = await axios.get(`${BASE_URL}/hotels/${price}`, {})
    return  res.data
}
export const searchHotelsByLowPrice = async (price) => {
    const res = await axios.get(`${BASE_URL}/hotels/${price}`, {})
    return  res.data
}
export const countHotels = async (count) => {
    const res = await axios.get(`${BASE_URL}/hotels/${count}`, {})
    return res.data
}



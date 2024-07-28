import axios from "axios";


const BASE_URL = 'http://localhost:5000/api'

export const getAllHouses = async () => {
    const res = await axios.get(`${BASE_URL}/houses`)
    return await res.data
}

export const getHouse = async (id) => {
    const res = await axios.get(`${BASE_URL}/houses/${id}`, {})
    return await res.data
}

export const updateHouse = async (id) => {
    const res = await axios.put(`${BASE_URL}/houses/${id}`, {})
    return await res.data
}

export const deleteHouse = async (id) => {
    const res = await axios.delete(`${BASE_URL}/houses/${id}`, {})
    return await res.data
}

export const paginateHouses = async (page = 1) => {
    const res = await axios.get(`${BASE_URL}/houses/${page}`, {})
    return await res.data
}

export const searchHousesByHighPrice = async (id) => {
    const res = await axios.get(`${BASE_URL}/houses/${id}`, {})
    return await res.data
}
export const searchHouseByLowPrice = async (id) => {
    const res = await axios.get(`${BASE_URL}/houses/${id}`, {})
    return await res.data
}
export const countHouses = async (id) => {
    const res = await axios.get(`${BASE_URL}/houses/${id}`, {})
    return await res.data
}
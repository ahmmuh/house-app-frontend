import axios from "axios";


const BASE_URL = 'http://localhost:5000/api'



export const addHouse = async (house) => {
    try{
        const res = await axios.post(`${BASE_URL}/houses`, house);
        return res.data.data;
    }
    catch(error){
        console.log(error)
    }

}
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

//house types fetch from mongoose enums och inte from Database (hårdkodad data).
export const getHouseTypes = async (houseType) => {
    try{
        const res = await axios.get(`${BASE_URL}/houses/enums/${houseType}`)
        return res.data;
    }
    catch (error) {
        console.error("Error fetching HouseTypes ", error);
        throw error;
    }

}


export const getHouseTransactions = async (houseTransactions) => {
    const res = await axios.get(`${BASE_URL}/houses/enums/${houseTransactions}`)
    return  res.data;
}

export const getHouseWater = async (houseWater) => {
    const res = await axios.get(`${BASE_URL}/houses/enums/${houseWater}`)
    return  res.data;
}


export const getHouseWifi = async (houseWifi) => {
    const res = await axios.get(`${BASE_URL}/houses/enums/${houseWifi}`)
    return  res.data;
}


export const getHouseparking = async (houseparking) => {
    const res = await axios.get(`${BASE_URL}/houses/enums/${houseparking}`)
    return  res.data;
}


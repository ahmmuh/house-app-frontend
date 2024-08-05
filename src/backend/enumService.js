//house types fetch from mongoose enums och inte from Database (hårdkodad data).
import axios from "axios";
import {BASE_URL} from "./base_url";

export const getHouseTypesEnums = async (houseType) => {
    try{
        const res = await axios.get(`${BASE_URL}/houses/enums/${houseType}`)
        return res.data;
    }
    catch (error) {
        console.error("Error fetching HouseTypes ", error);
        throw error;
    }

}
export const getHouseTransactionsEnums = async (houseTransactions) => {
    const res = await axios.get(`${BASE_URL}/houses/enums/${houseTransactions}`)
    return  res.data;
}

export const getHouseWaterEnums = async (houseWater) => {
    const res = await axios.get(`${BASE_URL}/houses/enums/${houseWater}`)
    return  res.data;
}


export const getHouseWifiEnums = async (houseWifi) => {
    const res = await axios.get(`${BASE_URL}/houses/enums/${houseWifi}`)
    return  res.data;
}


export const getHouseparkingEnums = async (houseparking) => {
    const res = await axios.get(`${BASE_URL}/houses/enums/${houseparking}`)
    return  res.data;
}


export const getHouseRoomTypesEnums = async (roomType) => {
    const res = await axios.get(`${BASE_URL}/houses/enums/${roomType}`)
    return  res.data;
}

export const getHouseKitchenEnums = async (houseKitchen) => {
    const res = await axios.get(`${BASE_URL}/houses/enums/${houseKitchen}`)
    return  res.data;
}

export const getHouseStairsEnums = async (houseStairs) => {
    const res = await axios.get(`${BASE_URL}/houses/enums/${houseStairs}`)
    return  res.data;
}

export const getHouseToiletTypeEnums = async (toiletType) => {
    const res = await axios.get(`${BASE_URL}/houses/enums/${toiletType}`)
    return  res.data;
}
export const getHousePrivateBathroomEnums = async (privateBathroom) => {
    const res = await axios.get(`${BASE_URL}/houses/enums/${privateBathroom}`)
    return  res.data;
}



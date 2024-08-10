export const  checkSelectedCategory = (selectedCategory, house) =>{
if (selectedCategory  === "Hotel" || selectedCategory === "Apartment"){
    if (house.houseType){
        delete house.houseType;
    }
    else if (house.houseTransactions){
        delete house.houseTransactions;
    }
    else if (house.houseKitchen){
        delete house.houseKitchen;
    }
    else    if (house.houseStair){
        delete house.houseStair;
    }
}

}
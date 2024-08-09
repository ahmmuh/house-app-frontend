


export const  checkSelectedCategory = (selectedCategory, house) =>{
    switch(selectedCategory){
        case 'Hotel':
            delete house.houseKitchen
            break;
        default:
            break
    }

}
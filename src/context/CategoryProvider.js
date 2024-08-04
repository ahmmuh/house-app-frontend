import React, {useContext} from 'react';
import CategoryContext from './CategoryContext';

function CategoryProvider(props) {
    const categoryData = useContext(CategoryContext);
    console.log("categoryData", categoryData);
    return (
        <CategoryContext.Provider value={{
            categoryData
        }}></CategoryContext.Provider>
    );
}

export default CategoryProvider;
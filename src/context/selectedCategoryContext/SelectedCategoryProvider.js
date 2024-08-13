import React, {useContext} from 'react';
import SelectedCategoryContext from "./selectedCategoryContext";

function SelectedCategoryProvider({children}) {
    const selectedCategoryData = useContext(SelectedCategoryContext);
    return (
        <SelectedCategoryContext.Provider value={selectedCategoryData}>
            {children}
        </SelectedCategoryContext.Provider>
    );
}

export default SelectedCategoryProvider;
import React, { useContext, useState } from "react"
import MainSelect from "../../components/reusableInputs/MainSelect"
import DashboardContext from "../../context/DashboardContext"
import MainCard from "../../components/reusableInputs/MainCard"
import CreateHotel from "../hotel/createHotel"
import { Link } from "react-router-dom"
const CategoryFormContainer = () => {
  const { houseCategory } = useContext(DashboardContext)
  const [selectedCategory, setSelectedCategory] = useState("")

  const houseCategoryOptions = [
    { label: "Välj house type", value: "", _id: "" },
    ...houseCategory.map((category) => ({
      label: category.name,
      value: category._id,
      id: category._id,
    })),
  ]

  console.log("house Category Options", houseCategoryOptions)
  //select category
  /*    const handleCategoryChange = (e)=>{
       setSelectedCategory(e.target.value)
        console.log("Selected Category", e.target.value)

    }*/
  const handleCategoryChange = (e) => {
    console.log("Label: ", e.target.name)
    setSelectedCategory(e.target.value)
    console.log("Selected Category", e.target.value)
  }
  return (
    <div className={"container"}>
      <div className={"row"}>
        {houseCategory.length === 0 ? (
          <>
            <h4>No date. create one</h4>
            <Link to="/dashboard/createCategory">Create Category</Link>
          </>
        ) : (
          <>
            <MainSelect
              name="category"
              id="category"
              value={selectedCategory}
              options={houseCategoryOptions}
              onChange={handleCategoryChange}
            />
            {selectedCategory &&
              houseCategoryOptions.find(
                (option) => option.value === selectedCategory
              )?.label === "Hotels" && (
                <>
                  <div>
                    <MainCard title={"Guest Information"}>
                      <CreateHotel selectedCategory={selectedCategory} />
                    </MainCard>
                  </div>
                </>
              )}
            {selectedCategory.label !== "" &&
              selectedCategory.label === "Hotel" && (
                <>
                  {/*Hotel*/}
                  {/*  <div>
                                        <MainCard title={'Guest Information'}>
                                            <CreateHotel selectedCategory={selectedCategory} />
                                        </MainCard>


                                    </div>*/}

                  {selectedCategory === "Apartment" && <>Apartment</>}

                  {/*Apartment ends */}
                </>
              )}
          </>
        )}

        <p>{selectedCategory}</p>
      </div>
    </div>
  )
}

export default CategoryFormContainer

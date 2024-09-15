import React from "react"
import MainCard from "../../components/reusableInputs/MainCard"
import MainInput from "../../components/reusableInputs/MainInput"
import useHotelState from "../../states/hotel/hotelState"
import SaveButton from "../../components/SaveButton"

function CreateHotel({ selectedCategory }) {
  const [hotel, setHotel] = useHotelState()

  const changeHandler = () => {}
  return (
    <div className={"container"}>
      <form>
        <div className={"row"}>
          <MainCard title={"Hotel Name"}>
            <MainInput name={hotel.hotelName} onChange={changeHandler} />
          </MainCard>
          <MainCard title={"Description"}>
            <MainInput name={hotel.description} onChange={changeHandler} />
          </MainCard>
          <MainCard title={"Image"}>
            <MainInput name={hotel.image} onChange={changeHandler} />
          </MainCard>

          <MainCard title={"Amenities"}>
            <MainInput name={hotel.amenities} onChange={changeHandler} />
          </MainCard>

          <MainCard title={"Rooms"}>
            <MainInput name={hotel.rooms} onChange={changeHandler} />
          </MainCard>
          <MainCard title={"Location"}>
            <MainInput name={hotel.location} onChange={changeHandler} />
          </MainCard>
          <SaveButton
            type={"submit"}
            title={"Spara"}
            textColor={"text-primary"}
            backgroundColor={"btn btn-success btn-md mt-3"}
          ></SaveButton>
        </div>
      </form>
      Selected Category {selectedCategory}
    </div>
  )
}

export default CreateHotel

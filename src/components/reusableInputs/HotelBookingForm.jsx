import React from 'react';
import DatePicker from "../../calender/InputDatePicker";
import GuestInputCounter from "./GuestInputCounter";
import MainCard from "./MainCard";
import RadioInput from "./RadioInput";
import useHouseState from "../../states/houseState";
function HotelBookingForm(props) {
    const [hotel,setHotel] = useHouseState()
    const changeHandler = (e) =>{}
    return (
       <div className={'container'}>
           <div className={'row'}>
               <div className={'col'}>
                   <DatePicker
                       type="date"
                       name={'fromStartDate'}
                       selectedDate={hotel.fromStartDate}
                       id={'fromStartDate'}
                       changeHandler={changeHandler}

                   /> <i className="fa-solid fa-calendar-days"></i>
               </div>
               <div className={'col'}>
                   <DatePicker
                       type='date'
                       name={'toEndDate'}
                       id={'toEndDate'}
                       selectedDate={hotel.toEndDate}
                       changeHandler={changeHandler}

                   /> <i className="fa-solid fa-calendar-days"></i>
               </div>
               <div className={'col'}>
                   <GuestInputCounter type={'number'} name={'adults'} value={hotel.adults}
                                      changeHandler={changeHandler}/>
                   <i className="fa-solid fa-person" style={{marginLeft: '.2rem'}}></i>
               </div>
               <div className={'col'}>
                   <GuestInputCounter type={'number'} name={'children'} value={hotel.children}
                                      onChange={changeHandler}/>
                   <i className="fa-solid fa-children" style={{marginLeft: '.2rem'}}></i>
               </div>
           </div>
           <div className={'row'}>
               <MainCard title={'Wifi'}>
                   <RadioInput
                       type={'radio'}
                       name={'houseWifi'}
                       value={'true'}
                       id={'houseWifiYes'}
                       checked={hotel.houseWifi === true}
                       onChange={changeHandler}
                       label={'Yes'}

                   />

                   <RadioInput
                       type={'radio'}
                       name={'houseWifi'}
                       value={'false'}
                       id={'houseWifiNo'}
                       checked={hotel.houseWifi === false}
                       onChange={changeHandler}
                       label={'No'}

                   />
               </MainCard>

            {/*   <MainSelect
                   type="text"
                   label={'BookedRoom type'}
                   name="roomType"
                   value={hotelState.roomType}
                   placeholder={'roomType'}
                   options={houseRoomOptions}
                   onChange={changeHandler}

               />*/}

               <MainCard title={'Airport transfer'}>
                   <RadioInput
                       type={'radio'}
                       name={'airportShuttle'}
                       value={'true'}
                       id={'airportShuttleYes'}
                       checked={hotel.airportShuttle === true}
                       onChange={changeHandler}
                       label={'Yes'}

                   />

                   <RadioInput
                       type={'radio'}
                       name={'airportShuttle'}
                       value={'false'}
                       id={'airportShuttleNo'}
                       checked={hotel.airportShuttle === false}
                       onChange={changeHandler}
                       label={'No'}

                   />


               </MainCard>
               <MainCard title={'Open 24/7'}>

                   <RadioInput
                       type={'radio'}
                       name={'frontDesk24hr'}
                       value={'true'}
                       id={'frontDesk24hrYes'}
                       checked={hotel.frontDesk24hr === true}
                       onChange={changeHandler}
                       label={'Yes'}

                   />


                   <RadioInput
                       type={'radio'}
                       name={'frontDesk24hr'}
                       value={'false'}
                       id={'frontDesk24hrNo'}
                       checked={hotel.frontDesk24hr === false}
                       onChange={changeHandler}
                       label={'No'}

                   />
               </MainCard>
               <MainCard title={'Private Bath BookedRoom'}>
                   <i className="fa-solid fa-shower"></i>
                   <RadioInput
                       type={'radio'}
                       name={'privateBathroom'}
                       value={'true'}
                       id={'privateBathRoomYes'}
                       checked={hotel.privateBathroom === true}
                       onChange={changeHandler}
                       label={'Yes'}

                   />
                   <RadioInput
                       type={'radio'}
                       name={'privateBathroom'}
                       value={'false'}
                       id={'privateBathRoomNo'}
                       checked={hotel.privateBathroom === false}
                       onChange={changeHandler}
                       label={'No'}

                   />

               </MainCard>
               <MainCard title={'Parking'}>
                   <RadioInput
                       type={'radio'}
                       name={'houseParking'}
                       value={'true'}
                       id={'parkingYes'}
                       checked={hotel.houseParking === true}
                       onChange={changeHandler}
                       label={'Yes'}

                   />


                   <RadioInput
                       style={{marginLeft: '10px'}}
                       type={'radio'}
                       name={'houseParking'}
                       value={'false'}
                       id={'parkingNo'}
                       checked={hotel.houseParking === false}
                       label={'No'}
                       onChange={changeHandler}
                   />
               </MainCard>

               <MainCard title={'BookedRoom Service'}>

                   <RadioInput
                       type={'radio'}
                       name={'roomService'}
                       value={'true'}
                       id={'roomServiceYes'}
                       checked={hotel.roomService === true}
                       onChange={changeHandler}
                       label={'Yes'}

                   />


                   <RadioInput
                       type={'radio'}
                       name={'roomService'}
                       value={'false'}
                       id={'roomServiceNo'}
                       checked={hotel.roomService === false}
                       onChange={changeHandler}
                       label={'No'}

                   />

               </MainCard>
               <MainCard title={'Restaurant'}>
                   <RadioInput
                       type={'radio'}
                       name={'restaurant'}
                       value={'true'}
                       id={'RestaurantYes'}
                       checked={hotel.restaurant === true}
                       onChange={changeHandler}
                       label={'Yes'}

                   />


                   <RadioInput
                       type={'radio'}
                       name={'restaurant'}
                       value={'false'}
                       id={'RestaurantNo'}
                       checked={hotel.restaurant === false}
                       onChange={changeHandler}
                       label={'No'}

                   />
               </MainCard>

               <MainCard title={'Breakfast'}>
                   <RadioInput
                       type={'radio'}
                       name={'breakfast'}
                       value={'true'}
                       id={'breakfastYes'}
                       checked={hotel.breakfast === true}
                       onChange={changeHandler}
                       label={'Yes'}

                   />

                   <RadioInput
                       type={'radio'}
                       name={'breakfast'}
                       value={'false'}
                       id={'breakfastNo'}
                       checked={hotel.breakfast === false}
                       onChange={changeHandler}
                       label={'No'}

                   />


               </MainCard>
               <MainCard title={'Tea & Coffee Maker'}>
                   <RadioInput
                       type={'radio'}
                       name={'teaCoffeeMaker'}
                       value={'true'}
                       id={'teaCoffeeMakerYes'}
                       checked={hotel.teaCoffeeMaker === true}
                       onChange={changeHandler}
                       label={'Yes'}

                   />

                   <RadioInput
                       type={'radio'}
                       name={'teaCoffeeMaker'}
                       value={'false'}
                       id={'teaCoffeeMakerNo'}
                       checked={hotel.teaCoffeeMaker === false}
                       onChange={changeHandler}
                       label={'No'}

                   />
               </MainCard>


           </div>
       </div>
    );
}

export default HotelBookingForm;
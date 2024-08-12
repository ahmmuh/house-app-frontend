import React from 'react';
import RadioInput from "../../components/reusableInputs/RadioInput";
import MainCard from "../../components/reusableInputs/MainCard";
import MainInput from "../../components/reusableInputs/MainInput";
import MainTextArea from "../../components/reusableInputs/MainTextArea";

function ApartmentBooking(props) {

    const changeHandler = e =>{

    }
    return (
        <div className={'container'}>
            <div className={'row'}>
                <form>
                    <MainCard title={'Water'}>
                        <RadioInput
                            type={'radio'}
                            name={'houseWater'}
                            value={'true'}
                            id={'houseWaterYes'}
                            checked={house.houseWater === true}
                            onChange={changeHandler}
                            label={'Yes'}
                        />

                        <RadioInput
                            type={'radio'}
                            name={'houseWater'}
                            value={'false'}
                            id={'houseWaterNo'}
                            checked={house.houseWater === false}
                            onChange={changeHandler}
                            label={'No'}
                        />
                    </MainCard>
                    <MainInput
                        type="number"
                        name="price"
                        value={house.price}
                        placeholder={'Price'}
                        label={"Qiimaha"}
                        min={0}
                        onChange={changeHandler}

                    />
                    <MainCard title={'Cabirka guriga'}>
                        <MainInput
                            type="number"
                            name="houseWidth"
                            value={house.houseWidth}
                            placeholder={'houseWidth'}
                            label={"Ballaca guriga"}
                            min={0}
                            onChange={changeHandler}

                        />


                        <MainInput
                            type="number"
                            name="houseHeight"
                            value={house.houseHeight}
                            placeholder={'houseHeight'}
                            label={"Dhererka guriga"}
                            min={0}
                            onChange={changeHandler}

                        />
                        <MainInput
                            type="number"
                            name="squareMeters"
                            value={`${house.squareMeters}`}
                            label={`Waa`}
                            disabled
                            onChange={changeHandler}

                        />

                    </MainCard>


                    <MainInput
                        type="file"
                        name="images"
                        placeholder={'images'}
                        label={"Images"}
                        multiple
                        onChange={changeHandler}

                    />
                    <MainTextArea
                        name="description"
                        cols={40}
                        rows={10} placeholder={'Skiver lite beskrivning'}
                        changeHandler={changeHandler}>

                    </MainTextArea>

                </form>
            </div>
        </div>
    );
}

export default ApartmentBooking;
/*



<>
    <MainCard title={'Apartment'}>
        <i className="fa-solid fa-restroom"></i>
        <MainInput
            type="number"
            name="toilets"
            value={house.toilets}
            placeholder={'Toilets'}
            label={"Toilets"}
            min={1}
            onChange={changeHandler}

        />
        <i className="fa-solid fa-shower"></i>
        <MainInput
            type="number"
            name="bathrooms"
            value={house.bathrooms}
            placeholder={'bathrooms'}
            label={"Bathroom"}
            min={0}
            onChange={changeHandler}

        />

    </MainCard>
    <MainCard title={'Mashiinka dharka lagu dhaqo'}>
        <RadioInput
            type={'radio'}
            name={'laundry'}
            value={'true'}
            id={'laundryYes'}
            checked={house.laundry === true}
            onChange={changeHandler}
            label={'Yes'}

        />

        <RadioInput
            type={'radio'}
            name={'laundry'}
            value={'false'}
            id={'laundryNo'}
            checked={house.houseWifi === false}
            onChange={changeHandler}
            label={'No'}

        />
    </MainCard>

    <MainCard title={'Jiko / Koshiin'}>

        <RadioInput
            type={'radio'}
            name={'houseKitchen'}
            value={'true'}
            id={'laundryYes'}
            checked={house.houseKitchen === true}
            onChange={changeHandler}
            label={'Yes'}

        />

        <RadioInput
            type={'radio'}
            name={'houseKitchen'}
            value={'false'}
            id={'houseKitchenNo'}
            checked={house.houseKitchen === false}
            onChange={changeHandler}
            label={'No'}

        />
    </MainCard>
</>*/

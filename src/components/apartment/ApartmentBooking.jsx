import React from 'react';
import RadioInput from "../reusableInputs/RadioInput";
import MainCard from "../reusableInputs/MainCard";
import MainInput from "../reusableInputs/MainInput";
import MainTextArea from "../reusableInputs/MainTextArea";

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
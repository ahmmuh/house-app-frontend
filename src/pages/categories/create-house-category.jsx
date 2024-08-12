import React,{useState} from 'react';
import MainInput from "../../components/reusableInputs/MainInput";
import MainTextArea from "../../components/reusableInputs/MainTextArea";
import SaveButton from "../../components/SaveButton";
import {createHouseCategory} from "../../backend/house-categoryService";

function CreateHouseCategory(props) {

    const [category, setCategory] = useState({
        name:"",
        description:"",
        //isActive: false
    });

    const changeHandler = (e) =>{
        const {name, value} = e.target;
        setCategory(prevState =>({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const newCategory ={
            name: category.name,
            description: category.description,
        }
        setCategory(prevState => ({
            ...prevState,
            category: newCategory
        }))
        createHouseCategory(newCategory).then(result => {})
        newCategory.name = "";
        newCategory.description = "";
    }
    return (
        <form onSubmit={handleSubmit}>
            <MainInput
            name="name"
            id="name"
            label="Name"
            value={category.name}
            onChange={changeHandler}
            />
            <MainTextArea cols={40} name={category.description}   changeHandler={changeHandler}></MainTextArea>

            <SaveButton
            type={'submit'}
            title={'Create category'}
            textColor={'text-primary'}
            backgroundColor={'btn btn-danger btn-md mt-3'}
            ></SaveButton>

        </form>
    );
}

export default CreateHouseCategory;
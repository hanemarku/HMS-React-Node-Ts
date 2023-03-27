import React, {useEffect, useState} from 'react';

import "./form.sass";

import TextComp from "../fieldComponents/textComp";
import axios from "axios";
import { toast } from "react-toastify";
import {useParams} from "react-router-dom";
import Profile from "../profile/profile";
import Input from "../formComponents/Input";
import TextArea from "../fieldComponents/textArea";
import {FormComponent} from "../formComponents/FormComponent";

const initialState={
    name: "",
    description: ""
}

interface TypeFormProps {
    selectedTypeId: string | null;
    onSave: () => void;
}

interface Entity {
    name: string;
    description: string;
}


const MyForm: React.FC<TypeFormProps> = ({ selectedTypeId , onSave})  => {


    const {name, description} = initialState;
    const [Type, setType] = useState({ name: '', description: '' });


    useEffect(() => {

        const getType = async () => {
            const response = await axios.get(`http://localhost:3300/types/${selectedTypeId}`);
            if(response.status === 200){
                console.log(response.data);
                setType(response.data);
                // setData(response.data);
            }
        }

        if (selectedTypeId !== null) {
            getType();
        }
    }, [selectedTypeId]);


    const addType = async (data: { name: string; description: string; }) => {
        console.log(data);
        const response = await axios.post("http://localhost:3300/types", data);
        toast.success(response.data);
    }

    const updateType = async (data: { name: string; description: string; }, id: string | null) => {
        console.log(data);
        const response = await axios.put(`http://localhost:3300/types/${id}`, data);
        toast.success(response.data);
    }

    const getSingleType = async (id: string | null) => {
        const response = await axios.get(`http://localhost:3300/types/${id}`);
        if(response.status === 200){
            toast.success(response.data);
            setType({...response.data[0]});
        }
    }


    const {id} = useParams();
    useEffect(() => {
        if(id){
            getSingleType(id);
        }
    }, [id])


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(Type);
        if(!Type){

            alert("empty fields");
            toast.error("Do not leave blank fields");
        } else{
            if(!selectedTypeId){
                addType(Type);
            }else{
                console.log(Type);
                updateType(Type, selectedTypeId);
                console.log(Type);
            }
        }
        window.location.reload()
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setType({ ...Type, [name]: value });
    };

    return (
        <div>
            <div className={"div-container"}>
                <h1>{selectedTypeId}</h1>
                <TextComp text={selectedTypeId === null ? 'Add Room Type' : 'Edit Room Type'} />
                <FormComponent onSubmit={handleSubmit} buttonText={selectedTypeId === null ? 'Add Room Type' : 'Edit Room Type'}>
                    <Input className={"name"} name="name" label="Name" value={Type.name} onChange={handleChange} />
                    <TextArea className={"textarea"} name={"description"} label={"Description"} value={Type.description} onChange={handleChange} />
                </FormComponent>

            </div>
        </div>

    );
};

export default MyForm;
import React, {useEffect, useState} from 'react';

import "./form.sass";

import TextComp from "../fieldComponents/textComp";
import {Item} from "../../store/item";
import axios from "axios";
import { toast } from "react-toastify";
import {useParams} from "react-router-dom";
import {getRoles} from "@testing-library/react";
import Profile from "../profile/profile";
import Input from "../formComponents/Input";
import TextArea from "../fieldComponents/textArea";
import {FormComponent} from "../formComponents/FormComponent";
import {GridItem} from "@chakra-ui/react";
import IconComp from "../iconComp/IconComp";
import {FormProps} from "../interfaces/FormProps";


const initialState={
    name: "",
    description: ""
}

interface Entity {
    name: string;
    description: string;
}


const FacilityForm: React.FC<FormProps> = ({ selectedId , onSave})  => {


    const {name, description} = initialState;
    const [role, setRole] = useState({ name: '', description: '' });


    useEffect(() => {

        const getRole = async () => {
            const response = await axios.get(`http://localhost:3300/facilities/${selectedId}`);
            if(response.status === 200){
                console.log(response.data);
                setRole(response.data);
                // setData(response.data);
            }
        }

        if (selectedId !== null) {
            getRole();
        }
    }, [selectedId]);


    const addRole = async (data: { name: string; description: string; }) => {
        console.log(data);
        const response = await axios.post("http://localhost:3300/facilities", data);
        toast.success(response.data);
    }

    const updateRole = async (data: { name: string; description: string; }, id: string | null) => {
        console.log(data);
        const response = await axios.put(`http://localhost:3300/facilities/${id}`, data);
        toast.success(response.data);
    }

    const getSingleRole = async (id: string | null) => {
        const response = await axios.get(`http://localhost:3300/facilities/${id}`);
        if(response.status === 200){
            toast.success(response.data);
            setRole({...response.data[0]});
        }
    }


    const {id} = useParams();
    useEffect(() => {
        if(id){
            getSingleRole(id);
        }
    }, [id])


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(role);
        if(!role){

            alert("empty fields");
            toast.error("Do not leave blank fields");
        } else{
            if(!selectedId){
                addRole(role);
            }else{
                console.log(role);
                updateRole(role, selectedId);
                console.log(role);
            }
        }
        window.location.reload()
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setRole({ ...role, [name]: value });
    };

    return (
        <div>
            <div className={"div-container"}>
                <h1>{selectedId}</h1>
                <TextComp text={selectedId === null ? 'Add Facility' : 'Edit Facility'} />
                <FormComponent onSubmit={handleSubmit} buttonText={selectedId === null ? 'Add Facility' : 'Edit Facility'}>
                    <Input className={"name"} name="name" label="Name" value={role.name} onChange={handleChange} />
                    <TextArea className={"textarea"} name={"description"} label={"Description"} value={role.description} onChange={handleChange} />
                </FormComponent>

            </div>
        </div>

    );
};

export default FacilityForm;
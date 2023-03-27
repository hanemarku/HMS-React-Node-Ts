import React, {createContext, useContext, useEffect} from 'react';
import { useState } from "react";
import axios from "axios";
import Profile from "../profile/profile";
import TextComp from "../fieldComponents/textComp";
import {FormComponent} from "../formComponents/FormComponent";
import Input from "../formComponents/Input";
import TextArea from "../fieldComponents/textArea";
import {FormProps} from "../interfaces/FormProps";
import {toast} from "react-toastify";
import {useParams} from "react-router-dom";
import SelectOption from "../inputComponents/selectOption";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import "./roomStyle.sass";
import {ToggleButton} from "../toggleButton/ToggleButton";
import {CheckboxList} from "../CheckBox/checkbox";
import {MultiSelection} from "../multiSelection/MultiSelection";
import {ImageUpload} from "../imageUpload/ImageUpload";

interface Entity {
    id: string;
    number: string;
    price: number;
    size: number;
    // main_image: string;
    main_image?: File;
    type: {
        roleId: string;
        name: string;
    }
    facilities: {
        name: string;
        icon: string;
        id: number;
    }[];
}

interface Facility {
    id: string;
    name: string;
}

const initialState= {
    number: "",
    price: 0,
    size: 0,
    availability: false,
    reserved: false,
    main_image: "",
    type_id: "",
    facilities: [],
};



export const RoomForm:React.FC<FormProps> = ({ selectedId , onSave})  => {
    const {number, price, size, main_image, type_id, facilities, availability, reserved} = initialState;
    const [state, setState] = useState(initialState);
    const [typeList, setTypeList] = useState([{"name": " ", "id":""}]);
    const [facilitiesList, setFacilityList] = useState([{"name": " ", "id":""}]);

    const [isEnabled1, setIsEnabled1] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);

    const [selectedEntities, setSelectedEntities] = useState<string[]>([]);

    // const [selectedFile, setSelectedFile] = useState<File | null>(null);
    // const [preview, setPreview] = useState<string | null>(null);
    // const [formData, setFormData] = useState(null);
    // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const files = event.target.files;
    //     if (files && files.length > 0) {
    //         setSelectedFile({
    //             file: [files[0]],
    //             filepreview: URL.createObjectURL(files[0]),
    //         });
    //     }
    // };


    const handleInputFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files;
        console.log(file);
        alert("test");

        // if (file) {
        //     setSelectedFile(file);
        //     const reader = new FileReader();
        //     reader.onload = () => {
        //         setPreview(reader.result as string);
        //     };
        //     reader.readAsDataURL(file);
        // } else {
        //     setSelectedFile(null);
        //     setPreview(null);
        // }
    };

    useEffect(() => {
        const getRoom = async () => {
            const response = await axios.get(`http://localhost:3300/rooms/${selectedId}`);
            if(response.status === 200){
                console.log("testi : " + response.data);
                setState(response.data);
                // setData(response.data);
            }
        }

        if (selectedId !== null) {
            getRoom();
        }
    }, [selectedId]);


    useEffect(() => {
        axios.get('http://localhost:3300/types')
            .then(response => setTypeList(response.data))
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        axios.get('http://localhost:3300/facilities')
            .then(response => setFacilityList(response.data))
            .catch(error => console.log(error));
    }, []);


    const addRoom = async (data: { number: string; availability: boolean; price: number; size: number; main_image: string; type_id: string;  reserved: boolean; facilities: string[]; }) => {
        try{
            console.log(data);
            const response = await axios.post("http://localhost:3300/rooms", data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            toast.success(response.data);
        }catch (err){
            console.log(err);
        }
    }

    // const addRoom = async (data: {
    //     number: string;
    //     availability: boolean;
    //     price: number;
    //     size: number;
    //     main_image: string;
    //     type_id: string;
    //     reserved: boolean;
    //     facilities: string[];
    // }) => {
    //
    //         console.log(data);
    //         const formData = new FormData();
    //         formData.append("number", data.number);
    //         formData.append("availability", data.availability.toString());
    //         formData.append("price", data.price.toString());
    //         formData.append("size", data.size.toString());
    //         formData.append("type_id", data.type_id);
    //         formData.append("reserved", data.reserved.toString());
    //         formData.append("facilities", JSON.stringify(data.facilities));
    //         formData.append("main_image", data.main_image);
    //
    //
    //         const response = await axios.post("http://localhost:3300/rooms", formData, {
    //             headers: {
    //                 "Content-Type": "multipart/form-data",
    //             },
    //         });
    //         toast.success(response.data);
    // };
    const updateRoom = async (data: { number: string; availability: boolean; price: number; size: number; main_image: string; type_id: string;  reserved: boolean; facilities: string[]; }, id: string | null) => {
        try{
            console.log(data);
            const response = await axios.put(`http://localhost:3300/rooms/${id}`, data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            toast.success(response.data);
        }catch (err){
            console.log(err);
        }
    }

    // const handlePictureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const pictureFile = event.target.files[0];
    //     setUser(prevState => ({
    //         ...prevState,
    //         profilePicture: pictureFile
    //     }));
    // }

    const getSingleRoom = async (id: string | null) => {
        const response = await axios.get(`http://localhost:3300/rooms/${id}`);
        if(response.status === 200){
            toast.success(response.data);
            setState({...response.data[0]});
            console.log(response);
        }
    }

    const {id} = useParams();
    useEffect(() => {
        if(id){
            getSingleRoom(id);
        }
    }, [id])


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(state.type_id);
        const data = {
            number: state.number,
            size: state.size,
            facilities: selectedEntities,
            price: state.price,
            main_image: state.main_image,
            type_id: state.type_id,
            availability: isEnabled1,
            reserved: isEnabled2
        };
            if(!selectedId){
                addRoom(data);
            }else{
                console.log(data);
                updateRoom(data, selectedId);
                console.log(data);
            }

        // window.location.reload()
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setState({ ...state, [name]: value });
    };

    // const handleImageUpload = (file: File) => {
    //     const reader = new FileReader();
    //     reader.onload = () => {
    //         const dataUrl = reader.result as string;
    //         setState({ ...state, main_image: dataUrl });
    //     };
    //     reader.readAsDataURL(file);
    // };


    const handleToggleChange1 = (event: React.ChangeEvent<HTMLInputElement> ) => {
        setIsEnabled1(event.target.checked);
    };
    const handleToggleChange2 = (event: React.ChangeEvent<HTMLInputElement> ) => {
        setIsEnabled2(event.target.checked);
    };

    const handleOptionSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const option = event.target.value;
        if (selectedEntities.includes(option)) {
            setSelectedEntities(selectedEntities.filter(e => e !== option));
        } else {
            setSelectedEntities([...selectedEntities, option]);
        }
    };

    // const handlePictureChange = (event) => {
    //     const pictureFile = event.target.files[0];
    //     const formData = new FormData();
    //     formData.append('profilePicture', pictureFile);
    //     setFormData(formData);
    // }

    const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        console.log(file);
        //
        // if (file) {
        //     setSelectedFile(file);
        //     const reader = new FileReader();
        //     reader.onload = () => {
        //         setPreview(reader.result as string);
        //     };
        //     reader.readAsDataURL(file);
        // } else {
        //     setSelectedFile(null);
        //     setPreview(null);
        // }
    };

    return (
        <div>
            <div className={"div-container"}>
                <h1>{selectedId}</h1>
                <TextComp text={selectedId === null ? 'Add Room' : 'Edit Room'} />
                <FormComponent onSubmit={handleSubmit} buttonText={selectedId === null ? 'Add Room' : 'Edit Room'}>

                    <div className="select-box border bg-white">
                            <div className={"row p-2"}>
                                <div className={"col border border-black"}>
                                    <Input className={"name"} name="number" label="Room Number" value={state.number} onChange={handleChange} />
                                </div>
                                <div className={"col border border-black"} >
                                    <div className="form-group  border mt-3" >
                                        <label htmlFor={"typeId"}></label><br/>
                                            <div className="text-muted pl-1" >Room Type</div>
                                        <div>{state.type_id}</div>
                                            <SelectOption name={"type_id"} value={state.type_id ?? ""} onChange={handleChange} entityList={typeList}  className={""}/>
                                    </div>
                                </div>
                            </div>
                            <div className={"row p-2"}>
                                <div className={"col border border-black"}>
                                    <Input className={"name"} name="price" label="Price" value={state.price} onChange={handleChange} />
                                </div>
                                <div className={"col border border-black"}>
                                    <Input className={"name"} name="size" label="Size" value={state.size} onChange={handleChange} />
                                </div>
                            </div>
                            <div className={"row"}>
                                <div className={"col"}>
                                    <ToggleButton name={"availability"} label={"Available"} onChange={handleToggleChange1} checked={isEnabled1} />
                                </div>
                                <div className={"col"}>
                                    <ToggleButton name={"reserved"} label={"Reserved"} onChange={handleToggleChange2} checked={isEnabled2} />
                                </div>
                            </div>
                        <div className={"row p-2"}>
                            <div  className={"col"}>
                                <p>Facilties</p>
                                <MultiSelection entityList={facilitiesList} onChange={handleOptionSelect} value={selectedEntities}/>
                            </div>

                            <div  className={"col"}>
                                <ImageUpload onUpload={handleInputFileChange}  value={state.main_image}/>
                            </div>

                            {/*<input type="file" onChange={handleFileInputChange} />*/}
                            {/*<div className={"col"}>*/}
                            {/*    <ImageUpload onUpload={handleInputFileChange}  value={state.main_image}/>*/}
                            {/*</div>*/}

                        </div>
                    </div>
                </FormComponent>

            </div>
        </div>

    );
};


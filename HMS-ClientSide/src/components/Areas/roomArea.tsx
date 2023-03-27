import Profile from "../profile/profile";
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "../formComponents/ListAllstyle.sass";
import axios from "axios";
import {toast} from "react-toastify";
import "./roomStyle.sass";
import Button from "../fieldComponents/Button";


interface Entity {
    id: string;
    number: string;
    price: number;
    size: number;
    availability: boolean;
    reserved:Date;
    main_image: string;
    type: {
        roleId: string;
        name: string;
    }
    facilities: Facility[];
}

interface Facility {
    id: string;
    name: string;
}

interface ListProps {
    onEdit: (id: string) => void;
}

export const EntityList = ({ onEdit }: ListProps) => {

    const [data, setData] = useState<Entity[]>([]);
    const [editingItemId, setEditingItemId] = useState<string | null>(null);
    const [typeList, setTypeList] = useState([{"name": " ", "id":""}]);


    const onEditItem = (id: string) => {
        setEditingItemId(id);
    };

    useEffect(() => {
        getRooms();
    }, []);

    const getRooms = async () => {
        const response = await axios.get("http://localhost:3300/rooms");
        if(response.status === 200){
            setData(response.data);
            console.log(response.data);
        }
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    };


    useEffect(() => {
        axios.get('http://localhost:3300/types')
            .then(response => setTypeList(response.data))
            .catch(error => console.log(error));
    }, []);

    const onDeleteRoom = async (id: string) => {
        if(window.confirm("Are you sure you want to delete this room")){
            const response = await axios.delete(`http://localhost:3300/rooms/${id}`);
            if(response.status === 200){
                toast.success(response.data);
                getRooms();
            }
        }
    }

    console.log("data " + data);

    const [editId, setEditId] = useState<string | null>(null);

    const handleEdit = (id: string) => {
        setEditId(id);
    };
    // <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

    return (

        <div className="wrapper bg-white border">
             <div className="h2 font-weight-bold text-center mt-3">Rooms </div>
            {data && data.map((entity) => (
                <div id="boxes" key={entity.id}>
                    <div className="box">
                        <div className="row">
                            <div className="col-sm-4">
                                <img width={"100px"} style={{width: "300px"}}
                                    src={entity.main_image}
                                    alt=""/>
                            </div>
                            <div className="col-sm-8">
                                <div className="select-box border bg-white">
                                    <div className={"row"}>
                                        <div className={"col"}>
                                            <div className={"p-2"}>Room Type : {entity.type.name}</div>
                                            <div className={"p-2"}>
                                                <div>Room facilities :</div>
                                                <div className={"pl-5 option"}>
                                                    {entity.facilities.map((facility) => (
                                                        <div key={entity.id}>
                                                            <div>{facility.name}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className={"col"}>
                                            <div className={"p-2"}>Size : {entity.size} m<sup>2</sup></div>
                                            <div className={"p-2"}>Price : {entity.price} $</div>
                                        </div>
                                    </div>

                                    <div className={"row"}>
                                        <div className={"col"}>
                                            <label className="option">
                                                Available <input  type="checkbox" checked={entity.availability ? true : false}/>
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className={"col"}>
                                            <label className="option">
                                                Reserved <input  type="checkbox" checked={entity.reserved ? true : false}/>
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className={"col"}>

                        </div>
                        <div className={"col"}>
                            <button style={{width: '120px'}} onClick={() => onDeleteRoom(entity.id)} className={"btn btn-danger mx-2"}>Delete</button>
                            <button style={{width: '120px'}} onClick={() => onEdit(entity.id)}   className={"btn btn-warning mx-2"}>Edit</button>

                        </div>
                    </div>

                </div>


            ))}
        </div>
    )
}


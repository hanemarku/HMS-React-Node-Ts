import React, {FC, ReactElement, useEffect, useState} from 'react';
import 'react-datetime-picker/dist/entry.nostyle';
import axios from "axios";
import {SubRoomDivContainer} from "./subRoomDivComp";


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


export const Rooms: FC = (): ReactElement =>{

    const [data, setData] = useState<Entity[]>([]);

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

    return (
        <SubRoomDivContainer title={"Our Rooms"} h1={"Explore Our"} span={"Rooms"} data={data} />
    );
}

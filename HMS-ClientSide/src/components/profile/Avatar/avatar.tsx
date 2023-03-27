import React from "react";
import "./avatar.sass";

interface AvatarProps {
    name: string | number;
}
const Avatar: React.FC<AvatarProps> = ({ name }) => {
    if(typeof name == "string"){
        const [initials] = name.split(" ").map(part => part[0].toUpperCase());
        return <div className={"avatar"}>{initials}</div>;
    }else{
        return <div className={"avatar"}>{name}</div>;
    }
};

export default Avatar;
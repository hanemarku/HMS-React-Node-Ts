import React from "react";
import {IconProps} from "../interfaces/IconProps";


const IconComp: React.FC<IconProps> = ({ name, size = 24, color = 'currentColor' }) => {
    const IconComponent = React.lazy(() => import(`react-icons/${name}`));
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <IconComponent size={size} color={color} />
        </React.Suspense>
);
};

export default IconComp;

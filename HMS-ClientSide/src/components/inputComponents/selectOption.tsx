import React from "react";

interface Props {
    name: string;
    value?: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    entityList: {id: string, name: string}[];

    className: string;
    // selectedId?: string | null;
    // text: string;
}

const SelectInput: React.FC<Props> = ({ entityList, name, value, onChange,  className}) => {
    return (
        <select className={className}
                name={name}
                value={value}
                onChange={onChange}>
            {entityList.map(entity => (
                <option key={entity.id} value={entity.id}>
                    {entity.name}
                </option>
            ))}
        </select>
    );
};

// <div className="select-box border bg-white">
//     <div className="text-muted pl-1">Tag</div>
//     <select>
//         <option value="honeymoon">Bedroom</option>
//         <option value="wedding">Waiting Hall</option>
//         <option value="guest">Hall</option>
//         <option value="guest">Kitchen</option>
//     </select>
// </div>

export default SelectInput;

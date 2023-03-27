import React, { useState } from 'react';

interface Entity {
    id: string;
    name: string;
}

interface InputProps {
    entityList: {id: string, name: string}[];
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void | boolean;

    value: string[];

}

export const MultiSelection: React.FC<InputProps> = ({ entityList , onChange, value}) => {
    // const [selectedEntities, setSelectedEntities] = useState<string[]>([]);
    //
    // const handleOptionSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    //     const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
    //     setSelectedEntities(selectedOptions);
    // };

    return (
        <div>
            <select multiple={true}  onChange={onChange} value={value}>
                {entityList.map(entity => (
                    <option key={entity.id} value={entity.id}>
                        {entity.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

import React, { useState } from 'react';

interface Entity {
    id: string;
    name: string;
}

interface InputProps {
    entityList: {id: string, name: string}[];

}

export const CheckboxList: React.FC<InputProps> = ({ entityList }) => {
    const [selectedEntities, setSelectedEntities] = useState<string[]>([]);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;
        setSelectedEntities(prevSelected => {
            if (checked) {
                return [...prevSelected, value];
            } else {
                return prevSelected.filter(id => id !== value);
            }
        });
    };

    return (
        <div>
            {entityList.map(entity => (
                <div key={entity.id}>
                    <input
                        type="checkbox"
                        id={entity.id}
                        name={entity.name}
                        value={entity.id}
                        checked={selectedEntities.includes(entity.id)}
                        onChange={handleCheckboxChange}
                    />
                    <label htmlFor={entity.id}>{entity.name}</label>
                </div>
            ))}
        </div>
    );
};

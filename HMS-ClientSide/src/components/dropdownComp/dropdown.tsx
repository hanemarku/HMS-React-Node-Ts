
import React, {Dispatch, SetStateAction, useState} from 'react';
import "./style.sass"

interface Entity {
    id: number;
    name: string;
    description: string;
}

interface DropdownProps {
    entities: Entity[];
    selectedEntity: Entity | null;
    setSelectedEntity: Dispatch<SetStateAction<Entity | null>>,
}
const Dropdown = ({ entities, selectedEntity, setSelectedEntity }: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (selected: Entity) => {
        setSelectedEntity(selected);
        console.log(selected);
        setIsOpen(false);
    };

    return (
        <div className="dropdown">
            <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
                <span>{selectedEntity?.name || 'Select an entity'}</span>
                <i className={`fas fa-caret-${isOpen ? 'up' : 'down'}`} />
            </div>
            {isOpen && (
                <ul className="dropdown-menu">
                    {entities.map((entity) => (
                        <li key={entity.id} onClick={() => handleClick(entity)}>
                            {entity.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
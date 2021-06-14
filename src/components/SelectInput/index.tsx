import React from 'react';
import {Container} from './style'

interface ISelectInputProps {
    
    options: {
        value: string | number;
        label: string | number;
    }[],
    onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined
}


const SelectInput: React.FC <ISelectInputProps> =({options, onChange}) =>{
    return (
        <Container>
        <select onChange ={onChange}>
            { 
            options.map(option => (
                <option 
                key={option.value}
                value ={option.value}>
                    {option.label}
                    </option> 
            ))
            }
            
            
            
        </select>
        </Container>  );
}

export default SelectInput;
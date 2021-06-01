import React, { useState } from 'react';
import {ToggleLabel, Container} from './style';
import Switch from 'react-switch'


const Toggle: React.FC = () =>{
    const [online, setOnline] = useState(false);
    return (
        <Container>
            <ToggleLabel>Light</ToggleLabel>
            <Switch
                  checked={online}
                  checkedIcon = {false}
                  uncheckedIcon ={false}
                  onChange = {() => setOnline(!online)}
            />
            <ToggleLabel>Dark</ToggleLabel>
        </Container>
            
    )
}

export default Toggle;
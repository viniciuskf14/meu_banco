import React from 'react';
import {Container} from './style'
import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'

const options = [
    { value: 'Vinicius', label: 'Vinicius' },
    { value: 'Maria', label: 'Maria'},
    {value: 'Rejane', label: 'Rejane'},
 ];

const List: React.FC =() =>{
    return (


        <Container>
        <ContentHeader title ="Entradas" lineColor ="#E44C4E">
                <SelectInput options ={ options } />    
        </ContentHeader>
        
        
    </Container>
    )}

export default List;
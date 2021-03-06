import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import {Container} from './style';


const options = [
    { value: 'Vinicius', label: 'Vinicius' },
    { value: 'Maria', label: 'Maria'},
    {value: 'Rejane', label: 'Rejane'},
 ]


const Dashboard: React.FC =() =>{
    return (
        <Container>
            <ContentHeader title ="Dashboard" lineColor ="#f7931b">
                    <SelectInput options ={ options } onChange={() => {}}/>    
            </ContentHeader>
            
            
        </Container>
    );
}

export default Dashboard;


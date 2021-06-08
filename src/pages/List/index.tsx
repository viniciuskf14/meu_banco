import React from 'react';
import {Container, Content, Filters} from './style'
import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'
import HistoryFinanceCard from '../../components/HistoryFinanceCard'


const months = [
    { value: 7, label: 'Julho' },
    { value: 8, label: 'Agosto'},
    { value: 9, label: 'Setembro'},
 ];

 const years = [
     { value: 2021, label: 2021},
     { value: 2020, label: 2020},
     { value: 2019, label: 2019},
 ];

const List: React.FC =() =>{
    return (


        <Container>
        <ContentHeader title ="List" lineColor ="#ffec97">
                <SelectInput options ={ months } />    
                <SelectInput options ={ years } /> 
        </ContentHeader>
        
        <Filters>
        <button 
        type = "button"
        className = "tag-filter tag-filter-recurrent"
        >
           Recorrentes

        </button>

        <button 
        type = "button"
        className = "tag-filter tag-filter-eventual"
        >
           Eventuais 

        </button>


        </Filters>  

        <Content>
             <HistoryFinanceCard
             
             tagColor ="#E44C4E"
             title = "Conta de energia"
             subtitle = "07/06/2021"
             amount = "R$ 130,00"
             />
        </Content>
        
        <Content>
             <HistoryFinanceCard
             
             tagColor ="#E44C4E"
             title = "Conta de energia"
             subtitle = "07/06/2021"
             amount = "R$ 130,00"
             />
        </Content>

        <Content>
             <HistoryFinanceCard
             
             tagColor ="#483cf3"
             title = "Conta de energia"
             subtitle = "07/06/2021"
             amount = "R$ 130,00"
             />
        </Content>

        <Content>
             <HistoryFinanceCard
             
             tagColor ="#E44C4E"
             title = "Conta de energia"
             subtitle = "07/06/2021"
             amount = "R$ 130,00"
             />
        </Content>

        <Content>
             <HistoryFinanceCard
             
             tagColor ="#483cf3"
             title = "Conta de energia"
             subtitle = "07/06/2021"
             amount = "R$ 130,00"
             />
        </Content>

        <Content>
             <HistoryFinanceCard
             
             tagColor ="#E44C4E"
             title = "Conta de energia"
             subtitle = "07/06/2021"
             amount = "R$ 130,00"
             />
        </Content>

        <Content>
             <HistoryFinanceCard
             
             tagColor ="#E44C4E"
             title = "Conta de energia"
             subtitle = "07/06/2021"
             amount = "R$ 130,00"
             />
        </Content>

        <Content>
             <HistoryFinanceCard
             
             tagColor ="#483cf3"
             title = "Conta de energia"
             subtitle = "07/06/2021"
             amount = "R$ 130,00"
             />
        </Content>

        <Content>
             <HistoryFinanceCard
             
             tagColor ="#E44C4E"
             title = "Conta de energia"
             subtitle = "07/06/2021"
             amount = "R$ 130,00"
             />
        </Content>

        <Content>
             <HistoryFinanceCard
             
             tagColor ="#E44C4E"
             title = "Conta de energia"
             subtitle = "07/06/2021"
             amount = "R$ 130,00"
             />
        </Content>

        <Content>
             <HistoryFinanceCard
             
             tagColor ="#483cf3"
             title = "Conta de energia"
             subtitle = "07/06/2021"
             amount = "R$ 130,00"
             />
        </Content>

        <Content>
             <HistoryFinanceCard
            
             tagColor ="#E44C4E"
             title = "Conta de energia"
             subtitle = "07/06/2021"
             amount = "R$ 130,00"
             />
        </Content>

        
        
        
        
    </Container>
    )}

export default List;
import React, {useMemo} from 'react';

import {Container, Content, Filters} from './style'
import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'
import HistoryFinanceCard from '../../components/HistoryFinanceCard'

interface IRoutesParams {
     match: {
          params: {
               type: string,
          }
     }
}

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

const List: React.FC<IRoutesParams> =({ match }) =>{
   
     const {type} = match.params;
     
     const title = useMemo (() => {
           return type === 'entry-balance' ? 'Entradas' : 'Saídas' // verificação das paginas, caso for do tipo entry-balance, terá o titulo de 'Entradas'. Caso contrario, terá o titulo 'Saidas'

     }, [type])

     const lineColor = useMemo (() => {
          return type === 'entry-balance' ? '#28a2c0' : '#059c1d' // verificação das paginas, caso for do tipo entry-balance, terá o titulo de 'Entradas'. Caso contrario, terá o titulo 'Saidas'

    }, [type])
   
  
   
     return (


        <Container>
        <ContentHeader title = {title} lineColor ={lineColor}>
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
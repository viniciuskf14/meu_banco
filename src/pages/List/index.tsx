import React, {useMemo, useState, useEffect} from 'react';

import {Container, Content, Filters} from './style'
import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'
import HistoryFinanceCard from '../../components/HistoryFinanceCard'

import gains from '../../repositories/gains'
import expenses from '../../repositories/expenses'

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

 interface IData {
      id: string,
      description: string,
      amountFormatted: string, //formatted por questão de formatação do valor apenas.
      frequency: string, 
      dateFormatted: string, 
      tagColor: string,
 }
 

const List: React.FC<IRoutesParams> =({ match }) =>{
   
     const [data, setData] = useState<IData[]>([])


     const {type} = match.params;
     
     const title = useMemo (() => {
           return type === 'entry-balance' ? 'Entradas' : 'Saídas' // verificação das paginas, caso for do tipo entry-balance, terá o titulo de 'Entradas'. Caso contrario, terá o titulo 'Saidas'

     }, [type])

     const lineColor = useMemo (() => {
          return type === 'entry-balance' ? '#28a2c0' : '#059c1d' // verificação das paginas, caso for do tipo entry-balance, terá o titulo de 'Entradas'. Caso contrario, terá o titulo 'Saidas'

    }, [type])
   
    const listData = useMemo(() => { 
         return type === 'entry-balance' ? gains : expenses;
     },[type])

   useEffect (() => {
        
       const response = listData.map(item => {
          return{
               id: String(Math.random() * data.length), //pedir para que ele crie um numero aleatorio de acordo com o numero da lista 
               description: item.description,
               amountFormatted: item.amount, 
               frequency: item.frequency, 
               dateFormatted: item.date,
               tagColor: item.frequency === 'recorrente' ? '#483cf3' : '#E44C4E'
          }

     })

       setData(response);
    }, [])

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
          
          {
               data.map(item =>(
             <HistoryFinanceCard
             key={item.id}
             tagColor = {item.tagColor}
             title = {item.description}
             subtitle = {item.dateFormatted}
             amount = {item.amountFormatted}
             />
          ))}
        </Content>
        
        
        
        
        
    </Container>
    )}

export default List;
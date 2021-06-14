import React from 'react';
import {Container, Tag} from "./style";

interface HistoryFinanceCardProps{
    tagColor: string, // cor para identificar se a transação é recorrente ou eventual no historico. 
    title: string,
    subtitle:string,
    amount: string
}


const HistoryFinanceCard: React.FC <HistoryFinanceCardProps> =({
    tagColor, 
    title,
    subtitle,
    amount
}) =>{
    return (
        <Container>
            <Tag color ={tagColor} />
            <div>
                <span>{title}</span>
                <small>{subtitle}</small>
            </div>
            <h3> R$ {amount}</h3>
        </Container>  
        
        );
}

export default HistoryFinanceCard;

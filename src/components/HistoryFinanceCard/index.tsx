import React from 'react';
import {Container, Tag} from "./style";

interface HistoryFinanceCardProps{
    cardColor: string,
    tagColor: string, // cor para identificar se a transação é recorrente ou eventual no historico. 
    title: string,
    subtitle:string,
    amount: string
}


const HistoryFinanceCard: React.FC <HistoryFinanceCardProps> =({
    cardColor, 
    tagColor, 
    title,
    subtitle,
    amount
}) =>{
    return (
        <Container color={cardColor}>
            <Tag color ={tagColor} />
            <div>
                <span>{title}</span>
                <small>{subtitle}</small>
            </div>
            <h3>{amount}</h3>
        </Container>  
        
        );
}

export default HistoryFinanceCard;

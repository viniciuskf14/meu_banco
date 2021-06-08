import React from 'react';
import {Container, Content} from './style'
import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'
import HistoryFinanceCard from '../../components/HistoryFinanceCard'


const options = [
    { value: 'Vinicius', label: 'Vinicius' },
    { value: 'Maria', label: 'Maria'},
    {value: 'Rejane', label: 'Rejane'},
 ];

const List: React.FC =() =>{
    return (


        <Container>
        <ContentHeader title ="List" lineColor ="#ffec97">
                <SelectInput options ={ options } />    
        </ContentHeader>
        
        <Content>
             <HistoryFinanceCard
             cardColor  ="#414141"
             tagColor ="#E44C4E"
             title = "Conta de energia"
             subtitle = "07/06/2021"
             amount = "R$ 130,00"
             />
        </Content>
        
        <Content>
             <HistoryFinanceCard
             cardColor  ="#414141"
             tagColor ="#E44C4E"
             title = "Conta de energia"
             subtitle = "07/06/2021"
             amount = "R$ 130,00"
             />
        </Content>

        <Content>
             <HistoryFinanceCard
             cardColor  ="#414141"
             tagColor ="#483cf3"
             title = "Conta de energia"
             subtitle = "07/06/2021"
             amount = "R$ 130,00"
             />
        </Content>

        <Content>
             <HistoryFinanceCard
             cardColor  ="#414141"
             tagColor ="#E44C4E"
             title = "Conta de energia"
             subtitle = "07/06/2021"
             amount = "R$ 130,00"
             />
        </Content>

        <Content>
             <HistoryFinanceCard
             cardColor  ="#414141"
             tagColor ="#483cf3"
             title = "Conta de energia"
             subtitle = "07/06/2021"
             amount = "R$ 130,00"
             />
        </Content>

        <Content>
             <HistoryFinanceCard
             cardColor  ="#414141"
             tagColor ="#E44C4E"
             title = "Conta de energia"
             subtitle = "07/06/2021"
             amount = "R$ 130,00"
             />
        </Content>

        <Content>
             <HistoryFinanceCard
             cardColor  ="#414141"
             tagColor ="#E44C4E"
             title = "Conta de energia"
             subtitle = "07/06/2021"
             amount = "R$ 130,00"
             />
        </Content>

        <Content>
             <HistoryFinanceCard
             cardColor  ="#414141"
             tagColor ="#483cf3"
             title = "Conta de energia"
             subtitle = "07/06/2021"
             amount = "R$ 130,00"
             />
        </Content>

        <Content>
             <HistoryFinanceCard
             cardColor  ="#414141"
             tagColor ="#E44C4E"
             title = "Conta de energia"
             subtitle = "07/06/2021"
             amount = "R$ 130,00"
             />
        </Content>

        <Content>
             <HistoryFinanceCard
             cardColor  ="#414141"
             tagColor ="#E44C4E"
             title = "Conta de energia"
             subtitle = "07/06/2021"
             amount = "R$ 130,00"
             />
        </Content>

        <Content>
             <HistoryFinanceCard
             cardColor  ="#414141"
             tagColor ="#483cf3"
             title = "Conta de energia"
             subtitle = "07/06/2021"
             amount = "R$ 130,00"
             />
        </Content>

        <Content>
             <HistoryFinanceCard
             cardColor  ="#414141"
             tagColor ="#E44C4E"
             title = "Conta de energia"
             subtitle = "07/06/2021"
             amount = "R$ 130,00"
             />
        </Content>
        
    </Container>
    )}

export default List;
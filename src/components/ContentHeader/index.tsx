import React from 'react';
import {Container, Controllers, TitleContainer} from "./style";
import SelectInput from '../SelectInput'

interface IcontentHeaderProps {
    title: string;
    lineColor: string;
    children: React.ReactNode
}


const ContentHeader: React.FC<IcontentHeaderProps> =({
     title, lineColor, children
}) =>{
    
   

     
    
    return (
        <Container>
        <TitleContainer>
        <h1>{title}</h1>
        </TitleContainer>

        <Controllers>
                   {children}
                 
        </Controllers>

        </Container>  );
}

export default ContentHeader;
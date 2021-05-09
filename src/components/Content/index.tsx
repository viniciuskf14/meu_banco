import React from 'react';
import {Container} from "C:/Users/Vinicius Gonçalves/Documents/web/src/components/Content/style";

const Content: React.FC =({children}) =>{
    return (
        <Container>
        {children}
        </Container>  );
}

export default Content;
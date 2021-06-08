import styled from 'styled-components'
interface IContainerProps {
    color: string
}

interface ITagProps {
    color: string
}


export const Container = styled.div<IContainerProps> `
background-color: ${props => props.color};

list-style:none;
border-radius: 5px;
border: 2px solid #373636;
margin: 10px 0;
padding: 12px 10px;
display:flex;
justify-content: space-between;
align-items: center;

cursor:pointer;
transition: all .3s;

position: relative;
>div{
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 17px;
}
&:hover{
    opacity: .7;
    transform: translateX(10px)
}
`;

export const Tag = styled.li<ITagProps> `
width: 10px;
height: 30px;

background-color: ${props => props.color};

position: absolute;

`;
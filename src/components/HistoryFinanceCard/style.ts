import styled from 'styled-components'


interface ITagProps {
    color: string
}


export const Container = styled.div `
background-color: ${props => props.theme.colors.secondary};

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

>div span{
    font-size: 24;
    font-weight: 600;
    

}
&:hover{
    opacity: .7;
    transform: translateX(10px)
}
`;

export const Tag = styled.li<ITagProps> `
width: 13px;
height: 30px;

background-color: ${props => props.color};

position: absolute;

`;
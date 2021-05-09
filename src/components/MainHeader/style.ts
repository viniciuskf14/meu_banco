import style from 'styled-components'

export const Container = style.div `
          grid-area: MH;
          
          background-color: ${props => props.theme.colors.secondary};
          color: ${props => props.theme.colors.white};  
         
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 10px;
          border-bottom: 1px solid ${props => props.theme.colors.gray};
`;

export const Profile = style.div `
       color: ${props => props.theme.colors.white};

`;
export const UserName = style.span `
`;
export const Welcome = style.h3 `
`;
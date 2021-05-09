import style from 'styled-components'



export const Container = style.div `
       grid-area: AS;
    
       background-color: ${props => props.theme.colors.secondary};
       color: ${props => props.theme.colors.white};
       padding-left: 20px;

       border-right: 1px solid ${props => props.theme.colors.gray};
 
 
          `;

 export const Header = style.header `
       display:flex;
       align-items: center;
       margin-top: 30px
 `;
 export const LogImg = style.img `
 height:40px;
 width: 40px`;

 export const Title = style.h3 `
       color: ${props => props.theme.colors.white};
       align-items:center;
       margin-left: 12px
 `;
 export const MenuContainer = style.nav `
 display:flex;
 flex-direction: column;
 margin-top: 50px;
 `

 export const MenuItemLink = style.a`
 color: ${props=>props.theme.colors.success};
 text-decoration:none;
 margin: 7px 0; 
 transition: opacity .3s ease-in-out;
 display:flex;
 align-items:center;
 &: hover{
       opacity: .7;
 }
 
 > svg{
       font-size: 18px;
      margin: 3px
 }`;

 

 
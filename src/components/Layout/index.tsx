import React from 'react';
import {Grid} from './style';


import MainHeader from '../MainHeader';
import Content from '../Content';
import Aside from '../Aside';

const Layout: React.FC =({children}) =>{
    return (
        <Grid>
        <Aside/>
        
        <MainHeader/>
        
        <Content>
          {children}
        </Content>
        
  </Grid>  );
}

export default Layout;
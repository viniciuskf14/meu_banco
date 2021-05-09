import React from 'react';
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'C:/Users/Vinicius Gonçalves/Documents/web/src/styles/GlobalStyle'
import Layout from 'C:/Users/Vinicius Gonçalves/Documents/web/src/components/Layout'
import dark from 'C:/Users/Vinicius Gonçalves/Documents/web/src/styles/temas/dark'
import Dashboard from './pages/Dashboard';

const App: React.FC =() =>{
    return(
        <ThemeProvider theme={dark}>
         <GlobalStyles/>
         <Layout>
             <Dashboard/>
         </Layout>
        </ThemeProvider>
    );
}

export default App;
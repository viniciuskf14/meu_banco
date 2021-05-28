import React from 'react';
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'C:/Users/Vinicius Gonçalves/Documents/web/src/styles/GlobalStyle'
import dark from 'C:/Users/Vinicius Gonçalves/Documents/web/src/styles/temas/dark'
import Dashboard from './pages/Dashboard';
import Routes from './routes'

const App: React.FC =() =>{
    return(
        <ThemeProvider theme={dark}>
         <GlobalStyles/>
         <Routes />
        </ThemeProvider>
    );
}

export default App;
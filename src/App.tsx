import React from 'react';
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/GlobalStyle'
import dark from './styles/temas/dark'
import List from './pages/List';
import Routes from './routes'
import Layout from './components/Layout';

const App: React.FC =() =>{
    return(
        <ThemeProvider theme={dark}>
         <GlobalStyles/>
         <Routes/>
        </ThemeProvider>
    );
}

export default App;
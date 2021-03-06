import React from 'react';
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/GlobalStyle'
import light from './styles/temas/light'
import List from './pages/List';
import Routes from './routes'
import Layout from './components/Layout';

const App: React.FC =() =>{
    return(
        <ThemeProvider theme={light}>
         <GlobalStyles/>
         <Routes/>
        </ThemeProvider>
    );
}

export default App;
import React,{useMemo} from 'react';
import emoji from 'C:/Users/Vinicius Gonçalves/Documents/web/src/uteis/emoji'
import {Container, Profile, UserName, Welcome} from './style';
import Toggle  from '../toggle';


const MainHeader: React.FC =() =>{
  const emojis = useMemo(()=> {
    const indice = Math.floor(Math.random() * emoji.length);
    return emoji[indice];
  }, [])
  return (
        <Container>
          
        <Toggle/>

        <Profile>
            <Welcome>Olá,{emojis}  </Welcome>
            <UserName>Vinicius Gonçalves</UserName>
        </Profile>

  </Container>  );
}

export default MainHeader;
import React from 'react';
import styled from 'styled-components';
import db from '../db.json';
import { useRouter } from 'next/router';

import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import GitHubCorner from '../src/components/GitHubCorner';
import Footer from '../src/components/Footer';
import QuizLogo from '../src/components/QuizLogo';
import Input from '../src/components/QuizInput';
import Button from '../src/components/Button';
import Logo from '../src/components/Logo';


// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
      <Logo />
        <Widget>
          <Widget.Header>
            <h1>::: Game Of Thrones :::</h1>
          </Widget.Header>
          <Widget.Content>
          <p>{db.description}</p>

            <form onSubmit={function(infosDoEvento){
              infosDoEvento.preventDefault();
              
              router.push(`/quiz?name=${name}`);
            }}
            >
             
              <Input 
              onChange={function(infosDoEvento){
                //State - Change State
                setName(infosDoEvento.target.value);
              }} 
              name="nomeDoUsuario"
              placeholder="Digite seu nome e VAMOS LÁ!" 
              value={name}
              />
              
             
              <Button className="bouncy" type="submit" disabled={name.length ===0}>
                {`JOGAR COMO: ${name}`}
              </Button>
          
            </form>
            
          </Widget.Content>

        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <p>Desafie seus conhecimentos respondendo ao  QUIZ da comunidade!!!</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https:github.com" />
    </QuizBackground>
  );
}

import React from 'react';
import styled from 'styled-components';
import db from '../db.json';
import { useRouter } from 'next/router';

import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizLogo from '../src/components/QuizLogo';
import Router from 'next/dist/next-server/server/router';
import { QuizInput } from '../src/components/QuizInput';

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

const QuizContainer = styled.div`
  width:100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px){
    margin:auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>::: Game Of Thrones :::</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function(infosDoEvento){
              infosDoEvento.preventDefault();
              
              router.push(`/quiz?name=${name}`);
            }}
            >
             
              <input onChange={function(infosDoEvento){
                //State - Change State
                setName(infosDoEvento.target.value);
              }} 
              
              placeholder="Diz aí seu nome" />
              
              
              <button type="submit" disabled={name.length ===0}>
                Jogar {name}
              </button>

            </form>
            <p>{db.description}</p>
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

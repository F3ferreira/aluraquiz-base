import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import GitHubCorner from '../src/components/GitHubCorner';
import Footer from '../src/components/Footer';
import Input from '../src/components/QuizInput';
import Button from '../src/components/Button';
import Logo from '../src/components/Logo';
import Link from '../src/components/Link';


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
        <Widget
          as={motion.section}
          transition={{
            delay:0,
            duration: 0.5
          }}
          variants={{
            show: { opacity: 1, y: '0'},
            hidden: { opacity: 0, y:'100%'},
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h1>Quiz - Game Of Thrones</h1>
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
        <Widget
          as={motion.section}
          transition={{
            delay:0.5,
            duration: 0.5
          }}
          variants={{
            show: { opacity: 1},
            hidden: { opacity: 0},
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            
            <ul>
            {db.external.map((linkExterno)=>{
              const [projectName, githubUser] = linkExterno
              .replace(/\//g, '')
              .replace('https:', '')
              .replace('vercel.app', '')
              .split('.');
              return (
                <li key={linkExterno}>
                  <Widget.Topic 
                  as={Link}
                  href={`/quiz/${projectName}___${githubUser}`}>

                    {`${githubUser}/${projectName}`}
                  </Widget.Topic>
                </li>
              );

            })}

            </ul>

          </Widget.Content>
        </Widget>
        <Footer
        
        as={motion.footer}
          transition={{
            delay:0,
            duration: 0.5
          }}
          variants={{
            show: { opacity: 1},
            hidden: { opacity: 0},
          }}
          initial="hidden"
          animate="show"

        />
      </QuizContainer>
      <GitHubCorner projectUrl="https:github.com" />
    </QuizBackground>
  );
}

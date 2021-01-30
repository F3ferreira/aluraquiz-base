import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';

export default function QuizDaGaleraPage({ dbExterno }) {
    return (

    <ThemeProvider theme={dbExterno.theme}>
        <QuizScreen 
        externalQuestions={dbExterno.questions} 
        externalBg={dbExterno.bg}
        />
    </ThemeProvider>
           
    );
}

export async function getServerSideProps(context) {
    const [projectName, githubUser] = context.query.id.split('___');
    const dbExterno = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
      .then((respostaDoServer)=>{
        if(respostaDoServer.ok) {
            return respostaDoServer.json();
        }
        throw new Error('Falha em conectar com base de dados');
      })
      .then ((respostaConvertidaEmObjeto)=> respostaConvertidaEmObjeto)
         
      .catch((err) =>{
          console.error(err);
      });

      console.log('dbExterno', dbExterno);
      console.log('infos pra nos', context.query.id);

    return {
        props: {
            dbExterno,
        },
    };
}
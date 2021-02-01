/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';

export default function FriendsQuizPage({ externalDB }) {
  return (
    <ThemeProvider theme={externalDB.theme}>
      <QuizScreen questions={externalDB.questions} backgroundImage={externalDB.bg} />
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const [projectName, githubUser] = id.split('___');

  const externalDB = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
    .then((result) => {
      if (result.ok) {
        return result.json();
      }

      throw new Error('Falha em pegar os dados');
    })
    // eslint-disable-next-line no-console
    .catch((err) => console.log(err));

  return {
    props: {
      externalDB,
    },
  };
}

import QuizBackground from '../components/QuizBackground';
import QuizContainer from '../components/QuizContainer';
import Widget from '../components/Widget';
import Footer from '../components/Footer';
import GitHubCorner from '../components/GitHubCorner';
import db from '../db.json';

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>CSS is Awesome</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Lorem ipsum</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header>
            <h1>Quizes da Galera</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Lorem ipsum</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/calazans10/aluraquiz" />
    </QuizBackground>
  );
}

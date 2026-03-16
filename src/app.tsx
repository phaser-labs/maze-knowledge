import GameMaze from './game-maze/game-maze';
import { GameResult, Question } from './game-maze/utils/types';

const questions: Question[] = [
  {
    question: '¿Qué es la contabilidad?',
    options: {
      a: 'Es el estudio de las matemáticas aplicadas a las finanzas.',
      b: 'Es el registro de las actividades financieras solo de empresas grandes.',
      c: 'Es el proceso de registrar, clasificar, resumir, analizar y evaluar las transacciones financieras para proporcionar información útil.',
      d: 'Es la gestión de los Impuestos de una empresa.'
    },
    correctAnswer: 'c'
  },
  {
    question: '¿Cuál es el objetivo principal de la contabilidad?',
    options: {
      a: 'Predecir el futuro económico del país.',
      b: 'Proporcionar información financiera útil para la toma de decisiones.',
      c: 'Evitar el pago de impuestos.',
      d: 'Controlar los precios del mercado.'
    },
    correctAnswer: 'b'
  }
];

function App() {
  return (
    <div id="app">
      <GameMaze questions={questions} onResult={(result: GameResult) => { console.log('result', result );}} />
    </div>
  );
}

export default App;

import GameField from './components/field/GameField';

import './Game.scss';

const Game = () => {

  return (
    <div className="game">
      <h1 className="game__header">Тестовое задание для AMAkids</h1>
      <GameField fieldSize={3}/>
    </div>
  );
}

export default Game;

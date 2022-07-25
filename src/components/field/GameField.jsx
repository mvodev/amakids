import { useEffect, useState } from 'react';

import Model from '../../model/Model';
import Steps from '../steps/Steps';

import './GameField.scss';

const GameField = (props) => {
  const { fieldSize } = props;
  const [ newGame, setNewGame ] = useState(false);
  const [ gameField, setGameGield ] = useState(null);
  const [ stepsArray, setStepsArray ] = useState([]);
  const [ finishPosition, setFinishPosition]  = useState({});

  useEffect(() => {
    const randomRow = Math.floor(Math.random()* fieldSize);
    const randomColumn = Math.floor(Math.random()* fieldSize);
    const startPosition = {
        row:randomRow,
        column: randomColumn,
      };
    const model = new Model(fieldSize,startPosition);
    const modelResult = model.generateStepsArrayAndFinish();
    const {stepsArray,finishPosition} = modelResult; 
    setStepsArray(stepsArray);
    setFinishPosition(finishPosition);
    const gameField = [];
    for(let i=0; i < fieldSize; i++) {
      const columns = [];
      for(let j=0;j<fieldSize; j++){
        if(i===startPosition.row && j===startPosition.column){
          columns.push(
            <div className="field__elem" data-column={j} data-row={i} key={j}>Старт</div>
          )
        } else {
          columns.push(
            <div className="field__elem" data-column={j} data-row={i} key={j}></div>
          )
        }
      }
      const row = 
        <div className="field__row" data-row={i} key={i}>
          {columns}
        </div>
      gameField.push(row);
    }
    setGameGield(gameField);
    setNewGame(false);
  },[newGame,fieldSize]);


  const handlerOnGameFieldClick = (event) => {
    setNewGame(true);
    const column = Number(event.target.dataset.column);
    const row = Number(event.target.dataset.row);
    if (column === finishPosition.column && row === finishPosition.row) {
      alert("Правильно");
    } else alert("Неправильно");
  }

  const handlerStartGame = () => {
    setNewGame(true);
  }

  return (
    <div className="game-field">
      <div className="field" onPointerDown={handlerOnGameFieldClick}>
      {gameField}
      <Steps stepsArray={stepsArray}/>
    </div>
    <button className="field__start-game" onPointerDown={handlerStartGame}>Начать новую игру?</button>
    </div>
  );
};

export default GameField;
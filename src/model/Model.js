class Model {
  
  constructor(fieldSize,startPosition){
    this.maxFieldSize = fieldSize;
    this.startPosition = startPosition;
    this.field = [
      [],
      [],
      [],
    ];
    this.POSSIBLE_MOVES = ['вправо','влево' , 'вверх', 'вниз'];
  }

  generateStepsArrayAndFinish = () => {
    let counter = 0;
    const stepsArray = [];
    let position = this.startPosition;
    while(counter < 10){
      while (true) {
        const step = this.getRandomMove();
        const tryStep = this.isValidStep(step,position);
        if (tryStep.isValid) {
          stepsArray.push(step);
          position = tryStep.newPosition;
          break;
        }
      }
      counter++;
    }
    return {
      stepsArray,finishPosition: position
    }
  }

  getRandomMove = ()=>{
    const randomMove = Math.floor(Math.random()*this.maxFieldSize);
    return this.POSSIBLE_MOVES[randomMove];
  }

  isValidStep = (step,position) =>{
    const { row,column } = position;
    switch(step) {
      case 'влево':
        if (column > 0){
          return {
            isValid:true,
            newPosition: {
              column: column -1,
              row,
            }
          }
        } else {
          return {
            isValid:false,
            newPosition: {},
          }
        } 
      case 'вправо': 
        if (column < this.maxFieldSize - 1){
          return {
            isValid:true,
            newPosition: {
              column: column + 1,
              row,
            }
          }
        } else {
          return {
            isValid:false,
            newPosition: {},
          }
        } 
      case 'вверх': 
        if (row <= 0){
          return {
            isValid:false,
            newPosition: {}
          }
        } else {
          return {
            isValid:true,
            newPosition: {
              column,
              row:row-1,
            },
          }
        }   
      case 'вниз': 
        if (row >= this.maxFieldSize - 1){
          return {
            isValid:false,
            newPosition: {}
          }
        } else {
          return {
            isValid:true,
            newPosition: {
              column,
              row:row+1,
            },
          }
        }  
      default:
        break;
    }
  }

}

export default Model;
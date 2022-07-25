import { useEffect, useState } from 'react';

import './Steps.scss';

const Steps = (props) => {
  const {stepsArray} = props;
  const [stepsState,setStepsState] = useState(stepsArray);

  useEffect(()=>{
    let counter = 0;
    const steps = [];
    for(let i=0;i<2;i++) {
    const elements = [];
    for(let j=0; j<5; j++){
      const step = 
        <div className="steps__elem" key={j}>
          {stepsArray[counter]}
        </div>
      elements.push(step);
      counter++;
    }
    const row = 
      <div className="steps__row" key={i}>
      {elements}
      </div>
      steps.push(row);
    }
    setStepsState(steps);
  },[stepsArray])

  return (
    <div className="steps">
      <h2 className="steps__header">Ходы</h2>
      {stepsState}
    </div>
  );
};

export default Steps;
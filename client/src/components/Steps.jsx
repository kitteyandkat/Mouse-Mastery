import React, { useEffect, useState } from 'react';

const Steps = () => {
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    const mockStepsData = [
      { step_text: 'Step 1' },
      { step_text: 'Step 2' },
      { step_text: 'Step 3' },
      // ...more steps
    ];
    setSteps(mockStepsData);
  }, []);

  return (
    <div>
      <h1>Steps</h1>
      <ol>
        {steps.map((step, index) => (
          <li key={index}>{step.step_text}</li>
        ))}
      </ol>
    </div>
  );
};

export default Steps;



/*the steps component takes in these props:

steps:an array of objects representing each step in the module, with each object containing a stepText property 


currentStep: an integer representing the index of the current step being displayed

onNextStep: a function that gets called when the user clicks the "Next" button.
The component uses the currentStep prop to access the current step object from the step array, 
and renders the step text.
When the user clicks the "Next" button, the handleNextStep function is called, 
which in turn calls the onNextStep function passed in as a prop.
*/
import { useState } from "react";

// Here is a wrong way to update a step by manually updating it the reason behinf its failure is that setstep is tightly bind to step so whenever we try to update it manually it wont show nay error but it wont work
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

//we can only use hooks on the top level of function
//export is for to make components functions variables or objects available to other
export default function App() {
  let [step, setStep] = useState(1); //usestate function is called a hook in react
  // const arr = useState(1);
  // console.log(arr);
  // const step = 1;

  function handlePrevious() {
    // alert("Previous");
    if (step > 1) setStep(step - 1);
  }

  function handleNext() {
    // alert("Next");
    // if (step < 3) setStep(step + 1);
    step = step + 1;
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>
      <p className="message">
        Step {step}:{messages[step - 1]}
      </p>

      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

// onMouseEnter ={()=>alert("Test")}
// onClick={()=> alert("Previous")}

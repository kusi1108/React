import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

//we can only use hooks on the top level of function
//export is for to make components functions variables or objects available to other
export default function App() {
  const [step, setStep] = useState(1); //usestate function is called a hook in react
  const [isOpen, setIsOpen] = useState(true);
  // const [test, setTest] = useState({ name: "Khushi" });
  // const arr = useState(1);
  // console.log(arr);
  // const step = 1;

  function handlePrevious() {
    // alert("Previous");
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    // alert("Next");
    if (step < 3) {
      setStep((s) => s + 1);
      setStep((s) => s + 1);
    }
    //Bad Practice
    // test.name = "Fred";
    // setTest({ name: "Alok" });
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}:{messages[step - 1]}
            {/* {test.name} */}
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
      )}
    </div>
  );
}

// onMouseEnter ={()=>alert("Test")}
// onClick={()=> alert("Previous")}

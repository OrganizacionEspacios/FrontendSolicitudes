import { useMultisetpForm } from "./useMultistepFrom";
import UserForm from "./UserForm";
import AddressForm from "./AddressForm";
import { FormEvent, useState } from "react";
import CalendarComponent from "./CalendarComponent";

type FormData = {
  requesterName: string;
  requesterID: string;
  requesterEmail: string;
  eventName: string;
  eventType: "internal" | "external";
  assistants: number;
  materials: {
    tv: boolean;
    videobeam: boolean;
    microphone: boolean;
  };
};

const INITIAL_DATA: FormData = {
  requesterName: "",
  requesterID: "",
  requesterEmail: "",
  eventName: "",
  eventType: "internal",
  assistants: 0,
  materials: {
    tv: false,
    videobeam: false,
    microphone: false,
  },
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } =
    useMultisetpForm([
      <CalendarComponent />,
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
    ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Sending the form");
  }

  return (
    <div
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "2rem",
        margin: "1rem",
        borderRadius: ".5rem",
        fontFamily: "Arial",
      }}
    >
      <form onSubmit={onSubmit}>
        <div
          style={{
            position: "absolute",
            top: ".5rem",
            right: ".5rem",
          }}
        >
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: "0.5rem",
            justifyContent: "flex-end",
          }}
        >
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
  );
}

export default App;

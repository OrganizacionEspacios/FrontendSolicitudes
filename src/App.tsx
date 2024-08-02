import { useMultisetpForm } from "./useMultistepFrom";
import UserForm from "./UserForm";
import AddressForm from "./EventForm";
import { FormEvent, useState } from "react";
import ScheduleForm from "./ScheduleForm";
import SummaryForm from "./SummaryForm";

type FormData = {
  // UserForm fields
  requesterName: string;
  requesterEmail: string;
  requesterAffiliationType:
    | "estudiante"
    | "docente"
    | "contratista"
    | "funcionario/administrativo"
    | "externoUN";
  requesterDependency: string | null;

  // EventForm fields
  eventName: string;
  eventType: "reunión" | "clase" | "parcial" | "congreso" | "otro";
  eventNumberAsistants: number;
  eventMaterials: {
    tv: boolean;
    videobeam: boolean;
  };
  eventComments: string;

  // ScheduleForm fields
  startDate: Date;
  endDate: Date;
  schedules: [
    {
      dayOfWeek: string[];
      startTime: string;
      endTime: string;
      recurrence: string | null;
    }
  ];
};

const INITIAL_DATA: FormData = {
  requesterName: "",
  requesterEmail: "",
  requesterAffiliationType: "estudiante", // Set to one of the new values
  requesterDependency: null, // Allow null

  eventName: "",
  eventType: "reunión", // Set to one of the new values
  eventNumberAsistants: 0,
  eventMaterials: {
    tv: false,
    videobeam: false,
  },
  eventComments: "",

  startDate: new Date(),
  endDate: new Date(),
  schedules: [
    {
      dayOfWeek: ["Monday"],
      startTime: "10:00",
      endTime: "19:00",
      recurrence: null,
    },
  ],
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
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <ScheduleForm {...data} updateFields={updateFields} />,
      <SummaryForm data={data} />,
    ]);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();

    console.log("Submitting form:", data);

    try {
      const response = await fetch("http://localhost:3000/add-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        alert("Failed to submit the form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
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

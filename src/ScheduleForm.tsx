import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FormWrapper from "./FormWrapper";

type ScheduleData = {
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

type ScheduleFormProps = ScheduleData & {
  updateFields: (fields: Partial<ScheduleData>) => void;
};

function ScheduleForm({
  startDate,
  schedules,
  updateFields,
}: ScheduleFormProps) {
  const [dayOfWeek, setDayOfWeek] = useState<string>("");

  const handleDateChange = (date: Date | null) => {
    if (date) {
      updateFields({
        startDate: date,
        endDate: date,
      });
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const dayOfWeek = days[date.getDay()];
      setDayOfWeek(dayOfWeek);
      console.log(`Selected date: ${date}, Day of the week: ${dayOfWeek}`);
    } else {
      setDayOfWeek("");
      console.log("No date selected");
    }
  };

  const handleTimeChange = (field: "startTime" | "endTime", value: string) => {
    const updatedSchedules = [
      {
        ...schedules[0],
        [field]: value,
        recurrence: null,
      },
    ] as [
      {
        dayOfWeek: string[];
        startTime: string;
        endTime: string;
        recurrence: string | null;
      }
    ];
    updateFields({ schedules: updatedSchedules });
  };

  return (
    <FormWrapper title="Horario de reserva">
      <DatePicker selected={startDate} onChange={handleDateChange} inline />
      <label>
        Hora de inicio:
        <input
          type="time"
          onChange={(e) => handleTimeChange("startTime", e.target.value)}
          value={schedules[0].startTime}
        />
      </label>
      <label>
        Hora de fin:
        <input
          type="time"
          onChange={(e) => handleTimeChange("endTime", e.target.value)}
          value={schedules[0].endTime}
        />
      </label>
    </FormWrapper>
  );
}

export default ScheduleForm;

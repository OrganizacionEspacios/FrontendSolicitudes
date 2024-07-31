import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type ScheduleData = {
  customValue: any;
  startTime: string;
  endTime: string;
};

type ScheduleFormProps = ScheduleData & {
  updateFields: (fields: Partial<ScheduleData>) => void;
};

type DateRange = {
  startDate: Date | undefined;
  endDate: Date | undefined;
};

function ScheduleForm({
  customValue,
  startTime,
  endTime,
  updateFields,
}: ScheduleFormProps) {
  console.log("customValue", customValue);

  const [dateRange, setDateRange] = useState<DateRange>({
    startDate: undefined,
    endDate: undefined,
  });

  // const [startTime, setStartTime] = useState("10:00");
  // const [endTime, setEndTime] = useState("18:00");

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setDateRange({ startDate: start || undefined, endDate: end || undefined });
  };

  // const handleStartTimeChange = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   setStartTime(event.target.value);
  // };

  // const handleEndTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setEndTime(event.target.value);
  // };

  return (
    <div className="ScheduleForm">
      <DatePicker
        selected={dateRange.startDate}
        onChange={handleDateChange}
        startDate={dateRange.startDate}
        endDate={dateRange.endDate}
        selectsRange
        inline
      />
      <label>
        Hora de inicio:
        <input
          type="time"
          onChange={(e) => updateFields({ startTime: e.target.value })}
          value={startTime}
        />
      </label>
      <label>
        Hora de fin:
        <input
          type="time"
          onChange={(e) => updateFields({ endTime: e.target.value })}
          value={endTime}
        />
      </label>
    </div>
  );
}

export default ScheduleForm;

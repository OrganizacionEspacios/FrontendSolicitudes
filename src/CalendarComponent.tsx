import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type DateRange = {
  startDate: Date | undefined;
  endDate: Date | undefined;
};

function CalendarComponent() {
  const [dateRange, setDateRange] = useState<DateRange>({
    startDate: undefined,
    endDate: undefined,
  });
  const [startTime, setStartTime] = useState("10:00");
  const [endTime, setEndTime] = useState("18:00");

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setDateRange({ startDate: start || undefined, endDate: end || undefined });
  };

  const handleStartTimeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setStartTime(event.target.value);
  };

  const handleEndTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndTime(event.target.value);
  };

  return (
    <div className="CalendarComponent">
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
        <input type="time" onChange={handleStartTimeChange} value={startTime} />
      </label>
      <label>
        Hora de fin:
        <input type="time" onChange={handleEndTimeChange} value={endTime} />
      </label>
    </div>
  );
}

export default CalendarComponent;

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type ScheduleData = {
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

function ScheduleForm({ startTime, endTime, updateFields }: ScheduleFormProps) {
  const [dateRange, setDateRange] = useState<DateRange>({
    startDate: undefined,
    endDate: undefined,
  });

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setDateRange({ startDate: start || undefined, endDate: end || undefined });
  };

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

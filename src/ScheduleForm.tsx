import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type DateRange = {
  startDate: Date | undefined;
  endDate: Date | undefined;
};

type ScheduleData = {
  startTime: string;
  endTime: string;
  dateRange: DateRange;
};

type ScheduleFormProps = ScheduleData & {
  updateFields: (fields: Partial<ScheduleData>) => void;
};

function ScheduleForm({
  startTime,
  endTime,
  updateFields,
  dateRange,
}: ScheduleFormProps) {
  // const [dateRange, setDateRange] = useState<DateRange>({
  //   startDate: undefined,
  //   endDate: undefined,
  // });

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;

    // Print it here
    console.log("Selected start date:", start);
    console.log("Selected end date:", end);

    updateFields({
      dateRange: { startDate: start || undefined, endDate: end || undefined },
    });
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

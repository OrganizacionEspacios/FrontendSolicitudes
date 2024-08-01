import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FormWrapper from "./FormWrapper";

type ScheduleData = {
  startTime: string;
  endTime: string;
  startDate: Date | undefined;
};

type ScheduleFormProps = ScheduleData & {
  updateFields: (fields: Partial<ScheduleData>) => void;
};

function ScheduleForm({
  startTime,
  endTime,
  updateFields,
  startDate,
}: ScheduleFormProps) {
  const handleDateChange = (date: Date | null) => {
    updateFields({
      startDate: date || undefined,
    });
  };

  return (
    <FormWrapper title="Horario de reserva">
      <DatePicker selected={startDate} onChange={handleDateChange} inline />
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
    </FormWrapper>
  );
}

export default ScheduleForm;

import FormWrapper from "./FormWrapper";

type EventData = {
  eventName: string;
  eventType: "internal" | "external";
  assistants: number;
  materials: {
    tv: boolean;
    videobeam: boolean;
    microphone: boolean;
  };
};

type EventFormProps = EventData & {
  updateFields: (fields: Partial<EventData>) => void;
};

const EventForm = ({
  eventName,
  eventType,
  assistants,
  materials,
  updateFields,
}: EventFormProps) => {
  return (
    <FormWrapper title="Evento">
      <label>Nombre del evento</label>
      <input
        autoFocus
        required
        type="text"
        value={eventName}
        onChange={(e) => updateFields({ eventName: e.target.value })}
      />

      <label>Tipo de evento</label>
      <select
        value={eventType}
        onChange={(e) =>
          updateFields({ eventType: e.target.value as "internal" | "external" })
        }
      >
        <option value="internal">Interno</option>
        <option value="external">Externo</option>
      </select>

      <label>Número de asistentes</label>
      <input
        required
        type="number"
        value={assistants}
        onChange={(e) => updateFields({ assistants: parseInt(e.target.value) })}
      />

      <label>Materiales requeridos</label>
      <div>
        <label>
          <input
            type="checkbox"
            checked={materials.tv}
            onChange={(e) =>
              updateFields({
                materials: { ...materials, tv: e.target.checked },
              })
            }
          />
          TV
        </label>
        <label>
          <input
            type="checkbox"
            checked={materials.videobeam}
            onChange={(e) =>
              updateFields({
                materials: { ...materials, videobeam: e.target.checked },
              })
            }
          />
          Videobeam
        </label>
        <label>
          <input
            type="checkbox"
            checked={materials.microphone}
            onChange={(e) =>
              updateFields({
                materials: { ...materials, microphone: e.target.checked },
              })
            }
          />
          Microphone
        </label>
      </div>
    </FormWrapper>
  );
};

export default EventForm;

import FormWrapper from "./FormWrapper";

type EventData = {
  eventName: string;
  eventType: "Reunión" | "Clase" | "Parcial" | "Congreso" | "Otro";
  eventNumberAsistants: number;
  eventMaterials: {
    tv: boolean;
    videobeam: boolean;
  };
  eventComments: string;
};

type EventFormProps = EventData & {
  updateFields: (fields: Partial<EventData>) => void;
};

const EventForm = ({
  eventName,
  eventType,
  eventNumberAsistants,
  eventMaterials,
  eventComments,
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
          updateFields({
            eventType: e.target.value as
              | "Reunión"
              | "Clase"
              | "Parcial"
              | "Congreso"
              | "Otro",
          })
        }
      >
        <option value="Reunión">Reunión</option>
        <option value="Clase">Clase</option>
        <option value="Parcial">Parcial</option>
        <option value="Congreso">Congreso</option>
        <option value="Otro">Otro</option>
      </select>

      <label>Número de asistentes</label>
      <input
        required
        type="number"
        value={eventNumberAsistants}
        onChange={(e) =>
          updateFields({ eventNumberAsistants: parseInt(e.target.value) })
        }
      />

      <label>Materiales requeridos</label>
      <div>
        <label>
          <input
            type="checkbox"
            checked={eventMaterials.tv}
            onChange={(e) =>
              updateFields({
                eventMaterials: { ...eventMaterials, tv: e.target.checked },
              })
            }
          />
          TV
        </label>
        <label>
          <input
            type="checkbox"
            checked={eventMaterials.videobeam}
            onChange={(e) =>
              updateFields({
                eventMaterials: {
                  ...eventMaterials,
                  videobeam: e.target.checked,
                },
              })
            }
          />
          Videobeam
        </label>
      </div>

      <label>Comentarios del evento</label>
      <textarea
        value={eventComments}
        onChange={(e) => updateFields({ eventComments: e.target.value })}
      />
    </FormWrapper>
  );
};

export default EventForm;

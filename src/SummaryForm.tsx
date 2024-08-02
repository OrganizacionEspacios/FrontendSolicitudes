import React from "react";

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

interface SummaryFormProps {
  data: FormData;
}

const SummaryForm: React.FC<SummaryFormProps> = ({ data }) => {
  const {
    requesterName,
    requesterEmail,
    requesterAffiliationType,
    requesterDependency,
    eventName,
    eventType,
    eventNumberAsistants,
    eventMaterials,
    eventComments,
    startDate,
    endDate,
    schedules,
  } = data;

  return (
    <div>
      <h2>Resumen de la reserva</h2>
      <p>Detalles del solicitante:</p>
      <ul>
        <li>
          <strong>Nombre:</strong> {requesterName}
        </li>
        <li>
          <strong>Email:</strong> {requesterEmail}
        </li>
        <li>
          <strong>Tipo de afiliación:</strong> {requesterAffiliationType}
        </li>
        <li>
          <strong>Dependencia:</strong> {requesterDependency || "N/A"}
        </li>
      </ul>
      <p>Detalles del evento:</p>
      <ul>
        <li>
          <strong>Nombre del evento:</strong> {eventName}
        </li>
        <li>
          <strong>Tipo de evento:</strong> {eventType}
        </li>
        <li>
          <strong>Número de asistentes:</strong> {eventNumberAsistants}
        </li>
        <li>
          <strong>Materiales:</strong> {eventMaterials.tv ? "TV, " : ""}
          {eventMaterials.videobeam ? "Videobeam" : ""}
        </li>
        <li>
          <strong>Comentarios:</strong> {eventComments}
        </li>
        <li>
          <strong>Fecha de inicio:</strong> {startDate?.toLocaleDateString()}
        </li>
        <li>
          <strong>Fecha de fin:</strong> {endDate?.toLocaleDateString()}
        </li>
      </ul>
      <p>Horarios:</p>
      <ul>
        {schedules.map((schedule, index) => (
          <li key={index}>
            <strong>Días de la semana:</strong> {schedule.dayOfWeek.join(", ")}
            <br />
            <strong>Hora de inicio:</strong> {schedule.startTime}
            <br />
            <strong>Hora de fin:</strong> {schedule.endTime}
            <br />
            <strong>Recurrencia:</strong> {schedule.recurrence || "N/A"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SummaryForm;

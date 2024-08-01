import React from 'react';

type FormData = {
  requesterName: string;
  requesterID: string;
  requesterEmail: string;
  eventName: string;
  eventType: "internal" | "external";
  assistants: number;
  materials: {
    tv: boolean;
    videobeam: boolean;
    microphone: boolean;
  };
  startTime: string;
  endTime: string;
  startDate: Date | undefined;
};

interface SummaryFormProps {
  data: FormData;
}

const SummaryForm: React.FC<SummaryFormProps> = ({ data }) => {
  const {
    requesterName,
    requesterID,
    requesterEmail,
    eventName,
    eventType,
    assistants,
    materials,
    startTime,
    endTime,
    startDate,
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
          <strong>ID:</strong> {requesterID}
        </li>
        <li>
          <strong>Email:</strong> {requesterEmail}
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
          <strong>Asistentes:</strong> {assistants}
        </li>
        <li>
          <strong>Materiales:</strong> {materials.tv ? 'TV, ' : ''}{materials.videobeam ? 'Videobeam, ' : ''}{materials.microphone ? 'Micrófono' : ''}
        </li>
        <li>
          <strong>Fecha:</strong> {startDate?.toLocaleDateString()}
        </li>
        <li>
          <strong>Hora de inicio:</strong> {startTime}
        </li>
        <li>
          <strong>Hora de fin:</strong> {endTime}
        </li>
      </ul>
    </div>
  );
};

export default SummaryForm;
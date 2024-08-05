import React from "react";
import styles from "./styles/SummaryForm.module.css";

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

const dayOfWeekMapping: { [key: string]: string } = {
  Sunday: "Domingo",
  Monday: "Lunes",
  Tuesday: "Martes",
  Wednesday: "Miércoles",
  Thursday: "Jueves",
  Friday: "Viernes",
  Saturday: "Sábado",
};

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
    <div className={styles.container}>
      <h2 className={styles.heading}>Resumen de la reserva</h2>
      <div className={styles.contentContainer}>
        <div className={styles.dataContainer}>
          <p className={styles.sectionTitle}>Detalles del evento</p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Nombre del evento:</strong> {eventName}
            </li>
            <li className={styles.listItem}>
              <strong>Tipo de evento:</strong> {eventType}
            </li>
            <li className={styles.listItem}>
              <strong>Número de asistentes:</strong> {eventNumberAsistants}
            </li>
            <li className={styles.listItem}>
              <strong>Materiales:</strong> {eventMaterials.tv ? "TV, " : ""}
              {eventMaterials.videobeam ? "Videobeam" : ""}
            </li>
            <li className={styles.listItem}>
              <strong>Comentarios:</strong> {eventComments}
            </li>
          </ul>
        </div>
        <div className={styles.dataContainer}>
          <p className={styles.sectionTitle}>Horarios</p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Fecha de inicio:</strong> {startDate?.toLocaleDateString()}
            </li>
            <li className={styles.listItem}>
              <strong>Fecha de fin:</strong> {endDate?.toLocaleDateString()}
            </li>
            {schedules.map((schedule, index) => (
              <li key={index} className={styles.listItem}>
                <strong>Hora de inicio:</strong> {schedule.startTime}
                <br />
                <strong>Hora de fin:</strong> {schedule.endTime}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.finalMessage}>
        <p>
          Estimado {requesterName}, usted recibirá una confirmación de recibido a su correo {requesterEmail}. Muchas gracias.
        </p>
      </div>
    </div>
  );
};

export default SummaryForm;
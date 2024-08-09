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
 eventType: "Reunión" | "Clase" | "Parcial" | "Congreso" | "Otro";
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

  const calculatePrice = (numberOfAsistants: number): string => {
    if (numberOfAsistants <= 24) return "$54,600";
    if (numberOfAsistants >= 25 && numberOfAsistants <= 32) return "$62,400";
    if (numberOfAsistants >= 33 && numberOfAsistants <= 36) return "$65,000";
    if (numberOfAsistants >= 37 && numberOfAsistants <= 50) return "$71,500";
    if (numberOfAsistants >= 51 && numberOfAsistants <= 60) return "$91,000";
    if (numberOfAsistants >= 61 && numberOfAsistants <= 118) return "$227,500";
    if (numberOfAsistants >= 119 && numberOfAsistants <= 153) return "$260,000";
    if (numberOfAsistants >= 154 && numberOfAsistants <= 240) return "$429,000";
    return "No es posible";
  };

  const price =
    requesterAffiliationType === "externoUN"
      ? calculatePrice(eventNumberAsistants)
      : null;

  const materials =
    eventMaterials.tv || eventMaterials.videobeam
      ? `${eventMaterials.tv ? "TV, " : ""}${
          eventMaterials.videobeam ? "Videobeam" : ""
        }`
      : "Ninguno";

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
              <strong>Materiales:</strong> {materials}
            </li>
            {eventComments && (
              <li className={styles.listItem}>
                <strong>Comentarios:</strong> {eventComments}
              </li>
            )}
          </ul>
        </div>
        <div className={styles.dataContainer}>
          <p className={styles.sectionTitle}>Horarios</p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Fecha de inicio:</strong>{" "}
              {startDate?.toLocaleDateString()}
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
          Estimado {requesterName}, usted recibirá una confirmación de recibido
          a su correo {requesterEmail}. Muchas gracias.{" "}
          {price &&
            `Recuerde que el precio para un espacio de ${eventNumberAsistants} personas es de ${price}.`}
        </p>
      </div>
    </div>
  );
};

export default SummaryForm;

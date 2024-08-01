import FormWrapper from "./FormWrapper";

type UserData = {
  requesterName: string;
  requesterID: string;
  requesterEmail: string;
  requesterAffiliationType: string;
  requesterDependency: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const UserForm = ({
  requesterName,
  requesterID,
  requesterEmail,
  requesterAffiliationType,
  requesterDependency,
  updateFields,
}: UserFormProps) => {
  return (
    <FormWrapper title="Detalles de usuario">
      <label>Nombre del solicitante</label>
      <input
        autoFocus
        required
        type="text"
        value={requesterName}
        onChange={(e) => updateFields({ requesterName: e.target.value })}
      />
      <label>ID del solicitante</label>
      <input
        required
        type="text"
        value={requesterID}
        onChange={(e) => updateFields({ requesterID: e.target.value })}
      />
      <label>Email del solicitante</label>
      <input
        required
        type="email"
        value={requesterEmail}
        onChange={(e) => updateFields({ requesterEmail: e.target.value })}
      />
      <label>Tipo de vinculación</label>
      <select
        required
        value={requesterAffiliationType}
        onChange={(e) => updateFields({ requesterAffiliationType: e.target.value })}
      >
        <option value="">Seleccione una opción</option>
        <option value="estudiante">Estudiante</option>
        <option value="profesor">Profesor</option>
        <option value="administrativo">Administrativo</option>
      </select>
      <label>Dependencia</label>
      <select
        required
        value={requesterDependency}
        onChange={(e) => updateFields({ requesterDependency: e.target.value })}
      >
        <option value="">Seleccione una opción</option>
        <option value="ingeniería">Ingeniería</option>
        <option value="economía">Economía</option>
        <option value="ciencias">Ciencias</option>
      </select>
    </FormWrapper>
  );
};

export default UserForm;
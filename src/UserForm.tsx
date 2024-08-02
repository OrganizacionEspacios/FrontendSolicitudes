import FormWrapper from "./FormWrapper";

type UserData = {
  requesterName: string;
  requesterEmail: string;
  requesterAffiliationType:
    | "estudiante"
    | "docente"
    | "contratista"
    | "funcionario/administrativo"
    | "externoUN";
  requesterDependency: string | null;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const UserForm = ({
  requesterName,
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
        onChange={(e) =>
          updateFields({
            requesterAffiliationType: e.target.value as
              | "estudiante"
              | "docente"
              | "contratista"
              | "funcionario/administrativo"
              | "externoUN"
              | undefined,
          })
        }
      >
        <option value="">Seleccione una opción</option>
        <option value="estudiante">Estudiante</option>
        <option value="docente">Docente</option>
        <option value="contratista">Contratista</option>
        <option value="funcionario/administrativo">
          Funcionario/Administrativo
        </option>
        <option value="externoUN">Externo UN</option>
      </select>
      <label>Dependencia</label>
      <input
        type="text"
        value={requesterDependency || ""}
        onChange={(e) =>
          updateFields({ requesterDependency: e.target.value || null })
        }
      />
    </FormWrapper>
  );
};

export default UserForm;

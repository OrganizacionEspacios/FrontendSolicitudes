import FormWrapper from "./FormWrapper";

type UserData = {
  requesterName: string;
  requesterID: string;
  requesterEmail: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const UserForm = ({
  requesterName,
  requesterID,
  requesterEmail,
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
    </FormWrapper>
  );
};

export default UserForm;

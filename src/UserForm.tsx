import React, { useState } from "react";
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
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validateEmail = (email: string, affiliationType: string) => {
    if (
      affiliationType !== "externoUN" &&
      !email.endsWith("@organizationedu.com")
    ) {
      setErrorMessage(
        "El correo debe terminar con '@organizationedu.com' para los tipos de vinculación diferentes a 'externoUN'."
      );
      return false;
    }
    setErrorMessage(null);
    return true;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    updateFields({ requesterEmail: email });
    validateEmail(email, requesterAffiliationType);
  };

  const handleEmailBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const email = e.target.value;
    const isValid = validateEmail(email, requesterAffiliationType);
    e.target.setCustomValidity(isValid ? "" : errorMessage || "");
    e.target.reportValidity();
  };

  const handleAffiliationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const affiliationType = e.target
      .value as UserData["requesterAffiliationType"];
    updateFields({ requesterAffiliationType: affiliationType });
    const isValid = validateEmail(requesterEmail, affiliationType);
    const emailInput = document.querySelector<HTMLInputElement>(
      'input[type="email"]'
    );
    if (emailInput) {
      emailInput.setCustomValidity(isValid ? "" : errorMessage || "");
      emailInput.reportValidity();
    }
  };

  return (
    <FormWrapper title="Detalles de usuario">
      <label>Tipo de vinculación</label>
      <select
        required
        value={requesterAffiliationType}
        onChange={handleAffiliationChange}
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
      <label>Email del solicitante</label>
      <input
        required
        type="email"
        value={requesterEmail}
        onChange={handleEmailChange}
        onBlur={handleEmailBlur}
        onInput={(e) => e.currentTarget.setCustomValidity("")}
        style={{ borderColor: errorMessage ? "red" : "initial" }}
      />
      <label>Nombre del solicitante</label>
      <input
        autoFocus
        required
        type="text"
        value={requesterName}
        onChange={(e) => updateFields({ requesterName: e.target.value })}
      />
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

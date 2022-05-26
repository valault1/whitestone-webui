import React from "react";
import { Form } from "../components/Form";
import { useFormDataInput } from "../helpers/useFormDataInput";
import { DISCIPLINE_FORM_METADATA } from "./disciplineFormDefinition";

type DisciplineFormControllerProps = {};

export const DisciplineFormController = ({}: DisciplineFormControllerProps) => {
  const { inputFieldsState: fields, handleChange } = useFormDataInput(
    DISCIPLINE_FORM_METADATA
  );

  return (
    <Form
      fields={fields}
      onSubmit={() => {}}
      fieldsMetadata={DISCIPLINE_FORM_METADATA}
      onChange={handleChange}
    />
  );
};

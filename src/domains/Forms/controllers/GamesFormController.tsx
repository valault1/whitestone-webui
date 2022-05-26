import React from "react";
import { Form } from "../components/Form";
import { useFormDataInput } from "../helpers/useFormDataInput";
import { GAMES_FORM_METADATA } from "./gamesFormDefinition";

type GamesFormControllerProps = {};

export const GamesFormController = ({}: GamesFormControllerProps) => {
  const { inputFieldsState: fields, handleChange } =
    useFormDataInput(GAMES_FORM_METADATA);

  return (
    <Form
      fields={fields}
      onSubmit={() => {}}
      fieldsMetadata={GAMES_FORM_METADATA}
      onChange={handleChange}
    />
  );
};

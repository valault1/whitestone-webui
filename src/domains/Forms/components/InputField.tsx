import { FieldType, FieldMetadata, Field } from "../sharedTypes";
import * as React from "react";
import { TextField } from "@mui/material";
import { StyledTextField } from "./Form.elements";
// converts an input field into a component to enter that field
type InputFieldComponentInputs = {
  field: Field;
  onChange: ({ name, value }: { name: string; value: any }) => void;
};

export const InputFieldComponent = ({
  field,
  onChange,
}: InputFieldComponentInputs) => {
  if (field.type === FieldType.NUMBER) {
    return (
      <StyledTextField
        label={field.label}
        variant="outlined"
        value={field.value}
        onChange={(e) => onChange({ name: field.name, value: e.target.value })}
      />
    );
  } else return <></>;
};

import { Button } from "@mui/material";
import React from "react";
import { formatDollars } from "../helpers/formatters";
import { getFieldMetadataByName } from "../helpers/getFieldMetadata";
import { InputFieldComponent } from "./InputField";
import { useFormDataInput } from "../helpers/useFormDataInput";
import { FieldType, FieldMetadata, InputFieldsState } from "../sharedTypes";
import { FieldsWrapper, MainFormContainer } from "./Form.elements";

type CalculatorProps = {
  fields: InputFieldsState;
  onChange: ({ name, value }: { name: string; value: any }) => void;
  onSubmit: () => void;
  fieldsMetadata: FieldMetadata[];
};
export const Form = ({
  fields,
  onChange,
  fieldsMetadata,
  onSubmit,
}: CalculatorProps) => {
  return (
    <>
      <MainFormContainer>
        <FieldsWrapper>
          {Array.from(fields.keys()).map((key) => {
            return (
              <InputFieldComponent
                field={{
                  ...getFieldMetadataByName(fieldsMetadata, key),
                  value: fields.get(key),
                }}
                onChange={onChange}
              />
            );
          })}
          <Button variant="contained" onClick={onSubmit}>
            Submit
          </Button>
        </FieldsWrapper>
      </MainFormContainer>
    </>
  );
};

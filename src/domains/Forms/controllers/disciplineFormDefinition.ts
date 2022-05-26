import { FieldMetadata, FieldType } from "../sharedTypes";

export const DISCIPLINE_FORM_METADATA: FieldMetadata[] = [
  {
    name: "submitter",
    label: "Your name",
    type: FieldType.NUMBER,
  },
  {
    name: "requestedPerson",
    label: "Person being disciplined",
    type: FieldType.NUMBER,
  },
  {
    name: "reason",
    label: "Reason",
    type: FieldType.NUMBER,
  },
];

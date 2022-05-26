import { FieldMetadata, FieldType } from "../sharedTypes";

export const GAMES_FORM_METADATA: FieldMetadata[] = [
  {
    name: "submitter",
    label: "Your name",
    type: FieldType.NUMBER,
  },
  {
    name: "requestedPerson",
    label: "Person you're requesting",
    type: FieldType.NUMBER,
  },
  {
    name: "reason",
    label: "Reason you're requesting",
    type: FieldType.NUMBER,
  },
];

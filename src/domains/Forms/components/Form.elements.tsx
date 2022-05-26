import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import { theme } from "../../../infra/theme";

export const MainContainer = styled.div(() => ({
  display: "flex",
  justifyContent: "center",
  borderBottom: "2",
  borderColor: "divider",
  backgroundColor: theme.colors.background,
  padding: 20,
}));

export const MainFormContainer = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  borderBottom: "2",
  borderColor: "divider",
  padding: 20,
}));

export const FieldsWrapper = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: 12,
}));

export const TabsWrapper = styled.div(() => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  borderBottom: "2",
  borderColor: "divider",
}));

export const StyledTextField = styled(TextField)<{}>({
  // input: {
  //   color: theme.colors.textPrimary,
  //   "&::placeholder": {
  //     color: "white",
  //   },
  // },
  "& label.Mui-focused": {
    color: "white",
  },
  // "& label": {
  //   color: "white",
  // },
  // "& .MuiOutlinedInput-root": {
  //   "& fieldset": {
  //     borderColor: theme.colors.primary,
  //   },
  //   "&:hover fieldset": {
  //     borderColor: theme.colors.primary,
  //   },
  //   "&.Mui-focused fieldset": {
  //     borderColor: theme.colors.primary,
  //   },
  // },
});

import { Box, Tab, Tabs } from "@mui/material";
import React from "react";
import { TabPanel, a11yProps } from "../../shared/tabHelpers";
import { theme } from "../../infra/theme";
import { Form } from "./components/Form";
import { TabsWrapper } from "./components/Form.elements";
import { GamesFormController } from "./controllers/GamesFormController";
import { FormTab } from "./sharedTypes";
import { DisciplineFormController } from "./controllers/DisciplineFormController";
type FormsViewProps = {};

export const FormsView = ({}: FormsViewProps) => {
  const tabs: FormTab[] = [
    {
      label: "Games",
      id: "games",
      component: <GamesFormController />,
    },
    {
      label: "Discipline Form",
      id: "discipline",
      component: <DisciplineFormController />,
    },
  ];

  const [value, setValue] = React.useState(0);
  return (
    <Box sx={{ width: "100%", color: theme.colors.textPrimary }}>
      <Tabs
        value={value}
        onChange={(e, newValue) => setValue(newValue)}
        aria-label="Calculator tabs"
        centered
      >
        {tabs.map((tab, index) => {
          return (
            <Tab
              label={tab.label}
              {...a11yProps(index)}
              key={"tab-label-" + index}
            />
          );
        })}
      </Tabs>
      <TabsWrapper>
        {tabs.map((tab, index) => {
          return (
            <TabPanel value={value} index={index} key={"tab-panel-" + index}>
              {tab.component}
            </TabPanel>
          );
        })}
      </TabsWrapper>
    </Box>
  );
};

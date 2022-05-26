import React from "react";
import { Route, Routes } from "react-router-dom";
import { FormsView } from "domains/Forms/FormsView";

type NavbarPage = {
  label: React.ReactNode;
  route: string;
};

export const NAVBAR_PAGES: NavbarPage[] = [
  //{ label: "Wordle Solver", route: "wordle" },
  { label: "Forms", route: "forms" },
];
export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<FormsView />} />
      <Route path="/forms" element={<FormsView />} />
      <Route path="/*" element={<FormsView />}></Route>
    </Routes>
  );
};

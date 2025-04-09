import React, { memo } from "react";
import MainLayout from "./components/layout/MainLayout";
import { ThemeProvider } from "./config/theme/ThemeProvider";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  );
};

export default memo(App);

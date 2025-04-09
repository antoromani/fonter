import React, { useState, memo } from "react";
import Sidebar from "./Sidebar";
import ContentArea from "./ContentArea";

const MainLayout: React.FC = () => {
  const [activeView, setActiveView] = useState<"fontList" | "settings">(
    "fontList"
  );

  const handleViewChange = (view: "fontList" | "settings") => {
    setActiveView(view);
  };

  return (
    <div className="app-container">
      <Sidebar onViewChange={handleViewChange} activeView={activeView} />
      <ContentArea activeView={activeView} onViewChange={handleViewChange} />
    </div>
  );
};

// Usar memo para evitar re-renderizados innecesarios
export default memo(MainLayout);

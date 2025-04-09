import React, { lazy, Suspense, memo } from "react";

// Importación perezosa (lazy loading) para componentes pesados
const FontList = lazy(() => import("../views/FontList"));
const SettingsPanel = lazy(() => import("../views/SettingsPanel"));

interface ContentAreaProps {
  activeView: "fontList" | "settings";
  onViewChange?: (view: "fontList" | "settings") => void;
}

const ContentArea: React.FC<ContentAreaProps> = ({
  activeView,
  onViewChange,
}) => {
  return (
    <main className="main-content">
      <Suspense fallback={<div className="loading">Cargando...</div>}>
        {activeView === "fontList" ? (
          <FontList />
        ) : (
          <SettingsPanel
            onBackToList={() => onViewChange && onViewChange("fontList")}
          />
        )}
      </Suspense>
    </main>
  );
};

// Usar memo para evitar re-renderizados innecesarios
export default memo(ContentArea);

import React from "react";
import Sidebar from "./components/Sidebar";

const App: React.FC = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 bg-gray-100 dark:bg-gray-900">
        {/* Aquí se renderizará el contenido principal */}
      </main>
    </div>
  );
};

export default App;

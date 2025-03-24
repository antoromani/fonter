import { invoke } from '@tauri-apps/api';
import { useState, useEffect } from 'react';

function App() {
  const [mensaje, setMensaje] = useState("Cargando...");

  useEffect(() => {
    invoke('listar_fuentes')
      .then((data) => setMensaje(`Datos: ${JSON.stringify(data)}`))
      .catch((error) => setMensaje(`Error: ${error}`));
  }, []);

  return <div style={{ padding: '20px' }}>{mensaje}</div>;
}

export default App;
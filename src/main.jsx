import { invoke } from '@tauri-apps/api';
import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';

function App() {
  const [fuentes, setFuentes] = useState([]);
  const [filtro, setFiltro] = useState('');

  useEffect(() => {
    invoke('get_system_fonts').then((data) => {
      const fuentesArray = Object.entries(data).map(([familia, variantes]) => ({
        familia,
        variantes
      }));
      setFuentes(fuentesArray);
    });
  }, []);

  const fuentesFiltradas = fuentes.filter(fuente => 
    fuente.familia.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="app">
      <SearchBar onSearch={setFiltro} />
      <div className="lista-fuentes">
        {fuentesFiltradas.map(({ familia, variantes }) => (
          <div key={familia} className="familia-fuente">
            <h3>{familia}</h3>
            {variantes.map((variante) => (
              <p 
                key={variante.style_name}
                style={{
                  fontFamily: `'${familia}'`,
                  fontWeight: variante.weight,
                  fontStyle: variante.is_italic ? 'italic' : 'normal'
                }}
              >
                {variante.style_name} - Peso: {variante.weight}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
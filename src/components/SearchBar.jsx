import { useState, useEffect } from 'react';
import { invoke } from '@tauri-apps/api';

function SearchBar() {
    const [fuentes, setFuentes] = useState([]);

    useEffect(() => {
        invoke('listar_fuentes').then((fuentes) => setFuentes(fuentes));
    }, []);

    return (
        <div>
            <input type="text" placeholder="Buscar fuentes..." />
            <ul>
                {fuentes.map((fuente, index) => (
                    <li key={index}>{fuente}</li>
                ))}
            </ul>
        </div>
    );
}

export default SearchBar;
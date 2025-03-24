import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function FontList() {
    const [fonts, setFonts] = useState([]);

    useEffect(() => {
        invoke('get_system_fonts').then((data) => {
            const fontsArray = Object.entries(data).map(([family, variants]) => ({
                family,
                variants
            }));
            setFonts(fontsArray);
        });
    }, []);

    return (
        <div>
            {fonts.map((font, index) => (
                <div key={index}>
                    <h3>{font.family}</h3>
                    {font.variants.map((variant, i) => (
                        <p 
                            key={i} 
                            style={{ 
                                fontFamily: `'${font.family}'`,
                                fontWeight: variant.weight,
                                fontStyle: variant.is_italic ? "italic" : "normal",
                            }}
                        >
                            Ejemplo: {variant.style_name} (Peso: {variant.weight}, {variant.is_italic ? "Itálico" : "Normal"})
                        </p>
                    ))}
                </div>
            ))}
        </div>
    );
}
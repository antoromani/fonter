import { useState, useEffect } from 'react';
import { invoke } from '@tauri-apps/api/tauri';
import './styles.css';

function App() {
  const [fontFamilies, setFontFamilies] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFamilies, setExpandedFamilies] = useState({});

  useEffect(() => {
    const loadFonts = async () => {
      try {
        const fonts = await invoke('get_system_fonts');
        setFontFamilies(fonts);
        setLoading(false);
      } catch (err) {
        setError(err.toString());
        setLoading(false);
      }
    };

    loadFonts();
  }, []);

  const toggleFamily = (family) => {
    setExpandedFamilies({
      ...expandedFamilies,
      [family]: !expandedFamilies[family]
    });
  };

  const filteredFamilies = Object.keys(fontFamilies).filter(family => 
    family.toLowerCase().includes(searchTerm.toLowerCase())
  ).sort();

  if (loading) return <div className="loading">Loading fonts...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="container">
      <h1>System Fonts Viewer</h1>
      
      <div className="search-container">
        <input
          type="text"
          placeholder="Search font families..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      
      <div className="font-count">
        Found {filteredFamilies.length} font families
      </div>
      
      <div className="font-list">
        {filteredFamilies.map(family => (
          <div key={family} className="font-family">
            <div 
              className="family-header" 
              onClick={() => toggleFamily(family)}
            >
              <span className="expand-icon">
                {expandedFamilies[family] ? '▼' : '►'}
              </span>
              <span className="family-name" style={{ fontFamily: family }}>
                {family}
              </span>
              <span className="font-count">
                ({fontFamilies[family].length} styles)
              </span>
            </div>
            
            {expandedFamilies[family] && (
              <div className="font-styles">
                {fontFamilies[family].map((font, index) => (
                  <div key={index} className="font-style">
                    <div className="style-name" style={{ fontFamily: family }}>
                      {font.style_name}
                    </div>
                    <div className="sample" style={{ fontFamily: family }}>
                      The quick brown fox jumps over the lazy dog
                    </div>
                    <div className="font-path">{font.path}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

import DarkModeToggle from "react-dark-mode-toggle";

import { useState } from 'react';
function TogleTheme({onChange}) {
  const [isDark, setIsDark] = useState(false);
  const handleChange = ()=>{
    setIsDark(!isDark);
        onChange()
  }
    return (
      <div className="togle-theme">
        <DarkModeToggle
      onChange={handleChange}
      checked={isDark}
      size={80}
    />

    <h1 className="title">Ethio Weather</h1>
      </div>
    );
  }
  
  export default TogleTheme;
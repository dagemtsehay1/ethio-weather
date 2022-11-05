import { useState } from 'react';
import './App.css';
import TogleTheme from './components/togleTheme';
import AnimatedCursor from "react-animated-cursor"
import MainContainer from './components/mainContainer';
import Footer from './components/footer';


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const changeTheme = () =>{
    setIsDarkMode(!isDarkMode);
  }
  return (
    <div className={isDarkMode ? "dark-theme" :"light-theme"}>
      <AnimatedCursor 
      color={isDarkMode ? "236, 240, 241" : "44, 62, 80"}
      innerStyle={{
        height: "10px",
        width:"10px"
      }}
      />
      <TogleTheme onChange = {changeTheme}/>
      <MainContainer/>
      <Footer/>
    </div>
  );
}

export default App;

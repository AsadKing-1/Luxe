import { BrowserRouter } from "react-router-dom";
import { Main_Component } from "./Main/mainComponent";
import { ThemeProvider } from "./context/ThemeContext/ThemeContext";
import './App.css';

function App() {
  return (

    <BrowserRouter>
      <ThemeProvider>
        <Main_Component />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App;

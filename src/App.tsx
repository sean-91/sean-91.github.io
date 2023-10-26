import './App.css';
import { BrowserRouter } from "react-router-dom";
import { ClippedDrawer } from "./components/ClippedDrawer";
import { pages } from "./blog/Blog";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './components/Theme';
import { grey } from './components/Theme';

function App() {
  return (
    <div className="App" style={{ backgroundColor: grey }}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <ClippedDrawer pages={pages} />
        </ThemeProvider>
      </BrowserRouter>
    </div >
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';

//pages//
import Home from './pages/home';
//sttyles//
import GlobalStyles from './styles/GlobalStyles';
//contests..//
import { DarkModeProvider } from './context/DarkModeContext';

function App() {
  return (
    <DarkModeProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;

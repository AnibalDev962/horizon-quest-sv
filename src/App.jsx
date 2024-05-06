import { BrowserRouter, Route, Routes } from 'react-router-dom';

//pages//
import Home from './pages/home';
//sttyles//
import GlobalStyles from './styles/GlobalStyles';
//contests..//
import { AppEffectsProvider } from './context/AppEffectsContext';

function App() {
  return (
    <AppEffectsProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AppEffectsProvider>
  );
}

export default App;

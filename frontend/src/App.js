import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Questions from './components/Questions/Questions';
import Trip from "./components/Trip/Trip";
import SplashScreen from './components/SplashScreen/SplashScreen';
import ErrorBoundary from './components/ErrorBoundary'; // Asegúrate de importar el ErrorBoundary

function App() {

  return (
    <Router>
      <ErrorBoundary>
        
          <SplashScreen />
         
          <Routes>
            <Route path="/" element={<Questions />} />
            <Route path="/trip" element={<Trip />} />
          </Routes>
        
      </ErrorBoundary>
    </Router>
  );
}

export default App;


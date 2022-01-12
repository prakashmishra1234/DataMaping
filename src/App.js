import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Demo from './Components/Demo'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Demo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { Buffer } from 'buffer';
window.Buffer = Buffer;

import './App.css';
import { FormComponent } from './pages/FormComponent';
import { Route, Routes } from 'react-router-dom';
import { Flip2BookComponent } from './components/flippedbook/Flip2BookComponent';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FormComponent />} />
        <Route path="/2fbook" element={<Flip2BookComponent />} />
      </Routes>
    </>
  );
}

export default App;

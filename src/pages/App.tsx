import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SuccessPage from './SuccessPage';
import CancelPage from './CancelPage';
import PaymentPage from './PaymentPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaymentPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/cancel" element={<CancelPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
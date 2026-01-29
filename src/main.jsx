// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import App from './App';
import PrivacyPolicy from './components/PrivacyPolicy';
import RefundPolicy from './components/RefundPolicy';
import TermsConditions from './components/TermsConditions';
import Seminars from './components/Seminars';
import Olympiads from './components/Olympiads'; 
import Webinars from './components/Webinars';
import JoinUs from './components/JoinUs'; // ✅ Import JoinUs component
import PraxisEdu from './components/PraxisEdu';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/seminars" element={<Seminars />} />
        <Route path="/olympiads" element={<Olympiads />} />
        <Route path="/webinars" element={<Webinars />} />
        <Route path="/join-us" element={<JoinUs />} /> {/* ✅ Added JoinUs route */}
        <Route path="/praxis-edu" element={<PraxisEdu />} /> {/* ✅ Added PraxisEdu route */}
        <Route path="/privacy_policy" element={<PrivacyPolicy />} />
        <Route path="/refund_policy" element={<RefundPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


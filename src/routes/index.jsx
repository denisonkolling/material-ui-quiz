import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Setup from '../shared/pages/Setup';
import Questions from '../shared/pages/Questions';
import FinalScore from '../shared/pages/FinalScore';

const RoutesApp = () => {
	return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Setup />} />
      <Route path="/questions" element={<Questions />} />
      <Route path="/score" element={<FinalScore />} />
      </Routes>
		</BrowserRouter>
  )
};

export default RoutesApp;

import React from "react";

// react-router-dom
import {Routes,Route} from 'react-router-dom';

// pages
import IndexPage from "./Pages/IndexPage/IndexPage";
import AdminPage from "./Pages/AdminPage/AdminPage";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<IndexPage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
}

export default App;

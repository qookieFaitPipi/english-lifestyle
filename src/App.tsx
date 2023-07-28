import React from "react";

// react-router-dom
import {Routes,Route} from 'react-router-dom';

// pages
import IndexPage from "./Pages/IndexPage/IndexPage";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<IndexPage />} />
    </Routes>
  );
}

export default App;

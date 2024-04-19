import React from "react";
import "./App.css";
import Fundation from "./Component/Fundation";
import Templates from "../Templates/Templates";
import { Routes, Route } from 'react-router-dom';
const App = () => {
  

  return (
    <div>
        < Routes> 
        <Route path="/" element={<Fundation />} />
        <Route path="templates" element={<Templates />} />
        </Routes>
    </div>
  );
};

export default App;

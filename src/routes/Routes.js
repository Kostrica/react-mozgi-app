import React from 'react';
import { Routes, Route } from "react-router-dom";
import Main from '../components/Main/Main';
import About from '../components/About/About';
import routes from "./routes.json";

const AppRoutes = ({ translateX, translateY, textRef }) => (
  <Routes>
    <Route path={routes.HOME} element={
      <Main
        translateX={translateX}
        translateY={translateY}
        textRef={textRef}
      />
    }
    />
    <Route path={routes.ABOUT} element={<About />} />
  </Routes>
);

export default AppRoutes;

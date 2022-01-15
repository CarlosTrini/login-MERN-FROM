import React from "react";
import { Route, Routes } from "react-router";
import Protected from "./routes/Protected";
import Public from "./routes/Public";

function App() {
  return (
    <Routes>
      <Route path="/auth/*" element={<Public />}/> {/*PUBLIC ROUTE*/}
      <Route path="/*" element={<Protected />}/> {/*PROTECTED ROUTE*/}
    </Routes>
  );
}

export default App;

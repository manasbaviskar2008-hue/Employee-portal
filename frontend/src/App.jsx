import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Leave from "./pages/Leave";
import Payroll from "./pages/Payroll";
import Login from "./pages/Login";
import ProtectedRoute from "./routes/ProtectedRoute";


import Sidebar from "./components/Sidebar";


function App() {

  return (

    <BrowserRouter>

      <Sidebar />

      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Dashboard />} />

        <Route path="/employees" element={<Employees />} />

        <Route path="/leave" element={<Leave />} />

        <Route path="/payroll" element={<Payroll />} />

      </Routes>

    </BrowserRouter>

  );

}

export default App;
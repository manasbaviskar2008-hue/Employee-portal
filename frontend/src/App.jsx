import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Leave from "./pages/Leave";
import Payroll from "./pages/Payroll";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>

      <Sidebar />

      <hr />

      <Dashboard />

      <hr />

      <Employees />

      <hr />

      <Leave />

      <hr />

      <Payroll />

    </div>
  );
}

export default App;
import { useState } from "react";

function Payroll() {

  const [salary, setSalary] = useState("");
  const [bonus, setBonus] = useState("");
  const [deduction, setDeduction] = useState("");
  const [result, setResult] = useState("");

  const calculateSalary = () => {

    const netSalary =
      Number(salary) +
      Number(bonus) -
      Number(deduction);

    setResult(
      `Net Salary: ₹${netSalary}`
    );

  };


  return (
    <div>

      <h1>Smart Payroll Calculator</h1>

      <label>
        Basic Salary:
      </label>

      <input
        type="number"
        value={salary}
        onChange={(e)=>setSalary(e.target.value)}
      />

      <br/><br/>


      <label>
        Bonus:
      </label>

      <input
        type="number"
        value={bonus}
        onChange={(e)=>setBonus(e.target.value)}
      />


      <br/><br/>


      <label>
        Deduction:
      </label>

      <input
        type="number"
        value={deduction}
        onChange={(e)=>setDeduction(e.target.value)}
      />


      <br/><br/>


      <button onClick={calculateSalary}>
        Calculate Salary
      </button>


      <h3>{result}</h3>

    </div>
  );
}

export default Payroll; 
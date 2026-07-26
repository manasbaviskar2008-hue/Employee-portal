import { useState } from "react";

function Payroll() {

  const [salary, setSalary] = useState("");
  const [bonus, setBonus] = useState("");
  const [overtime, setOvertime] = useState("");
  const [deduction, setDeduction] = useState("");
  const [result, setResult] = useState("");

  const calculateSalary = () => {

    if (salary === "") {
      setResult("⚠️ Please enter basic salary");
      return;
    }

    const gross =
      Number(salary) +
      Number(bonus) +
      Number(overtime);

    const net =
      gross -
      Number(deduction);


    setResult(
`💰 Payroll Result

Basic Salary: ₹${salary}
Bonus: ₹${bonus}
Overtime: ₹${overtime}
Deduction: ₹${deduction}

Gross Salary: ₹${gross}
Net Salary: ₹${net}


🤖 AI Salary Insight:
Your payroll has been calculated successfully.
${Number(overtime) > 0 
? "Overtime contribution increased your salary."
: "No overtime contribution added."}

Final payable amount: ₹${net}`
    );

  };


  return (
    <div>

      <h1>💰 AI Payroll Calculator</h1>


      <label>Basic Salary:</label>
      <br />

      <input
        type="number"
        placeholder="Example: 50000"
        value={salary}
        onChange={(e)=>setSalary(e.target.value)}
      />


      <br/><br/>


      <label>Bonus:</label>
      <br />

      <input
        type="number"
        placeholder="Example: 5000"
        value={bonus}
        onChange={(e)=>setBonus(e.target.value)}
      />


      <br/><br/>


      <label>Overtime Amount:</label>
      <br />

      <input
        type="number"
        placeholder="Example: 2000"
        value={overtime}
        onChange={(e)=>setOvertime(e.target.value)}
      />


      <br/><br/>


      <label>Deduction:</label>
      <br />

      <input
        type="number"
        placeholder="Example: 3000"
        value={deduction}
        onChange={(e)=>setDeduction(e.target.value)}
      />


      <br/><br/>


      <button onClick={calculateSalary}>
        Calculate Payroll
      </button>


      <br/><br/>


      <pre>
        {result}
      </pre>


    </div>
  );
}

export default Payroll;
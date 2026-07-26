import { useState } from "react";

function Leave() {

  const [balance, setBalance] = useState("");
  const [days, setDays] = useState("");
  const [result, setResult] = useState("");

  const checkEligibility = () => {

    if (Number(days) <= Number(balance)) {
      setResult(
        "✅ Eligible: Your leave request can be approved."
      );
    } else {
      setResult(
        "❌ Not Eligible: Insufficient leave balance."
      );
    }

  };


  return (
    <div>

      <h1>AI Leave Eligibility Checker</h1>

      <label>
        Available Leave:
      </label>

      <input
        type="number"
        value={balance}
        onChange={(e)=>setBalance(e.target.value)}
      />


      <br/><br/>


      <label>
        Requested Leave Days:
      </label>

      <input
        type="number"
        value={days}
        onChange={(e)=>setDays(e.target.value)}
      />


      <br/><br/>


      <button onClick={checkEligibility}>
        Check Eligibility
      </button>


      <h3>{result}</h3>

    </div>
  );
}

export default Leave;
import { useState } from "react";

function Leave() {

  const [balance, setBalance] = useState("");
  const [days, setDays] = useState("");
  const [reason, setReason] = useState("");
  const [result, setResult] = useState("");

  const checkEligibility = () => {

    if (balance === "" || days === "") {
      setResult("⚠️ Please enter leave balance and requested days.");
      return;
    }

    if (Number(days) <= Number(balance)) {

      setResult(
`✅ Eligible

🤖 AI Recommendation:
Your leave request matches company policy.

Available Leave: ${balance} days
Requested Leave: ${days} days
Reason: ${reason}

Approval Chance: High`
      );

    } else {

      setResult(
`❌ Not Eligible

🤖 AI Recommendation:
Your leave balance is insufficient.

Available Leave: ${balance} days
Requested Leave: ${days} days
Reason: ${reason}

Suggestion:
Try reducing leave days or wait for leave balance update.`
      );

    }

  };


  return (
    <div>

      <h1>🤖 AI Leave Eligibility Checker</h1>

      <div>

        <label>Available Leave Days:</label>
        <br />

        <input
          type="number"
          placeholder="Example: 10"
          value={balance}
          onChange={(e) => setBalance(e.target.value)}
        />

        <br /><br />


        <label>Requested Leave Days:</label>
        <br />

        <input
          type="number"
          placeholder="Example: 3"
          value={days}
          onChange={(e) => setDays(e.target.value)}
        />

        <br /><br />


        <label>Leave Reason:</label>
        <br />

        <input
          type="text"
          placeholder="Example: Family function"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />

        <br /><br />


        <button onClick={checkEligibility}>
          Check Eligibility
        </button>


        <br /><br />


        <pre>
          {result}
        </pre>

      </div>

    </div>
  );
}

export default Leave;
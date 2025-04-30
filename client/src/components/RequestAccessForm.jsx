import { useState } from "react";


function RequestAccessForm() {

    const [patientId, setPatientId] = useState("");


    return (
        <form onSubmit={handleSubmit}>
          <label>
            Patient ID:
            <input
              type="text"
              value={patientId}
              onChange={handlePatientIdChange}
              placeholder="Enter Patient ID"
            />
          </label>
          <button type="submit">Request Access</button>
        </form>
      );
    }
    
    export default RequestAccessForm;

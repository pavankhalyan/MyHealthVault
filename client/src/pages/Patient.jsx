import { useState, useEffect } from "react";
import axios from "axios";
import RecordCard from "../components/RecordCard";
import UploadRecordForm from "../components/UploadRecordForm";

function PatientDashboard() {
  const [records, setRecords] = useState([]);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await axios.get("/api/records/patient");
        setRecords(response.data.records);
      } catch (error) {
        console.error("Error fetching records:", error);
      }
    };
    fetchRecords();
  }, []);

  return (
    <div className="dashboard">
      <h1>Patient Dashboard</h1>
      <button onClick={() => setIsUploading(!isUploading)}>
        {isUploading ? "Cancel Upload" : "Upload Medical Record"}
      </button>
      {isUploading && <UploadRecordForm />}
      <div className="records">
        <h2>Your Medical Records</h2>
        {records.length > 0 ? (
          records.map((record) => (
            <RecordCard key={record.id} record={record} />
          ))
        ) : (
          <p>No records available.</p>
        )}
      </div>
    </div>
  );
}

export default PatientDashboard;

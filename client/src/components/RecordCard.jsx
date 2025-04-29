function RecordCard({ record }) {
    return (
      <div className="record-card">
        <h3>{record.title}</h3>
        <p>{record.date}</p>
        <p>{record.description}</p>
        <button>View Record</button>
        <button>Manage Permissions</button>
      </div>
    );
  }
  
  export default RecordCard;
  
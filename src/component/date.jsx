import { useState } from "react";

function DatePicker() {
  const [selectedDate, setSelectedDate] = useState("");

  // Convert selectedDate to weekday
  const getDayName = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };

  const isWeekend = (dateString) => {
    const day = new Date(dateString).getDay(); // 0 = Sunday, 6 = Saturday
    return day === 0 || day === 6;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Pick a Date</h2>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />

      {selectedDate && (
        <div style={{ marginTop: "20px" }}>
          <h3>You picked: {selectedDate} ({getDayName(selectedDate)})</h3>
          {isWeekend(selectedDate) && (
            <p style={{ color: "red", fontWeight: "bold" }}>
              ⚠️ Warning: That’s a weekend!
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default DatePicker;

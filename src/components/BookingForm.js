import React, { useState } from "react";
import './BookingForm.css';  // Import the CSS for styling

function BookingForm({ onAddBooking }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBooking = { name, email, date, time };
    onAddBooking(newBooking);
    setName("");
    setEmail("");
    setDate("");
    setTime("");
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2>Make a Reservation</h2>
      <div className="form-field">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-field">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-field">
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div className="form-field">
        <label>Time:</label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="submit-btn">Book Table</button>
    </form>
  );
}

export default BookingForm;

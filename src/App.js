import React, { useState } from "react";
import BookingForm from "./components/BookingForm";
import BookingList from "./components/BookingList";
import "./App.css";

function App() {
  const [bookings, setBookings] = useState([]);
  const [availableTimes, setAvailableTimes] = useState([
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
  ]);

  const addBooking = (booking) => {
    setBookings([...bookings, booking]);
  };

  return (
    <div className="App">
      <h1>Welcome to Little Lemon - Table Booking</h1>
      <BookingForm availableTimes={availableTimes} onAddBooking={addBooking} />
      <BookingList bookings={bookings} />
    </div>
  );
}

export default App;

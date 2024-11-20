import React, { useState } from "react";
import BookingForm from "./components/BookingForm";
import BookingList from "./components/BookingList";

function App() {
  const [bookings, setBookings] = useState([]);

  const addBooking = (booking) => {
    setBookings([...bookings, booking]);
  };

  return (
    <div>
      <h1>Welcome to Little Lemon - Table Booking</h1>
      <BookingForm onAddBooking={addBooking} />
      <BookingList bookings={bookings} />
    </div>
  );
}

export default App;

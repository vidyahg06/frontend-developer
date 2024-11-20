import React from "react";

function BookingList({ bookings }) {
  return (
    <div>
      <h2>Bookings</h2>
      <ul>
        {bookings.length === 0 ? (
          <li>No bookings yet.</li>
        ) : (
          bookings.map((booking, index) => (
            <li key={index}>
              <p>Name: {booking.name}</p>
              <p>Email: {booking.email}</p>
              <p>Date: {booking.date}</p>
              <p>Time: {booking.time}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default BookingList;

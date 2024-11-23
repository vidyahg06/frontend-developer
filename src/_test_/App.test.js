import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders the app title", () => {
  render(<App />);
  expect(screen.getByText(/Welcome to Little Lemon/i)).toBeInTheDocument();
});

test("renders the booking form and booking list", () => {
  render(<App />);
  expect(screen.getByText(/Make a Reservation/i)).toBeInTheDocument();
  // expect(screen.getByText(/Bookings/i)).toBeInTheDocument();
});


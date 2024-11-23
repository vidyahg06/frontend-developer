import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../components/BookingForm";

test("renders the booking form", () => {
  const mockOnAddBooking = jest.fn();
  render(<BookingForm availableTimes={["12:00 PM", "1:00 PM"]} onAddBooking={mockOnAddBooking} />);

  expect(screen.getByText(/Make a Reservation/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Time/i)).toBeInTheDocument();
});

test("submits the form with correct data", () => {
  const mockOnAddBooking = jest.fn();
  render(<BookingForm availableTimes={["12:00 PM"]} onAddBooking={mockOnAddBooking} />);

  fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: "John Doe" } });
  fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: "john@example.com" } });
  fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: "2024-01-01" } });
  fireEvent.change(screen.getByLabelText(/Time/i), { target: { value: "12:00 PM" } });

  fireEvent.click(screen.getByText(/Book Table/i));

  expect(mockOnAddBooking).toHaveBeenCalledWith({
    name: "John Doe",
    email: "john@example.com",
    date: "2024-01-01",
    time: "12:00 PM",
  });
});

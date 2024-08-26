import { render, screen } from "@testing-library/react";
import BookingForm from "./Components/BookingForm";
import Main, { initialTimes, updateTimes, fetchTimes } from "./Components/Main";
import { MemoryRouter } from "react-router-dom";

test("Renders the BookingForm header", () => {
  render(<BookingForm />);
  const headerElement = screen.getByText("Book your table");
  expect(headerElement).toBeInTheDocument();
});

test("renders the initial booking times", () => {
  render(
    <MemoryRouter>
      <Main />
    </MemoryRouter>
  );
  expect(initialTimes.availableTimes).toEqual([
    "1:00",
    "2:00",
    "3:00",
    "4:00",
    "5:00",
    "6:00",
    "7:00",
  ]);
});

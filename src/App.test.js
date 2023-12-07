import { render, screen, fireEvent } from '@testing-library/react';
import BookingTable from './components/BookingTable'

import App from './App';



test("Renders the BookingForm heading", () => {
  render(<BookingTable />);
  const headingElement = screen.getByText("Book a Table")
  expect(headingElement).toBeInTheDocument();
})

test("The time slots are initialized",  () => {
  const result = App.prototype.initializeTimes();

  expect(result).toBe(["17:00","18:00","19:00","20:00","21:00","22:00"])
})

test('updateTimes function dispatches SET_TIMES action', () => {
  const availableTimes = ["17:00","18:00","19:00","20:00","21:00","22:00"]

 const result = App.prototype.updateTimes(availableTimes);

  // Assert that the dispatch function was called with the expected action
  expect(result).toBe({ type: 'SET_TIMES', payload: availableTimes });
});

test('Valid form submission', () => {
  render(<BookingTable />);

  const nameInput = screen.getByLabelText('Name');
  const phoneInput = screen.getByLabelText('Phone Number');
  const emailInput = screen.getByLabelText('Email');
  const ccnInput = screen.getByLabelText('Card Number');
  const submitButton = screen.getByText('Submit');

  // Simulate valid user input
  fireEvent.change(nameInput, { target: { value: 'John Doe' } });
  fireEvent.change(phoneInput, { target: { value: '1234567890' } });
  fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });
  fireEvent.change(ccnInput, { target: { value: '1234 5678 9012 3456' } });

  // Trigger form submission
  fireEvent.click(submitButton);

  // Add assertions here to check the expected behavior after submission
});

test('Invalid form submission', () => {
  render(<BookingTable />);

  const submitButton = screen.getByText('Submit');

  // Trigger form submission without entering data

  fireEvent.click(submitButton);

  // Add assertions here to check the expected behavior for invalid submission
});

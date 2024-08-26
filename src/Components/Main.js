import React, { useReducer } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Booking from "./Booking";
import Header from "./Header";
import BookingConfirm from "./BookingConfirm";

export const timeRandomizer = (seed) => {
  const a = 1664525;
  const c = 1013904223;
  const m = 2 ** 32;
  let state = seed;
  return function () {
    state = (a * state + c) % m;
    return state / m;
  };
};

export const fetchTimes = (date) => {
  let times = [];
  let randomizer = timeRandomizer(date.getDate());
  for (let i = 1; i < 10; i++) {
    if (randomizer() < 0.5) {
      times.push(`${i}:00`);
    }
    if (randomizer() > 0.5) {
      times.push(`${i}:30`);
    }
  }
  return times;
};

export const initialTimes = {
  availableTimes: ["1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00"],
};

export function updateTimes(state, date) {
  return { availableTimes: fetchTimes(new Date(date)) };
}

const Main = () => {
  const [state, dispatch] = useReducer(updateTimes, initialTimes);

  const submitAPI = (formData) => {
    // Replace with actual API call
    return true;
  };

  const navigate = useNavigate();
  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate("/confirmed");
    }
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route
          path="/booking"
          element={
            <Booking
              availableTimes={state.availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<BookingConfirm />} />
      </Routes>
    </main>
  );
};

export default Main;

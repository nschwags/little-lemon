import React from "react";
import { useState } from "react";

const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [diners, setDiners] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm(e);
  };

  const handleDateChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };

  return (
    <>
      <h1 className="form">Book your table</h1>
      <form onSubmit={handleSubmit} className="form">
        <fieldset>
          <div>
            <label htmlFor="bookdate">Select a Date</label>
            <input
              id="bookdate"
              value={date}
              type="date"
              required
              onChange={(e) => handleDateChange(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="booktime">Select a Time</label>
            <select
              id="booktime"
              value={times}
              onChange={(e) => setTimes(e.target.value)}
              required
            >
              <option value="">Select a Time</option>
              {(props.availableTimes || []).map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="guests">Number of Guests</label>
            <input
              id="guests"
              value={diners}
              type="number"
              onChange={(e) => setDiners(e.target.value)}
              min={1}
              placeholder="0"
              required
            />
          </div>
          <div>
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
            >
              <option value=""></option>
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
          </div>
          <div>
            <button className="button" type="submit" value="Submit Reservation">
              Submit Reservation
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default BookingForm;

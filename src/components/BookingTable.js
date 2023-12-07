import React, { useEffect, useState } from "react";
import reservation from "../images/reservation.jpg";
import outdoorSeating from "../images/outdoor-seating.jpg";
import indoorSeating from "../images/indoor-seating.jpg";
import chandelier from "../images/chandelier.png";

function BookingTable({ availableTimes, updateTimes, submitForm }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    cardNo: "",
    time: "17:00",
    date: "",
    noOfGuests: "",
    occasion: "Birthday",
    sitting: "Inside",
    addInfo: "",
  });

  useEffect(() => {
    console.log(form);
  }, [form]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(form.date===""){
      alert("please enter date")
    }
    else if(form.noOfGuests === ""){
      alert("please enter number of guests")
    }else{
    console.log("Form submitted");
    submitForm(form)}
  };

  const handleTime = (e) => {
    console.log(e);
    const newTime = e.target.value;
    console.log(newTime);
    setForm({
      ...form,
      time: newTime,
    });
    updateTimes(newTime);
    console.log(form);
  };
  const imageStyle = {
    transform: "rotate(180deg)", // Rotate the image 45 degrees
    width: "3rem",
  };
    // Create a state variable to store the date
    const [selectedDate, setSelectedDate] = useState(getFormattedToday());
    const [rangeValue, setRangeValue] = useState();

    // Function to get today's date in YYYY-MM-DD format
    function getFormattedToday() {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, "0"); // Month is 0-based
      const day = String(today.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    }
    // Handle changes in the date input
    function handleDateChange(e) {
      setForm({
        ...form,
        date: e.target.value,
      })
    }
    function handleRangeChange(e){
      setRangeValue(e.target.value)
      setForm({
        ...form,
        noOfGuests: rangeValue,
      });
    }
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="reservation">
            <div className="reservation_text">
              <h1>Little Lemon </h1>
              <h2>Online Reservation</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                purus nisi, lobortis vitae tempor a, molestie vitae mi.
              </p>
            </div>
            <div className="reservation_img">
              <img src={reservation} alt="Reservation_section" />
            </div>
          </div>
          <div>
            <div className="book-table">
              <h1>Book a Table</h1>
              <h2>No Need To Wait For Table</h2>
              <div className="decor">
                <div className="decorInner"></div>
                <img
                  src={chandelier}
                  alt="decor-chandelier"
                  style={imageStyle}
                />
                <div className="decorInner"></div>
              </div>
              <div className="bookTable">
                <label htmlFor="time">Choose time</label>
                <select
                  id="time "
                  name="time"
                  value={form.time}
                  onChange={(e) => {
                    handleTime(e);
                  }}
                  aria-label="Choose Time"
                  required
                >
                  {availableTimes? availableTimes.map((time) => {
                    return (
                      <option key={time} id="time" name="time" value={time} aria-label={`Option ${time}`}>
                        {time}
                      </option>
                    );
                  }) : null }
                </select>
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={selectedDate}
                  onChange={handleDateChange}
                  min={selectedDate}
                  aria-label="Choose Date"
                  required
                />
                <label htmlFor="noofguests">Number of Guests: {rangeValue}</label>
                <input
                  type="range"
                  id="noofguests"
                  name="noofguests"
                  min="1"
                  max="10"
                  value={rangeValue}
                  aria-label="Choose number of Guests"
                  onChange={handleRangeChange}
                  required
                />
              </div>
            </div>
          </div>
          <div>
            <div className="event">
              <h1>Events or celebration</h1>
              <div className="occasion">
                <label htmlFor="occasion">Occasion</label>
                <select
                  name="occasion"
                  id="occasion"
                  placeholder="Occasion"
                  value={form.occasion}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      occasion: e.target.value,
                    });
                  }}
                  aria-label="Choose Occasion"
                  required
                >
                  <option value="birthday">Birthday</option>
                  <option value="engagement">Engagement</option>
                  <option value="anniversary">Anniversary</option>
                </select>
                <label htmlFor="sitting">Sitting</label>
                <div className="seat">
                  <label>
                    <input
                      type="radio"
                      name="seating"
                      value="Outside"
                      onChange={(e) => {
                        setForm({
                          ...form,
                          sitting: e.target.value,
                        });
                      }}
                      aria-label="Choose outside"
                    />
                    <img src={outdoorSeating} alt="Outdoor seating" />
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="seating"
                      value="Inside"
                      onChange={(e) => {
                        setForm({
                          ...form,
                          sitting: e.target.value,
                        });
                      }}
                      aria-label="Choose seating Inside"
                      checked
                    />
                    <img src={indoorSeating} alt="Indoor seating" />
                  </label>
                </div>
                <label htmlFor="addInfo">Additional Information</label>
                <textarea
                  id="addInfo"
                  name="addInfo"
                  rows="4"
                  cols="40"
                  placeholder="Type here..."
                  value={form.addInfo}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      addInfo: e.target.value,
                    });
                  }}
                  aria-label="Give your additional Information"
                  required
                  maxLength="15"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="user-details">
            <h1>Personal Details</h1>
            <div className="bookTable">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                value={form.name}
                onChange={(e) => {
                  setForm({
                    ...form,
                    name: e.target.value,
                  });
                }}
                aria-label="Your Name"
                required
              />
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="eg: 03XX-XXXXXXX"
                pattern="[0-9]{4}[0-9]{3}[0-9]{4}"
                value={form.phone}
                onChange={(e) => {
                  setForm({
                    ...form,
                    phone: e.target.value,
                  });
                }}
                aria-label="Your Phone number"
                required
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="eg: Jxxxx@gmail.com"
                value={form.email}
                onChange={(e) => {
                  setForm({
                    ...form,
                    email: e.target.value,
                  });
                }}
                aria-label="Your email"
                required
              />
              <label htmlFor="ccn">Card Number</label>
              <input
                id="ccn"
                name="ccn"
                type="tel"
                inputMode="numeric"
                pattern="[0-9\s]{13,19}"
                autoComplete="cc-number"
                maxLength="19"
                placeholder="xxxx xxxx xxxx xxxx"
                value={form.cardNo}
                onChange={(e) => {
                  setForm({
                    ...form,
                    cardNo: e.target.value,
                  });
                }}
                aria-label="Your card number"
                required
              ></input>
            </div>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </main>
  );
}

export default BookingTable;

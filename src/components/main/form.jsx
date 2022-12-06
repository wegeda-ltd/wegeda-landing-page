import React from "react";
import "./modal.css";
import { motion } from "framer-motion";
function Form({ setShowForm }) {
  let dimensions = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  let zoom = 100;

  function handleResize() {
    dimensions.height = window.innerHeight;
    dimensions.width = window.innerWidth;

    zoom = 100;

    document.body.style.zoom = zoom + "%";
  }

  // document.body.style.zoom = "80%";

  // Change zoom level on mount

  document.body.style.zoom = zoom + "%";

  //change dimension on page resize
  window.addEventListener("resize", handleResize);

  const YEARS = ["2022", "2023", "2024", "2025", "2026", "2027", "2028"];
  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.5,
          opacity: 0,
          transition: {
            delay: 0.4,
          },
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.2,
          },
        },
      }}
      className="modal"
      style={{
        backgroundColor: "white",
        padding: "20px",
        marginTop: "20px",
        maxWidth: "85%",
      }}
    >
      <button
        className="close_btn"
        onClick={() => setShowForm(false)}
        style={{ marginTop: "10px", borderColor: "black", color: "black" }}
      >
        x
      </button>

      <div
        className="modal-header"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h4
          style={{
            color: "black",
            marginBottom: "10px",
          }}
        >
          Join the waitlist now!
        </h4>
        <p className="modal-text">
          Be the first to find a house you deserve. You can also find housemates
          that fits your preferences
        </p>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <div className="input-group">
            <label htmlFor="occupation">Current Occupation:</label>
            <select id="occupation" required>
              <option value="all" disabled>
                Select
              </option>
              <option value="all">Occupation 2</option>
              <option value="all">Occupation 3</option>
              <option value="all">Occupation 4</option>
              <option value="all">Occupation 5</option>
              <option value="all">Occupation 6</option>
            </select>
          </div>
          <div className="input-group" style={{ marginLeft: "10px" }}>
            <label htmlFor="email">Email Address:</label>
            <input
              required
              id="email"
              name="email"
              type="email"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <label htmlFor="school">School or Company Name:</label>
            <input
              id="school"
              name="school"
              type="text"
              style={{ width: "100%" }}
            />
          </div>
        </div>

        <div className="form-group">
          <div className="input-group" style={{ marginRight: "35px" }}>
            <label htmlFor="fname">First Name:</label>
            <input
              id="fname"
              name="fname"
              type="text"
              style={{ width: "100%" }}
            />
          </div>
          <div className="input-group">
            <label htmlFor="lname">Last Name:</label>
            <input
              id="lname"
              name="lname"
              type="text"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="input-group" style={{ marginRight: "35px" }}>
            <label htmlFor="phone">Mobile Number:</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              style={{ width: "100%" }}
            />
          </div>
          <div className="input-group">
            <label htmlFor="option">Select an Option</label>
            <select id="option" name="option" style={{ width: "108%" }}>
              <option>Select</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
              <option>Option 5</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <div className="input-group">
            <label htmlFor="name">Current Address</label>
            <input
              id="name"
              name="name"
              type="text"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <label htmlFor="moving-to">Moving To?</label>
            <input
              id="moving-to"
              name="moving-to"
              type="text"
              style={{ width: "100%" }}
            />
          </div>
        </div>

        <div className="form-group">
          <div className="input-group" style={{ marginRight: "35px" }}>
            <label htmlFor="month">Preferred Check-in Date:</label>
            <select id="month" name="month" style={{ width: "107%" }}>
              <option>Month</option>
              {MONTHS.map((month, i) => (
                <option key={i}>{month}</option>
              ))}
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="year">'</label>
            <select id="year" name="year" style={{ width: "108%" }}>
              <option>Year</option>
              {YEARS.map((year, i) => (
                <option key={i}>{year}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <label htmlFor="anything-else">
              Anything else you want to tell us?
            </label>

            <textarea
              id="anything-else"
              name="anything-else"
              style={{
                paddingTop: "10px",
                paddingBottom: "10px",
                minHeight: "70px",
                width: "100%",
                display: "block",
              }}
            ></textarea>
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </motion.div>
  );
}

export default Form;

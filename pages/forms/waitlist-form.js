import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";

function Form() {
  const router = useRouter();

  const [occupation, setOccupation] = useState("Occupation 1");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("Male");
  const [current_address, setCurrentAddress] = useState("");
  const [moving_to, setMovingTo] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [other_info, setOtherInfo] = useState("");
  const [error, setError] = useState({});
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dupError, setDupError] = useState({});

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess(false);
        setOccupation("");
        setEmail("");
        setCompany("");
        setFirstName("");
        setLastName("");
        setPhone("");
        setGender("");
        setCurrentAddress("");
        setMovingTo("");
        setMonth("");
        setYear("");
        setOtherInfo("");
        router.push("/");
      }, 10000);
    }
  }, [success]);

  useEffect(() => {
    if (dupError) {
      setTimeout(() => {
        setDupError({});
        setOccupation("");
        setEmail("");
        setCompany("");
        setFirstName("");
        setLastName("");
        setPhone("");
        setGender("");
        setCurrentAddress("");
        setMovingTo("");
        setMonth("");
        setYear("");
        setOtherInfo("");
      }, 2500);
    }
  }, [dupError?.error]);

  const handleSubmit = async () => {
    console.log(gender, "gender");
    if (!isSubmitting) {
      setIsSubmitting(true);
      try {
        const response = await fetch(
          `/api/submit?first_name=${first_name}&last_name=${last_name}&other_info=${other_info}&current_address=${current_address}&moving_to=${moving_to}&gender=${gender}&checkin_date=${month}-${year}&email=${email}&company=${company}&phone=${phone}&occupation=${occupation}`
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const result = await response.json();

        if (result.success == false && result.type !== "duplicate") {
          setError({
            error: true,
            message: result.message,
            input: result.type,
          });

          console.log(error, "result");
        } else if (result.success == false && result.type == "duplicate") {
          setDupError({
            error: true,
            message: result.message,
            type: result.type,
          });
        } else {
          setSuccess(true);
        }
        // setResults(result);

        setIsSubmitting(false);
      } catch (error) {
        setIsSubmitting(false);
        setError({
          error: true,
          message: error.message,
        });
      }
    }
  };

  if (typeof window !== "undefined") {
    let dimensions = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    function handleResize() {
      dimensions.height = window.innerHeight;
      dimensions.width = window.innerWidth;

      document.body.style.zoom = 100 + "%";
    }

    // document.body.style.zoom = "80%";

    // Change zoom level on mount

    document.body.style.zoom = 100 + "%";

    console.log(document.body.style.zoom);

    //change dimension on page resize
    window.addEventListener("resize", handleResize);
  }

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
    <div className="form-container">
      {dupError?.error ? (
        <motion.div
          className="success-cont"
          initial="visible"
          animate="hidden"
          variants={{
            hidden: {
              opacity: 0,
              transition: {
                delay: 2,
              },
            },
            visible: {
              scale: 1,
              opacity: 1,
            },
          }}
        >
          <motion.div
            className="success"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.5,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.4,
                },
              },
            }}
          >
            <div className="success-img-cont">
              <img
                alt="success-img"
                src="/images/error.png"
                className="success-img"
              />
            </div>
            <p className="success-text" style={{ color: "red" }}>
              User Exists!
            </p>
          </motion.div>
        </motion.div>
      ) : success ? (
        <motion.div
          className="success-cont"
          initial="visible"
          animate="hidden"
          variants={{
            hidden: {
              opacity: 0,
              transition: {
                delay: 2,
              },
            },
            visible: {
              scale: 1,
              opacity: 1,
            },
          }}
        >
          <motion.div
            className="success"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.5,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.4,
                },
              },
            }}
          >
            <div className="success-img-cont">
              <img
                alt="success-img"
                src="/images/success.png"
                className="success-img"
              />
            </div>
            <p className="success-text">Successful!</p>
            <Link href="/">Go to Home</Link>
          </motion.div>
        </motion.div>
      ) : (
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
            position: "relative",
          }}
        >
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
              Dear friend, <br />
              Thank you for your interest in Wegeda.
              <br />
              Right now, we’re conducting tests on our app and working to
              provide a base level of apartment listings for you to find when we
              launch in January 2023.
              <br />
              If you are looking to rent a place within the timeframe, you
              wouldn’t want to miss out on the updates.
              <br />
              Kindly fill the form below so you receive every information
              important for you, including the early listings.
              <br />
              Thank you!
              <br />
              <br />
              PS: Filliing the form before the year ends makes you eligible for
              50% off the price of our Basic Plan at launch!
              <br />
              <br />
              <p className="modal-text">LAUNCH DATE: JANUARY 2023</p>
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <div className="form-group">
              <div className="input-group" style={{ marginRight: "35px" }}>
                <label htmlFor="occupation">Occupation:</label>
                <input
                  value={occupation}
                  onChange={(e) => setOccupation(e.target.value)}
                  required
                  id="occupation"
                  name="occupation"
                  type="text"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email Address:</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  required
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
                  value={first_name}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  id="fname"
                  name="fname"
                  type="text"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="input-group">
                <label htmlFor="lname">Last Name:</label>
                <input
                  value={last_name}
                  onChange={(e) => setLastName(e.target.value)}
                  required
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
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  id="phone"
                  name="phone"
                  type="tel"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="input-group">
                <label htmlFor="option">Gender</label>
                <select
                  id="option"
                  name="option"
                  style={{ width: "108%" }}
                  required
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value={""}>---Select One---</option>
                  {["Male", "Female", "Prefer not to say"].map(
                    (gender, index) => (
                      <option key={index} value={gender}>
                        {gender}
                      </option>
                    )
                  )}
                </select>
              </div>
            </div>

            <div className="form-group">
              <div className="input-group">
                <label htmlFor="name">Current Address</label>
                <input
                  value={current_address}
                  onChange={(e) => setCurrentAddress(e.target.value)}
                  required
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
                  value={moving_to}
                  onChange={(e) => setMovingTo(e.target.value)}
                  required
                  id="moving-to"
                  name="moving-to"
                  type="text"
                  style={{ width: "100%" }}
                />
              </div>
            </div>

            <label
              htmlFor="month"
              style={{
                display: "block",
              }}
            >
              Preferred Check-in Date:
            </label>

            <div className="form-group">
              <div className="input-group" style={{ marginRight: "35px" }}>
                <select
                  id="month"
                  name="month"
                  style={{ width: "107%" }}
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                >
                  <option>Month</option>
                  {MONTHS.map((month, i) => (
                    <option key={i}>{month}</option>
                  ))}
                </select>
              </div>
              <div className="input-group">
                <select
                  id="year"
                  name="year"
                  style={{ width: "108%" }}
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                >
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
                  value={other_info}
                  onChange={(e) => setOtherInfo(e.target.value)}
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

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </motion.div>
      )}
    </div>
  );
}

export default Form;

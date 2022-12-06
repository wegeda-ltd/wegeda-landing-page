import React from "react";
import "./modal.css";
import { motion } from "framer-motion";
import Form from "./form";
function Modal({ width, height, setShowModal }) {
  const [showForm, setShowForm] = React.useState(false);

  return (
    <div
      className="modal-cont"
      style={{
        width: "100%",
        minHeight: "300%",
        paddingBottom: height,
        overflow: "hidden",
        position: showForm ? "absolute" : "fixed",
        // marginTop: "100px",
        zIndex: 1000000000000,
        top: 0,
        left: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center",
      }}
    >
      {showForm ? (
        <Form setShowForm={setShowModal} />
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
                delay: 0.4,
              },
            },
          }}
          className="modal"
          style={{
            width: "80%",
            marginTop: "2%",
            height: "50%",
            background: "#fff",
            padding: "5%",
            position: "relative",
          }}
        >
          <button className="close_btn" onClick={() => setShowModal(false)}>
            x
          </button>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <div
              className="modal-header"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <img
                src="/images/wegeda_modal.png"
                alt="logo"
                style={{
                  width: "40%",
                  objectFit: "contain",
                }}
              />
              <h4>Find rooms and verified roommate in Nigeria</h4>
            </div>
            <div
              className="modal-body"
              style={{
                textAlign: "center",
                fontSize: "35px",
                maxWidth: "60%",
                fontWeight: "bold",
                marginTop: "100px",
              }}
            >
              <p
                style={{
                  marginBottom: "50px",
                }}
              >
                Find rooms to rent around your workplace, school, church or
                anywhere you frequent.
              </p>
              <p
                style={{
                  marginBottom: "50px",
                }}
              >
                Access to an exciting selection of verified roommates who fit
                your personality preferences, interests and have complimentary
                budgets.
              </p>

              <button className="cont_btn" onClick={() => setShowForm(true)}>
                Continue to form
              </button>
            </div>
            <div
              className="modal-footer"
              style={{
                marginBottom: "-5%",
                width: "110%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/images/modal_bottom.png"
                alt=""
                style={{
                  width: "110%",
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Modal;

import React from "react";
import "./modal.css";
function Modal({ width, height, setShowModal }) {
  return (
    <div
      class="modal-cont"
      style={{
        width: width,
        minHeight: height * 2,
        paddingBottom: height,
        overflow: "hidden",
        position: "fixed",
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
      <div
        class="modal"
        style={{
          width: "80%",
          marginTop: "2%",
          height: "50%",
          background: "#fff",
          padding: "5%",
          position: "relative",
        }}
      >
        <button class="close_btn" onClick={() => setShowModal(false)}>
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
              style={{
                width: "40%",
                objectFit: "contain",
              }}
            />
            <h4
              style={{
                marginTop: "-10px",
                fontSize: "30px",
                fontWeight: "bold",
                color: "#CF0058",
                textAlign: "center",
              }}
            >
              Find rooms and verified roommate in Nigeria
            </h4>
          </div>
          <div
            class="modal-body"
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
              Access to an exciting selection of verified roommates who fit your
              personality preferences, interests and have complimentary budgets.
            </p>

            <button class="cont_btn">Continue to form</button>
          </div>
          <div
            class="modal-footer"
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
              style={{
                width: "110%",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;

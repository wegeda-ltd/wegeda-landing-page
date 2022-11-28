import React from "react";
import "./main.css";
import Modal from "./modal";

function Main() {
  const [showFaq, setShowFaq] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [currFaq, setCurrFaq] = React.useState("What is Wegeda");
  let maxWidth = 1920;
  const height = window.innerHeight;

  const FAQ = [
    {
      question: "What is Wegeda?",
      answer:
        "Wegeda is the first online room sharing mobile app in sub-Saharan Africa that prioritizes security above all else. We help Nigerians find rooms and roommates by matching people based on interests, personality types, budget size and lots more.",
    },
    {
      question: "Who can I find on Wegeda?",
      answer:
        "You can select from students, NYSC corps members, professionals and entrepreneurs. But more importantly, you'll find people who are willing to partner with you to get that home you want.",
    },
    {
      question: "How does Wegeda ensure my safety?",
      answer:
        "Wegeda manually verifies each user before approving signup. This ensures that every profile is a verified person  matching the data provided. However, we advice you to exercise caution in your interactions.",
    },
    {
      question: "Can I find my preferred roommate type?",
      answer:
        "Wegeda is built to allow you find people based on their personality type, interests and hobbies. You can even see what people do, i.e. frontend developer, vocalist, writer, etc. The best part is, it's entirely free to start searching for the right match, right now.",
    },
  ];

  const openFaq = (question) => {
    setCurrFaq(question.toLowerCase());

    if (showFaq == false) {
      setShowFaq(true);
    } else {
      setShowFaq(false);
    }
  };

  const maxPercentage = 100;
  let dimensions = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  let zoom =
    dimensions.width > 600
      ? (dimensions.width * maxPercentage) / maxWidth
      : 100;

  function handleResize() {
    dimensions.height = window.innerHeight;
    dimensions.width = window.innerWidth;

    zoom =
      dimensions.width > 600
        ? (dimensions.width * maxPercentage) / maxWidth
        : 100;

    console.log(
      dimensions.height,
      dimensions.height * (100 / zoom),
      zoom,
      "zoom ooo"
    );
    document.body.style.zoom = zoom + "%";
  }

  // document.body.style.zoom = "80%";

  const initialValue = document.body.style.zoom;
  // Change zoom level on mount

  document.body.style.zoom = zoom + "%";

  //change dimension on page resize
  window.addEventListener("resize", handleResize);

  return (
    <div>
      <Modal
        width={showModal ? "100%" : 0}
        height={showModal ? height : 0}
        setShowModal={setShowModal}
      />

      <nav
      // style={{
      //   position: showModal ? "relative" : "fixed",
      // }}
      >
        <div class="nav-container">
          <img src="/images/wegedaLogo.png" alt="" class="nav-logo" />
          <button class="nav-download-btn" onClick={() => setShowModal(true)}>
            Join Waitlist
          </button>
        </div>
      </nav>

      <div class="main-content">
        <div class="hero">
          <div class="hero-left">
            <span>Find your next</span>
            <h1>Housemate</h1>
            <img src="/images/heroTextUnderline.png" alt="" class="underline" />

            <div class="hero-cta">
              <a href="/#">
                <img src="/images/appstore.png" />
              </a>
              <a href="/#">
                <img src="/images/playstore.png" />
              </a>
            </div>
          </div>
          <div class="hero-right">
            <div class="girl-persona-cont">
              <div class="persona-border">
                <img
                  src="/images/girlPersona.png"
                  alt=""
                  class="girl-persona-img"
                />
              </div>
            </div>
            <img
              src="/images/girlToBoyArrow.png"
              alt=""
              class="girl-to-boy-arrow"
            />
            <div class="boy-persona-cont">
              <div class="boy-persona-border">
                <img
                  src="/images/boyPersona.png"
                  alt=""
                  class="boy-persona-img"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="chat-n-meet-cont">
          <div class="chat-n-meet">
            <h2>
              Search, Chat & Meet <br />
              with Housemates
            </h2>
            <p>
              We have designed a secured platform for you to find a trustworthy
              and verified roommate
            </p>
          </div>

          <div class="chat-n-meet-descs">
            <div class="chat-n-meet-desc">
              <img
                src="/images/ftpf_icon.png"
                alt=""
                class="chat-n-meet-desc-icon"
              />
              <div class="chat-n-meet-desc-txt">
                <h1>Find the perfect fit</h1>
                <span>
                  Get recommendations for housemates who fits your personality,
                  lifestyle, or interest
                </span>
              </div>
            </div>
            <div class="chat-n-meet-desc">
              <img
                src="/images/hmnb_icon.png"
                alt=""
                class="chat-n-meet-desc-icon"
              />
              <div class="chat-n-meet-desc-txt">
                <h1>Housemates nearby</h1>
                <span>
                  Search for available houses or housemates around you
                </span>
              </div>
            </div>
            <div class="chat-n-meet-desc">
              <img
                src="/images/eyar_icon.png"
                alt=""
                class="chat-n-meet-desc-icon"
              />
              <div class="chat-n-meet-desc-txt">
                <h1>Enlist your available rooms</h1>
                <span>
                  Share your available room with the community to find your next
                  trustworthy housemate
                </span>
              </div>
            </div>
            <div class="chat-n-meet-desc">
              <img
                src="/images/im_icon.png"
                alt=""
                class="chat-n-meet-desc-icon"
              />
              <div class="chat-n-meet-desc-txt">
                <h1>Instant messages</h1>
                <span>
                  Send and receive messages from interested housemates
                </span>
              </div>
            </div>
          </div>

          <div class="download-to-device">
            <div class="left">
              <h2>Download to your device</h2>
              <div class="dwnload-cta">
                <a href="/#">
                  <img src="/images/appstore.png" />
                </a>
                <a href="/#" class="playstore">
                  <img src="/images/playstore.png" />
                </a>
              </div>
            </div>

            <div class="right">
              <img src="/images/wegedaIconBlack.png" alt="wegeda logo" />
            </div>
          </div>

          <div class="live-the-life">
            <div class="live-the-life-img">
              <img src="/images/mobile-phone.png" />
            </div>
            <div class="live-the-life-txt">
              <h1 class="big">
                Live the life <br />
                you deserve
              </h1>
              <h1 class="small">Live the life you deserve</h1>
              <p class="big">
                Find your next roommate from a community of trustworthy &
                verified house owners & house seekers. Get recommendations
                tailored to your preference.
              </p>
              <p class="small">
                Find your next roommate from a community of trustworthy &
                verified house owners & house seekers. Get recommendations
                tailored to your preference.
              </p>
            </div>
          </div>

          <div class="faqs">
            <h3>Frequently Asked Questions(FAQ)</h3>

            {FAQ.map((faq, index) => (
              <div
                class={`faq ${
                  showFaq &&
                  currFaq.toLowerCase().includes(faq.question.toLowerCase())
                    ? "faq-body-show-cont"
                    : ""
                }`}
                key={index}
                onClick={() => openFaq(faq.question)}
              >
                <div class="faq-header">
                  <h3>{faq.question}</h3>
                  <img
                    src={`${
                      showFaq &&
                      currFaq.toLowerCase().includes(faq.question.toLowerCase())
                        ? "/images/expand_less.png"
                        : "/images/expand_more.png"
                    }`}
                    style={{
                      width:
                        showFaq &&
                        currFaq
                          .toLowerCase()
                          .includes(faq.question.toLowerCase())
                          ? "10px"
                          : "20px",
                    }}
                  />
                </div>
                <div
                  class={`${
                    showFaq &&
                    currFaq.toLowerCase().includes(faq.question.toLowerCase())
                      ? "faq-body-show"
                      : "faq-body"
                  }`}
                  style={{
                    display:
                      showFaq &&
                      currFaq.toLowerCase().includes(faq.question.toLowerCase())
                        ? "block"
                        : "none",
                    width: "90%",
                    marginTop: "20px",
                    marginBottom: "10px",
                  }}
                >
                  {faq.answer}
                </div>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer>
        <div class="contact-us">
          <span>Contact Us</span>
          <div class="social-icons">
            <a href="/#">
              <img src="/images/twitterIcon.png" alt="twitter" />
            </a>

            <a href="/#">
              <img src="/images/instagramIcon.png" alt="instagram" />
            </a>

            <a href="/#">
              <img src="/images/facebookIcon.png" alt="facebook" />
            </a>
          </div>
        </div>

        <div class="footer-items">
          <img src="/images/wegedaLogo.png" alt="logo" class="footer-logo" />

          <div class="policy">
            <a href="/#">Privacy Policy</a>
            <a href="/#">Terms of use</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Main;

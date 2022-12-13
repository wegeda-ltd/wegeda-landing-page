import React, { useEffect } from "react";
import Modal from "../components/modal";
import { motion } from "framer-motion";
import { init } from "ityped";
import Head from "next/head";
import { useRouter } from "next/router";
function Page() {
  const router = useRouter();

  const [showFaq, setShowFaq] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [currFaq, setCurrFaq] = React.useState("What is Wegeda");
  const [showFlag, setShowFlag] = React.useState(false);
  let maxWidth = 1920;
  let height;
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

  const textRef = React.useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 2000,
      backSpeed: 60,
      strings: ["Housemates", "Roommates", "House to Rent", "Room to Rent"],
    });
  }, []);

  useEffect(() => {
    console.log(textRef.current.innerHtml, "TEXT REF");
    console.log(textRef.current.text, "TEXT REF");
    console.log(textRef.current, "TEXT REF");
  }, [textRef.current]);

  const openFaq = (question) => {
    setCurrFaq(question.toLowerCase());

    if (showFaq === false) {
      setShowFaq(true);
    } else {
      setShowFaq(false);
    }
  };

  const maxPercentage = 100;

  if (typeof window !== "undefined") {
    height = window.innerHeight;

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

      document.body.style.zoom = zoom + "%";
    }

    document.body.style.zoom = zoom + "%";

    //change dimension on page resize
    window.addEventListener("resize", handleResize);
  }
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/images/wegeda.png" />
        <meta property="og:image" content="/images/wegeda.png" />
        <meta property="og:url" content="https://wegeda.app" />
        <meta property="og:title" content="Wegeda" />
        <meta
          property="og:description"
          content="Find rooms and verified roommates across Nigeria."
        />
        <meta
          name="description"
          content="Find rooms and verified roommates across Nigeria."
        />

        <meta property="og:type" content="website" />
        <title>Wegeda </title>
      </Head>

      {showModal && (
        <Modal
          width={showModal ? "100%" : 0}
          height={showModal ? height : 0}
          setShowModal={setShowModal}
        />
      )}

      <nav
      // style={{
      //   position: showModal ? "relative" : "fixed",
      // }}
      >
        <div className="nav-container">
          <img src="/images/wegedaLogo.png" alt="" className="nav-logo" />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <button
              className="nav-download-btn"
              onClick={() =>
                router.push(
                  "blogs/how-to-rent-choice-apartments-in-lagos-hotspots-without-bursting-your-wallet"
                )
              }
            >
              Join Waitlist
            </button>
            <img
              src="/images/flag.jpeg"
              className="flag"
              style={{
                cursor: "pointer",
              }}
              onMouseOver={() => setShowFlag(true)}
              onMouseLeave={() => setShowFlag(false)}
            />
          </div>
        </div>
      </nav>

      {showFlag && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.1,
              opacity: 0,
              transition: {
                delay: 0.001,
              },
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.001,
              },
            },
          }}
          style={{
            position: "absolute",
            top: 150,
            zIndex: 1000000000000000,
            right: 15,
            width: "300px",
            background: "#fff",
            borderRadius: "10px",
            padding: "18px",
            boxShadow: "2px 3px 15px rgba(34, 34, 34, 0.3)",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img src="/images/flag.jpeg" className="flag" />
          <h3
            style={{
              fontSize: "34px",
              fontWeight: "bold",
              marginLeft: "20px",
            }}
          >
            Nigeria
          </h3>
        </motion.div>
      )}
      <div className="main-content">
        <div className="hero">
          <div className="hero-left">
            <span>Find your next</span>
            <h1 ref={textRef}></h1>
            {/* <img
              src="/images/heroTextUnderline.png"
              alt=""
              className="underline"
            /> */}

            <div className="hero-cta">
              <a href="/#">
                <img src="/images/appstore.png" alt="" />
              </a>
              <a href="/#">
                <img src="/images/playstore.png" alt="" />
              </a>
            </div>
          </div>
          <div className="hero-right">
            <div className="girl-persona-cont">
              <div className="persona-border">
                <img
                  src="/images/girlPersona.png"
                  alt=""
                  className="girl-persona-img"
                />
              </div>
            </div>
            <img
              src="/images/girlToBoyArrow.png"
              alt=""
              className="girl-to-boy-arrow"
            />
            <div className="boy-persona-cont">
              <div className="boy-persona-border">
                <img
                  src="/images/boyPersona.png"
                  alt=""
                  className="boy-persona-img"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="chat-n-meet-cont">
          <div className="chat-n-meet">
            <h2>
              Search, Chat & Meet <br />
              with Housemates
            </h2>
            <p>
              We have designed a secured platform for you to find a trustworthy
              and verified roommate
            </p>
          </div>

          <div className="chat-n-meet-descs">
            <div className="chat-n-meet-desc">
              <img
                src="/images/ftpf_icon.png"
                alt=""
                className="chat-n-meet-desc-icon"
              />
              <div className="chat-n-meet-desc-txt">
                <h1>Find the perfect fit</h1>
                <span>
                  Get recommendations for housemates who fits your personality,
                  lifestyle, or interest
                </span>
              </div>
            </div>
            <div className="chat-n-meet-desc">
              <img
                src="/images/hmnb_icon.png"
                alt=""
                className="chat-n-meet-desc-icon"
              />
              <div className="chat-n-meet-desc-txt">
                <h1>Housemates nearby</h1>
                <span>
                  Search for available houses or housemates around you
                </span>
              </div>
            </div>
            <div className="chat-n-meet-desc">
              <img
                src="/images/eyar_icon.png"
                alt=""
                className="chat-n-meet-desc-icon"
              />
              <div className="chat-n-meet-desc-txt">
                <h1>Enlist your available rooms</h1>
                <span>
                  Share your available room with the community to find your next
                  trustworthy housemate
                </span>
              </div>
            </div>
            <div className="chat-n-meet-desc">
              <img
                src="/images/im_icon.png"
                alt=""
                className="chat-n-meet-desc-icon"
              />
              <div className="chat-n-meet-desc-txt">
                <h1>Instant messages</h1>
                <span>
                  Send and receive messages from interested housemates
                </span>
              </div>
            </div>
          </div>

          <div className="download-to-device">
            <div className="left">
              <h2>Download to your device</h2>
              <div className="dwnload-cta">
                <a href="/#">
                  <img src="/images/appstore.png" alt="" />
                </a>
                <a href="/#" className="playstore">
                  <img src="/images/playstore.png" alt="" />
                </a>
              </div>
            </div>

            <div className="right">
              <img src="/images/wegedaIconBlack.png" alt="wegeda logo" />
            </div>
          </div>

          <div className="live-the-life">
            <div className="live-the-life-img">
              <img src="/images/mobile-phone.png" alt="" />
            </div>
            <div className="live-the-life-txt">
              <h1 className="big">
                Live the life <br />
                you deserve
              </h1>
              <h1 className="small">Live the life you deserve</h1>
              <p className="big">
                Find your next roommate from a community of trustworthy &
                verified house owners & house seekers. Get recommendations
                tailored to your preference.
              </p>
              <p className="small">
                Find your next roommate from a community of trustworthy &
                verified house owners & house seekers. Get recommendations
                tailored to your preference.
              </p>
            </div>
          </div>

          <div className="faqs">
            <h3>Frequently Asked Questions(FAQ)</h3>

            {FAQ.map((faq, index) => (
              <div
                className={`faq ${
                  showFaq &&
                  currFaq.toLowerCase().includes(faq.question.toLowerCase())
                    ? "faq-body-show-cont"
                    : ""
                }`}
                key={index}
                onClick={() => openFaq(faq.question)}
              >
                <div className="faq-header">
                  <h3>{faq.question}</h3>
                  <img
                    alt=""
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
                  className={`${
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
        <div className="contact-us">
          <span>Contact Us</span>
          <div className="social-icons">
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

        <div className="footer-items">
          <img
            src="/images/wegedaLogo.png"
            alt="logo"
            className="footer-logo"
          />

          <div className="policy">
            <a href="/#">Privacy Policy</a>
            <a href="/#">Terms of use</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Page;

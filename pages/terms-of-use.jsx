
import Head from "next/head";

export default () => {
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


    //change dimension on page resize
    window.addEventListener("resize", handleResize);
  }

  return (
    <div className="blog-container">
      <Head>
        <link rel="shortcut icon" href="/images/wegeda.png" />
        <meta property="og:image" content="/images/blog_top_img.png" />
        <meta property="og:url" content="https://wegeda.app" />
        <meta
          property="og:title"
          content="Wegeda - Terms Of Use"
        />
        <meta
          property="og:description"
          content="Terms Of Use"
        />
        <meta
          name="description"
          content="Terms Of Use"
        />

        <meta property="og:type" content="website" />
        <meta
          name="keywords"
          content="Rent, Roommates, Rent anywhere in lagos, find verified roommate, cheap houses, cheap rent"
        ></meta>
        <title>
          Wegeda - Terms Of Use
        </title>
      </Head>


      <div
        className="blog-wrapper"
        style={{
          textAlign: "left",
          maxWidth: "700px",
          alignItems: 'flex-start'
        }}
      >
        <div
          className="policy-header"
        >
          <h1 style={{

          }}>Terms Of Use</h1>
        </div>

      </div>
    </div>
  )
}
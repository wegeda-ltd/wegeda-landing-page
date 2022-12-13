import React from "react";
import Link from "next/link";
import Head from "next/head";

function HowToRent() {
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

  return (
    <div className="blog-container">
      <Head>
        <link rel="shortcut icon" href="/images/wegeda.png" />
        <meta property="og:image" content="/images/blog_top_img.png" />
        <meta property="og:url" content="https://wegeda.app" />
        <meta
          property="og:title"
          content="Wegeda - How To Rent Choice Apartments In Lagos Hot Spots Without Bursting Your Wallet"
        />
        <meta
          property="og:description"
          content="Introducing The 3-Step Solution That Helps You Rent Anywhere You Want Within 2 Days of Looking"
        />
        <meta
          name="description"
          content="Introducing The 3-Step Solution That Helps You Rent Anywhere You Want Within 2 Days of Looking"
        />

        <meta property="og:type" content="website" />
        <title>
          Wegeda - How To Rent Choice Apartments In Lagos Hot Spots Without
          Bursting Your Wallet
        </title>
      </Head>

      <div className="blog-header">
        <h1>
          How To Rent Choice Apartments In Lagos Hot Spots Without Bursting Your
          Wallet
        </h1>
        <h5>
          Introducing The 3-Step Solution That Helps You Rent Anywhere You Want
          Within 2 Days of Looking
        </h5>

        <img src="/images/blog_top_img.png" alt="Wegeda " />
      </div>

      <div className="blog-body">
        <p>As a 20 or 30-something-year-old living in Lagos…</p>
        <p>
          If you have ever tried to rent a comfortable apartment, you know that
          the costs can be… ridiculous.
        </p>
        <p>
          You could pay your rent one day… and spend the rest of the year
          worrying about the next rent payment.
        </p>
        <p>
          And when you cannot afford the costly rents in the desirable locations
          or apartments, the popular alternatives are to:
        </p>

        <ul>
          <li>
            Settle for a single room and share bathrooms and toilets with 20
            other families (i.e, face-me-I-slap-you), Or
          </li>
          <li>
            Go rent on the outskirts of Lagos like Bogije, Ikorodu, Eleko,
            Iju-Ishaga, etc.
          </li>
        </ul>

        <p>
          With the face-me-I-slap-you option, you have to be ready to bear
          whatever your eyes see from neighbours.
        </p>
        <p>
          And if you choose to settle away from the mainland/Island axis, you’re
          inadvertently opting for high transportation costs and 3 - 6 daily
          hours of traffic… especially if your workplace is within the mainland
          or Island axis.
        </p>

        <p>
          Financial constraints and the pressure of time have forced many to
          settle for one of the two alternatives.
        </p>

        <p>
          But if you live in Ikorodu, and work in Lekki, you’re almost surely
          not getting enough sleep.
        </p>

        <p>
          And after 6 months… you realize that the cons to your health and purse
          outnumber whatever benefits you imagined.
        </p>

        <p>Now, of course there is a third alternative — which is to</p>

        <ul>
          <li>
            Partner with someone who has a similar budget to co-rent in your
            preferred location.
          </li>
        </ul>

        <p>But then comes the big question:</p>

        <h3>How Do You Find That ‘Someone’ Fast?</h3>

        <p>
          And beyond that, there are the intangible issues that no one talks
          about before co-renting… yet which determine what the co-living
          experience will be. Issues like:
        </p>

        <ul className="italicized">
          <li>Is this stranger's identity real?</li>
          <li>Do they care for personal hygiene and cleanliness?</li>
          <li>Will they respect your values, space, and visitors?</li>
          <li>
            Will they steal from you? Or eat your food without your permission?
          </li>
          <li>
            Will they continue to contribute to the bills? Or would they
            eventually become freeloaders?
          </li>
          <li>
            Will they be noisy? Or will they nag you for your lifestyle choices?
          </li>
        </ul>

        <p>Everyone worries about these things…</p>

        <p>
          However, in the past you would have been forced to ignore them due to
          the limited options available to you…and just walk blindly into a
          house-sharing arrangement…irrespective of how important these issues
          are to you.
        </p>

        <p className="italicized">
          But it does not have to be so any longer. Especially not with all the
          tech available in 2022!
        </p>
        <p>
          Listen, going by over 60% of roommate testimonials on internet forums
          like Reddit and Nairaland, most people who have lived with roommates
          have sad stories to tell. And…
        </p>
        <ul>
          <li>They wish they had asked more questions, or</li>
          <li>Signed a binding housemate contract before co-renting…</li>
        </ul>
        <p>Because it would have saved them from losses.</p>
        <p>So, yes…your concerns are valid.</p>
        <p className="bold">And that’s why Wegeda was built.</p>

        <p>
          Look, Wegeda is not just about finding someone to rent a house with so
          you can keep within budget. No.
        </p>

        <p className="italicized">
          It’s about making it possible to rent a house that satisfies your
          taste, without spending overboard…with a housemate that fits your
          lifestyle.
        </p>

        <h3>But Why All This Effort?</h3>
        <p>Think about this…</p>

        <p>
          Would you be satisfied if all Wegeda does is to match you with someone
          who has a similar budget and desired location?
        </p>

        <p className="italicized">
          Without doing anything about the issues that constantly lead to
          conflicts between flatmates?
        </p>

        <p>Would that not feel obsolete…and inefficient?</p>
        <p>Yes?</p>
        <p>Well, that's why you’re getting much more!</p>
        <p className="italicized">
          Now you have all you need to make a choice that satisfies you in the
          long term.
        </p>
        <p>
          This way, you’re not entering a situation where you have to alter your
          lifestyle because of such a temporary arrangement.
        </p>
        <p>
          Instead, you’ll be living with someone who already accepts your
          lifestyle choices and will respect them as long as you live together.
        </p>

        <img src="/images/blog_abt_me.png" alt="about-me-img" />
        <h3>And How Is This Achieved?</h3>

        <p>
          Through this simple 3-stage process that is guaranteed to take you
          from house-seeker to having an address within 2 days!
        </p>
        <p>
          <span>VERIFY: </span>every new user’s information is pre-verified
          before their account becomes visible. This way, you can trust that
          they are who they say they are about their identity, finances, and
          workplace.
        </p>

        <img src="/images/blog_occupation.png" alt="occupation-proof" />
        <p className="italicized">
          *Data collected for verification are never shared publicly.
        </p>
        <p>
          <span>MATCH: </span>
          it all begins with a search. When you search for a location of
          interest, Wegeda provides user profiles that are also interested in
          renting in that same location. You can then connect to those whose
          profiles match yours in budget, interests, and lifestyle, and begin to
          chat.
        </p>
        <p>
          You can also connect to and chat with multiple people to enable you to
          make the best choice without pressure.
        </p>
        <img src="/images/blog_chatting.png" alt="chat..." />
        <p className="italicized">
          *No need to share your contact details immediately you connect. Do all
          the chats and calls on Wegeda, and only share private details after
          you feel safe with them.
        </p>

        <p>
          <span>CO-RENT: </span>
          After you’ve settled on a user who you’d be pleased to share a house
          with, you can then select a listed apartment on Wegeda in your
          location of desire which fits your agreed-upon budget. Connect to the
          Landlord/Agent. Pay your cuts each and move in when you want.
        </p>
        <p className="italicized">
          Now, you can make a satisfying choice without being pressured by time
          or worried about the scarcity of options!
        </p>
        <img src="/images/blog_fav.png" alt="favorite-rooms" />
        <p className="italicized">
          *You can join another user in an apartment they already paid for. Or
          you can connect with another house-seeker to rent a fresh apartment.
        </p>

        <Link href={"/forms/waitlist-form"} className="blog-btn">
          Be the first to choose
        </Link>

        <h3>So...Who Is It Built For?</h3>
        <p>You.</p>
        <p>Yes, if you’re…</p>
        <ul>
          <li>A Gen-Z just starting in life… Or</li>
          <li>
            A millennial still finding your feet in Lagos and cannot afford the
            breakneck prices of Lagos housing on your own. Or
          </li>
          <li>
            You’re even a family person who lives on one end of Lagos…and works
            on the other end (you know what I mean) and are looking for a way to
            avoid the 5 hours of Lagos traffic on the weekdays. But don’t want
            to rent an entire apartment on your own.
          </li>
        </ul>

        <p>You will love Wegeda.</p>

        <p className="italicized">
          Having a housemate can be a pleasant experience, and many have found
          great friendships by striking luck with the right roommate.
        </p>
        <p className="italicized">
          But even if all you’re hoping for is someone who stays out of your way
          and gives you your privacy…
        </p>
        <p className="italicized">
          You’re more likely than ever to find that profile with Wegeda!
        </p>
        <p>And now for the best part…</p>

        <p className="bold">
          You Don't Have To Pay A Dime If You Don't See Any User Profiles You
          Like.
        </p>
        <p>
          That’s right. You only need to upgrade to our paid premium plans if
          you’re ready to connect and chat with profiles that interest you.
        </p>

        <p>
          This means you can start searching for listings in your desired
          location…and go through the profiles of our other verified users to
          find anyone that interests you…all at zero cost.
        </p>

        <p>And if you find nothing that interests you, you can just leave.</p>

        <p className="italicized">So why not just search?</p>
        <p className="bold">And what’s more?</p>
        <p>
          You become eligible for a 50% discount off all our connect plans when
          you sign up today.
        </p>
        <p>
          But this offer only lasts if you sign up for early access before the
          year ends.
        </p>
        <p>So sign up now so you don’t miss out!</p>
        <Link href={"/forms/waitlist-form"} className="blog-btn">
          Gain early access
        </Link>
      </div>
    </div>
  );
}

export default HowToRent;

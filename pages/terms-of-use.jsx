
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

          }}>Terms Of Service</h1>
        </div>
        <p>
          Wegeda is an online marketplace that connects you with the best flatmates, roommates, and apartments across Nigeria. We help you find awesome housemates that suit your lifestyle.

        </p>

        <ol className="main-list">
          {/* INTRO */}

          <li>Introduction</li>
          <ol className="sub-list">
            <li>These terms & conditions ("Terms and Conditions") apply to the mobile application, which is the primary medium of service, and all of its divisions, subsidiaries, and affiliate operated Internet sites which reference these Terms and Conditions.
            </li>
            <li>
              For the purposes of this terms & condition, "we", "us" and "our" all refer primarily to the mobile application and where applicable, the website and other company customer facing online portals.

            </li>
            <li>
              Wegeda Limited, from here on out, referred to as ‘the company’ reserves the right to change, modify, add, or remove portions of the Terms and Conditions of Use at any time should a justifiable need arise. Changes will be effective when posted on the mobile application and website with no other notice provided. In some cases general notices will be communicated, but this will not be the case for all modifications made live. Hence we advise that all potentially affected parties check these Terms and Conditions regularly for updates. Your continued use of the Site following the posting of changes to these Terms and Conditions constitutes your acceptance of those changes.

            </li>
            <li>
              Kindly review the Terms and Conditions listed below diligently prior to using this mobile application/website as your use of the mobile application/website indicates your agreement to be wholly bound by its Terms and Conditions without modification. By viewing any pages that constitute this mobile application/website, a person becomes a 'user' and also agrees to this terms and conditions of use.

            </li>

            <li>
              You agree that if you are unsure of the meaning of any part of these Terms and Conditions or have any questions regarding the Terms and Conditions, you will not hesitate to contact us for clarification (hello@wegeda.app). These Terms and Conditions fully govern the use of this website. No extrinsic evidence, whether oral or written, will be incorporated.

            </li>
            <li>
              Our official address is situated and located at No. 5, Palace Villa House, Down Odunsi Rd, Shomolu LGA, Lagos, Nigeria. Our phone number is +234(0)901-663-1895.
            </li>
            <li>
              We provide this mobile application/website for the convenience of Home owners, tenants, room-owners, tenants, real estate agents, real estate developers, landlords, investors and browsers interested in immovable property, and collect content in the form of advertisements from private renters, subscribing estate agents, letting agents, developers as well as related parties, to display properties they are marketing. We are not estate agents ourselves, neither are we landlords, real estate developers or room-owners. We serve only as an intermediary (or middle men) between the supply-side (home owner) and the demand-side (home seeker). Hence we advise users to search carefully before matching with housemates. Howbeit, we do our part to verify users’ identity in order to identify and weed off potential perpetrators. Regardless,  we advise users to remain very cautious in their interactions to avoid costly outcomes .
            </li>
            <li>
              These terms and conditions are deemed to include our privacy policy and are collectively known as "these Terms".

            </li>
            <li>
              Certain uses of this Site are prohibited and amount to a misuse of our systems and the Site.
            </li>
            <li>
              For the purposes of this website, "we", "us" and "our" all refer to wegeda’s mobile application and where applicable, website.

            </li>
          </ol>

          {/* USE OF MOBILE APP */}
          <li>Use of this Mobile Application / Website</li>
          <ol className="sub-list">
            <li>
              You confirm that you are at least 18 years of age or are accessing the mobile application/website under the supervision of a parent or legal guardian.

            </li>
            <li>
              Both parties agree that this website may only be used in accordance with these Terms and Conditions of Use. If you do not agree with the Terms and Conditions of Use or do not wish to be bound by them, you agree to refrain from using this mobile application/website.
            </li>
            <li>
              We grant you a non-transferable, revocable and non-exclusive license to use this mobile application/website. These Terms and Conditions of Use specifically prohibit actions such as: accessing our servers or internal computer systems, interfering in any way with the functionality of this website, gathering or altering any underlying software code, infringing any intellectual property rights. This list is non-exhaustive and similar actions are also strictly prohibited. Any breach of these Terms and Conditions of Use shall result in the immediate revocation of the license granted in this paragraph without prior notice to you. Should we determine at our sole discretion that you are in breach of any of these conditions, we reserve the right to deny you access to this mobile application/website and its contents and do so without prejudice to any available remedies at law or otherwise.

            </li>
            <li>
              Certain services and related features that may be made available on the mobile application/ website may require registration or subscription. Should you choose to register or subscribe for any such services or related features, you agree to provide accurate and current information about yourself and to promptly update such information if there are any changes. Every user of the Wegeda mobile application/website is solely responsible for keeping passwords and other account identifiers safe and secure.

            </li>
            <li>
              The account owner is entirely responsible for all activities that occur under such password or account. Furthermore, you must notify us of any unauthorized use of your password or account. The mobile application/website (and by extension Wegeda Limited) shall not be responsible or liable, directly or indirectly, in any way for any loss or damage of any kind incurred as a result of, or in connection with, your failure to comply with this section.

            </li>
          </ol>
          {/* USE OF MOBILE APP END*/}

          {/*  USER SUBMISSION*/}
          <li>User submission</li>
          <ol className="sub-list">
            <li>
              Anything that you submit to the Site and/or provide to us, including but not limited to, questions, reviews, comments, and suggestions (collectively, "Submissions") will become our sole and exclusive property and shall not be returned to you.

            </li>
            <li>
              You shall not use a false e-mail address, pretend to be someone other than yourself or otherwise mislead us or third parties as to the origin of any Submissions. We may, but shall not be obligated to, remove or edit any Submissions. Falsifying your identity may result in severe sanctions from the company (Wegeda Limited), and where required, from the local law enforcement.
            </li>
          </ol>

          {/* USER SUBMISSION END */}
          <li>Accessibility of mobile application/website
          </li>
          <ol className="sub-list">
            <li>Our aim is to ensure accessibility to the mobile application/website at all times, however we make no representation of that nature and reserve the right to terminate the website at any time and without notice. You accept that service interruption may occur in order to allow for website improvements, scheduled maintenance or due to external factors beyond our control.
            </li>
          </ol>


          <li>Formation of contract</li>
          <ol className="sub-list">
            <li>Both parties agree that browsing the mobile application/website and gathering information regarding the services provided by the room/apartment owner does not constitute an offer to let, but merely an invitation to treat. The parties accept that an offer is only made once you have selected the property you intend to use, chosen your preferred payment method, proceeded to chat with room/apartment owner and paid the room/apartment owner, and duly received a receipt as proof of payment.
            </li>
            <li>All renters agree that they will only portray real and accurate representations of apartments/rooms, and not mislead users by displaying false images on listings, and inaccurate descriptions of listings.</li>

            <li>All renters and home seekers on Wegeda agree to conduct a proper research on potential roommates/housemates by themselves outside the verification already conducted by Wegeda. All renters and home seekers on Wegeda also agree not to pay for any listing until deemed satisfactory by the renter/home seeker, as Wegeda will not be held responsible for any unanticipated hiccup along the way, in the form of poorly managed house, insecurity of neighbourhood, incessant rise of utility bills, uncultured in-house landlord/landlady or managing agent, noisy neighbours, and all other forms of unfavourable conditions that may arise post payment to the home owner/letting agent.
            </li>
            <li>
              Please note that there are cases when a request cannot be processed for various reasons. The company reserves the right to refuse or cancel any request for any reason at any given time.

            </li>
          </ol>

          <li>Payment</li>
          <ol className="sub-list">
            <li>All parties agree that payment shall be remitted to the room/apartment owner upon confirmation of the standard of the room/apartment and that there exists no misrepresentation as to the standard of the room/apartment given by the room/apartment owner.
            </li>
            <li>It is agreed by the room/apartment owner that where there is a misrepresentation as to the standard of the apartment/room, it shall be liable to compensate the room/apartment seeker based on a mutually agreed settlement. In the event where both parties are unable to settle amicably, and the room owner/agent is clearly at fault, such room owner/agent risks being permanently banned from Wegeda, and where severe cases are concerned, reported to be dealt with by the appropriate law enforcement agencies.
            </li>
            <li>
              All subscriptions on Wegeda by home owners/agents are only advertisement fees to place ads on the platform. Also home seekers/renters subscribe to be able to access other home seekrs/renters, or home owners/agents. Subscription payments on Wegeda does not equate to payment for any listing. Wegeda is an intermediary online marketplace that brings the demand side and supply side (home owners/agents and home seekers/renters, respectively) together. We therefore are not responsible for refunds on unsatisfactory accommodation experiences.

            </li>
            <li>
              All tenants are strongly advised to seek a tenancy agreement from their landlords/landladies/managing agent/room owner. This helps establish the expectations for an accommodation experience.

            </li>

            <li>
              Wegeda provides an affordable paid roommate agreement that defines and outlines responsibilities of binding terms of both parties. Failure to sign roommate agreement exposes users to the risk of being unable to call out wrong when done by their roommate, as there is no referenceable agreement between both parties; thus, no accountability of actions hitherto. Furthermore, this is not an excuse for users to not conduct their own personal background check on their potential roommate/housemate.

            </li>
          </ol>

          <li>Recovery of property</li>
          <ol className="sub-list">
            <li>All Parties agree that upon the expiration of the tenancy tenure, whether a short or long-term lease, the room/apartment seeker shall exit the premises on or before 12 noon on the date of expiration. Failure to do this, Wegeda or its representatives shall have the right to recover the said property from the user.
            </li>
          </ol>

          <li>User covenant</li>
          <ol className="sub-list">
            <b>It is agreed that the room/apartment seeker shall uphold the following:</b>
            <li>Keep the interior of the property in good and tenable condition.</li>
            <li>Shall be liable for any damages incurred during stay in property in question
            </li>
            <li>
              Understand all rules and regulations of the property owner and moving in, is an agreement to such rules and regulations

            </li>

            <li>
              Avoid illegal practices during the stay, and avoid using the interior property for illicit purposes

            </li>

            <li>
              Peacefully yield up the property to its owner upon the expiration of the agreed tenure.

            </li>

            <li>
              Fix any damage done on the apartment during tenure of use of the property or pay the equivalent monetary value to return the damaged property to its original state of aesthetics and function.

            </li>
          </ol>

          <li>Misrepresentation</li>
          <ol className="sub-list">
            <li>Wegeda shall not be responsible for any misrepresentation of images and information shared by room/apartment seeker or owner. We however strongly advise that only accurate information is uploaded on our mobile application, and that acting contrary to this may attract severe penalties as we hold in high esteem the value generated for our users and strongly avoid unfavourable experiences on our platform.
            </li>
          </ol>

          <li>Termination</li>
          <ol className="sub-list">
            <li>In addition to any other legal or equitable remedies, we may, without prior notice to you, immediately terminate some or all of the terms and conditions or revoke any or all of your rights granted under the Terms and Conditions of Use. Upon any termination of this Agreement, we may immediately cease all access to and use of the mobile application/website and we shall, in addition to any other legal or equitable remedies, immediately revoke all password(s) and account identification issued to you and deny your access to and use of this mobile application/website in whole or in part.
            </li>
          </ol>

          <li>Confidentiality</li>
          <ol className="sub-list">
            <li>
              Our users' full names will not be visible on the mobile application, on their full first name, and initial of surname will be visible. Users home addresses will not also be visible on the mobile application.

            </li>

            <li>
              Any personal or organizational particulars you submit to us will be used only for the purpose for which it was demanded, and will be not used in any other way or disclosed to any third party without your express written consent, unless forced to do so by law.

            </li>

            <li>
              We may use third parties service integration to provide services on our behalf to provide overall best value services to you, which may include processing your Information. In any case, we will not pass your data to anyone who is not also registered with the Data Protection Act or is not subject to these or similar provisions in our contract with them, and we will not allow the third party to use your Information commercially without your consent.
            </li>
            <li>
              As a result of your electronic or other communication with us, we may request permission to send electronic messages or other communications of a commercial nature to you — permission that must be explicitly granted by you before we send such communications. We may also use this information to compile profiles for statistical purposes and use such profiles in the course of our business, but these profiles or statistical data will never be able to be linked to your specific profile and contact details by any third party.

            </li>
            <li>
              Like many websites, we use "cookies" to enable us to personalize your visits to our website and mobile application, and to provide a better user experience to you, and to keep track of your preferences and to track the usage of our website and mobile application. Cookies are small pieces of information that are stored in the hard drive of your computer by your browser. You have the option to prevent us from using cookies, but please note that this may reduce the functionality of our website/mobile application.

            </li>
          </ol>
          <li>Copyright</li>

          <ol className="sub-list">
            <li>
              All the content on our website and mobile application, including any and all graphics, text, icons, logos, hyperlinks, private information, designs, trademarks, software, databases and agreements, are the intellectual property of Wegeda Limited and is protected by local and international law dealing with copyright and intellectual property rights.

            </li>
            <li>
              "Wegeda Limited" is our registered trademark. You may not use or copy it without our prior written consent.

            </li>
            <li>
              All rights to this or any of Wegeda’s contents are reserved, and such content may not be reproduced without the express permission in writing from us. To obtain permission for the use of any content on our website or mobile application, kindly contact hello@wegeda.app All rights not specifically granted in regards to these terms and conditions or by special permission are reserved.

            </li>
          </ol>

          <li>Blacklisting</li>
          <ol className="sub-list">
            <li>
              Wegeda reserves the right to blacklist users from this site and/or restrict or block their access or use of any and all elements of our services, on a permanent or temporary basis at our sole discretion. Any such user shall be notified and must not then attempt to access our mobile application/website under any other name or through any other user.

            </li>
          </ol>

          <li>Disclaimer</li>
          <ol className="sub-list">
            <li>
              Wegeda and its representatives shall not be liable for any damage, loss or liability arising from the use or inability to use this website/mobile application.

            </li>
            <li>
              We make no express or implied representations or warranties that the content and service available from this website/mobile application are free from errors or omissions or that the service will be 100% uninterrupted. Users are encouraged to report any possible malfunctions or disruption in services to hello@wegeda.app. We shall not be liable if in the event that we are unable to process the details of your complaint due to circumstances beyond our reasonable control.

            </li>
            <li>
              This website/mobile application is available via the internet for any user with access, to view and interact with 'as is', and has not been compiled or designed to meet each user's individual requirements. We will not be held responsible for any inconvenience, loss or damage that a user may suffer as a result of failure to meet any one user’s bespoke need. Users are encouraged to give any feedbacks, comments or suggestions to us at hello@wegeda.app

            </li>
          </ol>

          <li>Security</li>
          <ol className="sub-list">
            <li>Any person that delivers or attempts to deliver any damaging code to our website or mobile application to infiltrate and gain unauthorised access to tamper with any of the content or pages that constitute this mobile application or website or duplicate such pages or content shall be prosecuted to the full extent of the law, and damages shall be claimed whether or not Wegeda suffers any damages or loss as a result of such action.
            </li>
            <li>
              Whilst we endeavour to ensure that any material available for downloading from our website/mobile application is not contaminated in any way, we do not warrant that such material will be free from infection, viruses and/or similar code.

            </li>
          </ol>

          <li>Disputes</li>
          <ol className="sub-list">
            <li>
              All disputes in terms of this agreement or relating to the use or inability to use this mobile application/website shall be settled in accordance with the Arbitration Rules set out in the First Schedule to the Arbitration and Conciliation Act, Cap. A18, Laws of the Federation of Nigeria, 2004 (the "Arbitration Rules"). There shall be a sole arbitrator appointed jointly by the Parties (or by the President of the Chartered Institute of Arbitrators (Nigerian Branch) if a sole arbitrator cannot be agreed upon by the Parties within ten (10) days of the written notice of a request for arbitration). The seat of the arbitration shall be Lagos, Nigeria and the procedural law of the arbitration shall be Nigerian law. The language to be used in the arbitral proceedings shall be English. All and any awards or other decisions of the arbitrator shall be made in accordance with the Arbitration Rules in writing and shall be final and binding on the Parties. Each Party shall be responsible for its own legal costs.

            </li>
          </ol>

          <li>Whole agreement</li>
          <ol className="sub-list">
            <li>
              This agreement constitutes the whole agreement between Wegeda and the user, and no terms and conditions that are not expressly stated in this agreement may be implied by either party.

            </li>

            <li>
              We reserve the right to change this agreement or any part thereof at any time without notice, such changes being deemed to come into effect as soon as they are incorporated in this agreement and viewable on the site.

            </li>
          </ol>
        </ol>

      </div>
    </div>
  )
}
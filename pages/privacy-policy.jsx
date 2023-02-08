
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
          content="Wegeda - Privacy Policy"
        />
        <meta
          property="og:description"
          content="Privacy Policy"
        />
        <meta
          name="description"
          content="Privacy Policy"
        />

        <meta property="og:type" content="website" />
        <meta
          name="keywords"
          content="Rent, Roommates, Rent anywhere in lagos, find verified roommate, cheap houses, cheap rent"
        ></meta>
        <title>
          Wegeda - Privacy Policy
        </title>
      </Head>


      <div
        className="blog-wrapper policy"
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

          }}>Privacy Policy</h1>
        </div>

        <p>We respect your privacy and want to protect your personal information. To learn more, please read this Privacy Policy. This Privacy Policy explains how we collect, use and (under certain conditions) disclose your personal information. This Privacy Policy also explains the steps we have taken to secure your personal information. Finally, this Privacy Policy explains your options regarding the collection, use and disclosure of your personal information. By visiting our website and or downloading our mobile application, you accept the practices described in this Policy. Data protection is a matter of trust and your privacy is important to us. We shall therefore only use your name and other information which relates to you in the manner set out in this Privacy Policy. We will only collect information where it is necessary for us to do so and we will only collect information if it is relevant to our dealings with you. We will only keep your information for as long as we are either required to by law or as is relevant for the purposes for which it was collected.
        </p>

        {/* Data */}
        <div
          className="policy-header"

        >
          <h2 style={{

          }}>Data that we collect</h2>
        </div>
        <p>
          We may require various information from you if you seek to find a room/apartment, or lease out a room/apartment, or find a fellow potential roommate to pair and search with. We collect, store and process your data to provide you with our services. We may collect personal information including, but not limited to, your name, gender, date of birth, email address, mobile number, payment details, location and other necessary Know-Your-Customer (KYC) and background verification information.

        </p>
        <p>
          We will use the information you provide to enable us process your requests and provide you services and information offered through our website/mobile application. Furthermore, we will use the information you provide to properly identify and manage your account with us; verify and carry out financial transactions in relation to payments you make online; audit the downloading of data from our website/mobile application; improve the layout and/or content of the pages of our website/mobile application and customize them for users; identify new visitors on our website/mobile applications; conduct researches on our users' demographics; send you information we think you may find useful or which you have requested from us, including information about our products and services, provided you have indicated that you have not objected to being contacted for these purposes. Subject to obtaining your consent we may contact you by email with details of other products and services. If you prefer not to receive any marketing communications from us, you can opt out at any time.

        </p>

        <p>
          You must only submit to us information that is accurate and not misleading; and you must keep this provided information up to date and inform us of changes when they occur. Upon subscribing to our mobile application, you will be granted access to chat with other Wegeda uses. In the event that in the course of a conversation, one or more such users share their personal residential address with you, you  do undertake to treat the personal data confidentially and not make it available to unauthorized third parties. If you choose to provide us with personal information, you consent to the transfer and storage of that information on our servers.

        </p>


        {/* Other uses */}
        <div
          className="policy-header"


        >
          <h2 style={{


          }}>Other uses of your personal information
          </h2>
        </div>
        <p>
          We may use your personal information for opinion and market research. Your details are anonymous and will only be used for statistical purposes. You can choose to opt out of this at any time. Any answers to surveys or opinion polls we may ask you to complete will not be forwarded on to third parties. Disclosing your email address is only necessary if you would like to take part in competitions. We save the answers to our surveys separately from your email address.

        </p>
        <p>
          We may also send you other information about us, our products, sales promotions, our newsletters, anything relating to other companies in our group or our business partners. If you would prefer not to receive any of this additional information as detailed in this paragraph (or any part of it) please click the 'unsubscribe' link in any email that we send to you. Within 7 working days (days which are neither (i) a Saturday nor Sunday, nor (ii) a public holiday anywhere in Nigeria) of receipt of your instruction to unsubscribe, we will cease to send you information as requested. If your instruction is unclear we will do well to contact you for clarification.

        </p>

        <p>
          We may further anonymize data about our users generally and use it for various purposes, including ascertaining the general location of the users and usage of certain aspects of the website/mobile application or a link contained in an email to those registered to receive them, and supplying that anonymized data to third parties such as publishers. However, that anonymized data will not contain enough information so as to be traceable back to you, as your full-identity will be kept confidential.

        </p>


        {/* Disclosure */}
        <div
          className="policy-header"

        >
          <h2 style={{


          }}>Our disclosure of your information
          </h2>
        </div>
        <p>
          We may disclose personal information to respond to legal requirements, enforce our policies, respond to claims that a listing or other content violates the rights of others, or protect anyone's rights, property or safety. Such information will be disclosed in accordance with applicable laws and regulations. We may also share your personal information to:

        </p>
        <ul>
          <li>Third parties to provide joint content and services (like registration, transactions and customer support), to help detect and prevent potentially illegal acts and violations of our policies, and to guide decisions about their products, services and communications. These third parties will use this information to send you marketing communications only if you've requested their services.
          </li>
          <li>
            Service providers under contract who help with our business operations (such as fraud investigations, bill collection, affiliate and rewards programs and customer support).
          </li>

          <li>
            Other third parties to whom you explicitly ask us to send your information (or about whom you are otherwise explicitly notified and consent to when using a specific service).

          </li>

          <li>
            Law enforcement agencies, other governmental agencies or third parties in response to a request for information relating to a criminal investigation, alleged illegal activity or any other activity that may expose us, you or any other Wegeda user to legal liability. The personal information we disclose may include your User ID and User ID history, name, city, telephone number, email address, fraud complaints and bidding and listing history or anything else that we deem relevant.

          </li>

          <li>
            Other agencies in connection with an investigation of fraud, intellectual property infringement, piracy, or other unlawful activity, as we in our sole discretion believe necessary or appropriate, either under a confidentiality agreement or as required by law. In such circumstances, we may disclose name, street address, city, phone number, email address and anything else that we deem relevant.

          </li>

          <li>
            Other business entities, should we plan to merge with or be acquired by that business entity. (Should such a merger occur, we will require that the new combined entity follow this privacy policy with respect to your personal information. If your personal information will be used contrary to this policy, you will receive prior notice.)

          </li>
        </ul>



        {/* Third parties */}
        <div
          className="policy-header"


        >
          <h2 style={{


          }}>Third parties and links
          </h2>
        </div>
        <p>
          We may pass your details to our agents, subcontractors and/or partner companies to help us carry out any of our uses of your data. We may exchange information with third parties for the purposes of fraud protection and credit risk reduction. We may transfer our databases containing your personal information if we sell our business or part of it. Other than as set out in this Privacy Policy, we shall NOT sell or disclose your personal data to third parties without obtaining your prior consent unless this is necessary for the purposes set out in this Privacy Policy or unless we are required to do so by law. Please be aware that we are not responsible for the privacy practices or content of those third parties or other sites, nor for any third party to whom we transfer your data in accordance with our Privacy Policy.

        </p>


        {/* Third parties */}
        <div
          className="policy-header"


        >
          <h2 style={{


          }}>No spam, spyware or spoofing
          </h2>
        </div>

        <p>
          We and our users do not tolerate spamming. You are not authorized to contact other Wegeda users outside the Wegeda online environment without their express consent. To report Wegeda related spam or spoof emails, please do well to report this to us at hello@wegeda.app. You shall not use our communication tools to send spam or otherwise send content that would breach our User Agreement.

        </p>

        {/* Account protection */}
        <div
          className="policy-header"


        >
          <h2 style={{


          }}>Account protection
          </h2>
        </div>

        <p>
          Your password is the key to your account. Use unique numbers, letters and special characters, and do not disclose your 'Wegeda' password to anyone. If you do share your password or your personal information with others, remember that you are responsible for all actions taken in the name of your account. If you lose control of your password, you may lose substantial control over your personal information and may be subject to legally binding actions taken on your behalf. Therefore, if your password has been compromised for any reason, you should immediately notify 'Wegeda' and change your password.

        </p>


        {/* Security */}
        <div
          className="policy-header"


        >
          <h2 style={{


          }}>Security
          </h2>
        </div>

        <p>
          Your information is stored on our servers. We treat data as an asset that must be protected and use lots of tools to protect your personal information against unauthorized access and disclosure. However ill-intentioned third parties may continue to make attempts to unlawfully intercept or access transmissions or private communications; and other users may abuse or misuse your personal information that they collect from the mobile application/website. Therefore, although we work very hard to protect your privacy, we do not promise that your personal information or private communications will always remain private. Regardless, rest assured, the possibility of any infiltration is very low.
        </p>

        <p>
          We have in place appropriate technical and security measures to prevent unauthorized or unlawful access to or accidental loss of or destruction or damage to your information. When we collect data through our website/mobile application, we collect your personal details on a secure server. We use firewalls on our servers. When we collect payment card details electronically, we use encryption by using Secure Socket Layer (SSL) coding. While we are unable to guarantee 100% security, this makes it hard for a hacker to decrypt your details. We maintain procedural safeguards in connection with the collection, storage and disclosure of your information. Our security procedures mean that we may occasionally request proof of identity before we disclose personal information to you. You are also partly responsible for protecting against unauthorized access to your personal Wegeda account across all your devices.

        </p>


        {/* Cookies */}
        <div
          className="policy-header"


        >
          <h2 style={{


          }}>Cookies
          </h2>
        </div>

        <p>
          Cookies can be used to recognize your Internet Protocol address, which saves you time on any of our platforms. Rest assured, our use of cookies does not contain any personal or private details and are free from viruses.
        </p>

        <p>
          Our website and mobile application use Google Analytics, a web analytics service provided by Google, Inc. ("Google"). Google Analytics uses cookies, which are text files placed on your computer, to help analyze user metrics. The information generated by the cookie about your use (including your IP address) will be transmitted to and stored by Google on servers in the United States. Google may also transfer this information to third parties where required to do so by law, or where such third parties process the information on Google's behalf. Google will not associate your IP address with any other data held by Google. You may refuse the use of cookies by selecting the appropriate settings. By using our website/mobile application, you consent to the processing of data about you by Google in the manner and for the purposes set out above.

        </p>

        {/* Your rights */}
        <div
          className="policy-header"


        >
          <h2 style={{


          }}>Your Rights</h2>
        </div>

        <p>
          If you are concerned about your data you have the right to request access to the personal data which we may hold or process about you. You have the right to require us to correct any inaccuracies in your data free of charge. At any stage you also have the right to ask us to stop using your personal data for direct marketing purposes.
          We may amend this Privacy Policy at any time by posting the amended terms on this site.

        </p>


      </div>
    </div>
  )
}
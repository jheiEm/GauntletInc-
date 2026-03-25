import { MainLayout } from "@/components/layout/main-layout";
import { Helmet } from "react-helmet-async";

export default function PrivacyPolicy() {
  return (
    <MainLayout>
      <Helmet>
        <title>Privacy Policy - Gauntlet Inc</title>
        <meta name="description" content="Gauntlet Inc Data Privacy Policy for the Pocketbell application." />
      </Helmet>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Consent Notice */}
          <div className="mb-12 p-6 bg-gray-50 border border-gray-200 rounded-lg">
            <p className="text-gray-700 leading-relaxed mb-4">
              Gauntlet respects and protects the integrity and privacy of your information. By using our Pocketbell
              application, you give your consent to the collection, use, and disclosure of your information in
              accordance with the requirements of the Philippine Data Privacy Act of 2012, its Implementing Rules and
              Regulations, other relevant issuances of the National Privacy Commission, and the terms of our Privacy
              Policy.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you use our Pocketbell application, the following information may be collected and analyzed:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4 ml-4">
              <li>Name;</li>
              <li>Address;</li>
              <li>Contact information such as email address and phone number;</li>
              <li>Any information relevant to your transaction with us.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              This information may be captured using the input fields provided in the Pocketbell application.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you do not consent to the collection of your information, you will not be able to use our Pocketbell
              application. You may reach out to us using the contact information provided in our Privacy Policy.
            </p>
            <p className="text-gray-700 font-medium">Thank you.</p>
          </div>

          {/* Policy Title */}
          <h1 className="text-4xl font-bold font-heading text-primary mb-8">DATA PRIVACY POLICY</h1>

          <p className="text-gray-700 leading-relaxed mb-10">
            Gauntlet recognizes your concerns about keeping the integrity and privacy of your personal information. We
            are responsible for protecting and respecting your privacy, and this privacy policy ("Policy") describes
            our information collection, use and dissemination practices in connection with our Pocketbell application,
            and our services. The data we collect from you shall be used purely for the purpose of providing services.
            By reading the entire Policy you will understand our policies regarding your Personal Data and how we will
            use it. This Policy applies to all individuals who interact with GAUNTLET and covers our online data
            collection activities, including Personal Data that we collect through our Pocketbell application. We are
            constantly improving our Pocketbell application and existing services. To adapt to these changes, this
            Policy may also be updated from time to time. We encourage you to visit this page frequently to check for
            any updates on our Policy.
          </p>

          {/* Personal Data */}
          <h2 className="text-2xl font-bold font-heading text-primary mb-4">PERSONAL DATA</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We may collect the following Personal Data from you, among others:
          </p>
          <ol className="list-[lower-alpha] list-inside text-gray-700 space-y-2 mb-6 ml-4">
            <li>Name;</li>
            <li>Address;</li>
            <li>Contact Information, such as your email address and phone number; and</li>
            <li>Any other information relevant to your feedback or to your transaction with us.</li>
          </ol>
          <p className="text-gray-700 leading-relaxed mb-4">
            With your consent, we may also collect the following other Personal Data to process and complete your
            transaction:
          </p>
          <ol className="list-[lower-alpha] list-inside text-gray-700 space-y-2 mb-10 ml-4">
            <li>
              Sensitive Personal Information such as birthdate, age, marital status, nationality, gender, health,
              education, government-issued identification, and employment history.
            </li>
          </ol>

          {/* Collection */}
          <h2 className="text-2xl font-bold font-heading text-primary mb-4">COLLECTION</h2>
          <p className="text-gray-700 leading-relaxed mb-10">
            We collect your Personal Data, and other information related to you through the mobile Pocketbell
            application. In the future other channels may be used.
          </p>

          {/* Use */}
          <h2 className="text-2xl font-bold font-heading text-primary mb-4">USE</h2>
          <p className="text-gray-700 leading-relaxed mb-10">
            We collect Personal Data necessary to the services which we provide. Personal Data collected by GAUNTLET
            may be used for purposes such as customer service, marketing promotions, personalization, transaction
            fulfillment and other general business purposes which include security, due diligence, analytics,
            improvement of our IT systems and compliance with contractual obligations and applicable laws. We may also
            collect or share Personal Data for other purposes as disclosed to you at the time of collection with your
            consent or instructions.
          </p>

          {/* Disclosure */}
          <h2 className="text-2xl font-bold font-heading text-primary mb-4">DISCLOSURE</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We assure you that only our authorized personnel shall have access to your Personal Data and other
            information.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            We will not disclose your Personal Data to third parties without your consent, except that we may share
            your Personal Data and other information to the following parties, or in connection with the following
            transactions, in a manner consistent with the purpose and terms of this Policy:
          </p>
          <div className="space-y-4 mb-10 ml-4">
            <div>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-medium">(a) Authorized Customers.</span> We may share your information with our
                customers that subscribe to our services, including billing, payment processing, customer service,
                marketing, sales, advertising, performance monitoring, hosting, and data processing. We shall ensure
                that our customers will not process your Personal Data for any purpose other than what are stated in
                the Services Agreement.
              </p>
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-medium">(b) Corporate Actions.</span> We may share your information in
                connection with a substantial corporate transaction, such as the sale of a website, a merger,
                consolidation, asset sale, or in the unlikely event of bankruptcy.
              </p>
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-medium">(c) Legal Purposes.</span> We may disclose Personal Data when we are
                legally required to do so, and whenever necessary to protect and defend the rights, properties,
                interests, health, safety, and security of GAUNTLET, each of our employees and customers, or the
                public.
              </p>
            </div>
          </div>

          {/* Protection */}
          <h2 className="text-2xl font-bold font-heading text-primary mb-4">PROTECTION</h2>
          <p className="text-gray-700 leading-relaxed mb-10">
            In our commitment to ensuring your information private and secured, we implement appropriate
            organizational, technical, and physical security measures to ensure that Personal Data under our custody
            are protected against any accidental or illegal destruction, alteration, access, use and disclosure and
            any other form of unlawful processing.
          </p>

          {/* Retention */}
          <h2 className="text-2xl font-bold font-heading text-primary mb-4">RETENTION</h2>
          <p className="text-gray-700 leading-relaxed mb-10">
            All Personal Data and information we collect from you shall be retained for as long as reasonably
            necessary to fulfill the purposes under this Policy or to comply with any applicable legal and regulatory
            requirements. After fulfillment of such purpose, all copies of your Personal Data and other information
            shall be disposed and destroyed, through secured means.
          </p>

          {/* Your Rights */}
          <h2 className="text-2xl font-bold font-heading text-primary mb-4">YOUR RIGHTS</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            You have the following rights as owner of the Personal Data:
          </p>
          <div className="space-y-4 mb-10 ml-4">
            <div>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-medium">(a) Access.</span> You have the right to access, review and request a
                physical or electronic copy of Personal Data and any information held about you. You also have the
                right to request information on the source of your Personal Data.
              </p>
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-medium">(b) Modification, Correction, Deletion, or Withdrawal of Consent.</span>{" "}
                Where provided by law, you can (i) request deletion, correction, or revision of your Personal Data;
                (ii) limit the use and disclosure of your Personal Data; (iii) revoke consent to any of our data
                processing activities; and (iv) object to the processing of your Personal Data, including the right to
                file a complaint with the National Privacy Commission. In case you request for deletion, we may retain
                some of your Personal Data to satisfy our business needs, legal and contractual obligations, but only
                to the extent permitted by applicable laws.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <h2 className="text-2xl font-bold font-heading text-primary mb-4">CONTACT INFORMATION</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you have concerns about this Policy, or if you wish to exercise any of the abovementioned rights, you
            may contact us through the following:
          </p>
          <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg">
            <p className="text-gray-700 font-medium">Data Protection Officer (GAUNTLET)</p>
            <a href="mailto:admin@gauntlet.ph" className="text-primary hover:underline">
              admin@gauntlet.ph
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

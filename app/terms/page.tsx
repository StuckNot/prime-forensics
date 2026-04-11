import type { Metadata } from "next";
import Footer from "@/src/components/footer/footer";

export const metadata: Metadata = {
  title: "Terms of Service | Prime Forensics",
  description:
    "Terms and conditions governing the use of Prime Forensics & Investigative Services website and professional services.",
};

export default function TermsPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      {/* Hero */}
      <section className="bg-primary pt-32 pb-12 px-6 border-t border-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-accent font-serif text-4xl md:text-5xl font-bold mb-4">
            Terms of Service
          </h1>
          <p className="text-white/60 text-sm tracking-widest uppercase font-bold">
            Last Updated: April 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto max-w-4xl px-6 py-20">
        <div className="prose prose-lg max-w-none text-typography/80 leading-relaxed space-y-12">
          <div>
            <h2 className="text-2xl font-serif font-bold text-primary dark:text-white mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the website and services of Prime Forensics
              & Investigative Services (&quot;the Company&quot;), you agree to
              be bound by these Terms of Service. If you do not agree with any
              part of these terms, you must not use our website or engage our
              services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-primary dark:text-white mb-4">
              2. Services Overview
            </h2>
            <p>
              Prime Forensics provides professional forensic analysis,
              investigation, and consultancy services including but not limited
              to scientific forensic analysis, digital and cyber forensics,
              corporate and private investigations, insurance fraud
              investigation, and professional training programs. All services
              are rendered subject to a formal engagement agreement executed
              between the Company and the client.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-primary dark:text-white mb-4">
              3. Eligibility
            </h2>
            <p>
              Our services are available to individuals, legal professionals,
              corporations, and government agencies. By engaging our services,
              you represent that you have the legal authority to enter into a
              binding agreement and that the information provided to us is
              accurate and complete.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-primary dark:text-white mb-4">
              4. Confidentiality
            </h2>
            <p>
              All information shared with Prime Forensics in the course of a
              professional engagement is treated as strictly confidential. We
              maintain rigorous non-disclosure protocols and chain-of-custody
              procedures for all evidence and case materials. Disclosure of
              information will occur only as required by law or with the
              express written consent of the client.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-primary dark:text-white mb-4">
              5. Intellectual Property
            </h2>
            <p>
              All content on this website — including text, graphics, logos,
              images, and design elements — is the property of Prime Forensics
              & Investigative Services and is protected under applicable
              copyright and intellectual property laws. Unauthorized
              reproduction, distribution, or modification of any content is
              strictly prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-primary dark:text-white mb-4">
              6. Service Engagement & Fees
            </h2>
            <p>
              Specific service terms, deliverables, timelines, and fees will
              be outlined in a separate engagement letter or service agreement
              prior to the commencement of any work. The Company reserves the
              right to decline any engagement at its sole discretion.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-primary dark:text-white mb-4">
              7. Limitation of Liability
            </h2>
            <p>
              While Prime Forensics endeavours to provide accurate and reliable
              forensic analysis, we do not guarantee specific legal outcomes.
              Our reports and expert opinions are based on scientific
              methodologies and available evidence. The Company shall not be
              liable for any indirect, incidental, or consequential damages
              arising from the use of our services or reliance on our findings.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-primary dark:text-white mb-4">
              8. Website Use
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                You agree not to misuse, disrupt, or attempt to gain
                unauthorized access to any part of this website.
              </li>
              <li>
                Information displayed on this website is for general
                informational purposes and does not constitute legal advice.
              </li>
              <li>
                We reserve the right to modify, suspend, or discontinue any
                portion of the website at any time without prior notice.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-primary dark:text-white mb-4">
              9. Indemnification
            </h2>
            <p>
              You agree to indemnify and hold harmless Prime Forensics, its
              directors, employees, and agents from any claims, losses, or
              damages arising out of your breach of these Terms, misuse of our
              services, or violation of applicable laws.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-primary dark:text-white mb-4">
              10. Governing Law & Jurisdiction
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of India. Any disputes arising from these Terms or the
              use of our services shall be subject to the exclusive
              jurisdiction of the courts in New Delhi, India.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-primary dark:text-white mb-4">
              11. Amendments
            </h2>
            <p>
              The Company reserves the right to update or modify these Terms at
              any time. Changes will be effective immediately upon posting to
              this website. Continued use of our services following any
              modifications constitutes acceptance of the revised Terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-primary dark:text-white mb-4">
              12. Contact
            </h2>
            <p>
              For questions regarding these Terms of Service, please contact us
              at{" "}
              <a
                href="mailto:info@primeforensics.in"
                className="text-accent hover:underline"
              >
                info@primeforensics.in
              </a>
              .
            </p>
          </div>

          <div className="pt-8 border-t border-secondary/20">
            <p className="text-typography/50 text-sm">
              These Terms of Service are governed by the laws of India,
              including the Information Technology Act, 2000 and applicable
              contract law provisions. By accessing this website, you
              acknowledge that you have read, understood, and agree to be
              bound by these Terms.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import type { Metadata } from "next";
import Footer from "@/src/components/footer/footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Prime Forensics",
  description:
    "Learn how Prime Forensics & Investigative Services collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      {/* Hero */}
      <section className="bg-primary pt-32 pb-12 px-6 border-t border-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-accent font-serif text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
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
              1. Introduction
            </h2>
            <p>
              Prime Forensics & Investigative Services (&quot;we,&quot;
              &quot;our,&quot; or &quot;the Company&quot;) is committed to
              protecting the privacy and confidentiality of all individuals who
              interact with our services. This Privacy Policy outlines how we
              collect, use, store, and disclose personal information obtained
              through our website, contact forms, and professional engagements.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-primary dark:text-white mb-4">
              2. Information We Collect
            </h2>
            <p className="mb-4">
              We may collect the following categories of information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Personal Identifiers:</strong> Name, email address,
                phone number, and organizational affiliation provided via our
                contact forms or direct communication.
              </li>
              <li>
                <strong>Case-Related Information:</strong> Documents,
                evidence descriptions, and inquiry details submitted in
                connection with our forensic services.
              </li>
              <li>
                <strong>Technical Data:</strong> IP addresses, browser type,
                device information, and usage analytics collected
                automatically when you visit our website.
              </li>
              <li>
                <strong>Communication Records:</strong> Records of email
                correspondence, phone conversations, and form submissions.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-primary dark:text-white mb-4">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                To respond to inquiries and provide our forensic investigation
                and consultancy services.
              </li>
              <li>
                To communicate updates regarding ongoing cases or service
                requests.
              </li>
              <li>
                To comply with legal obligations, court orders, and regulatory
                requirements.
              </li>
              <li>
                To improve our website functionality and user experience.
              </li>
              <li>
                To maintain internal records for quality assurance and
                operational integrity.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-primary dark:text-white mb-4">
              4. Data Security
            </h2>
            <p>
              We employ industry-standard security measures including SSL
              encryption, access controls, and secure server infrastructure to
              protect personal data against unauthorized access, alteration, or
              disclosure. Case-related evidence and documentation are handled
              under strict chain-of-custody protocols consistent with forensic
              laboratory standards.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-primary dark:text-white mb-4">
              5. Data Sharing & Disclosure
            </h2>
            <p className="mb-4">
              We do not sell, trade, or rent personal information to third
              parties. Information may only be disclosed:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>When required by law, regulation, or judicial order.</li>
              <li>
                To authorized legal representatives in connection with active
                cases.
              </li>
              <li>
                To trusted service providers who assist in operating our
                website, subject to confidentiality agreements.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-primary dark:text-white mb-4">
              6. Data Retention
            </h2>
            <p>
              Personal information is retained only for as long as necessary to
              fulfill the purposes outlined in this policy or as required by
              applicable law. Case-related records may be retained for extended
              periods in accordance with legal and evidentiary preservation
              requirements.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-primary dark:text-white mb-4">
              7. Your Rights
            </h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Request access to the personal data we hold about you.
              </li>
              <li>
                Request correction of inaccurate or incomplete information.
              </li>
              <li>
                Request deletion of your personal data, subject to legal
                retention obligations.
              </li>
              <li>
                Withdraw consent for non-essential data processing at any time.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-primary dark:text-white mb-4">
              8. Cookies & Analytics
            </h2>
            <p>
              Our website may use cookies and similar tracking technologies to
              enhance user experience and gather aggregate usage statistics.
              You may disable cookies through your browser settings; however,
              this may affect the functionality of certain website features.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-primary dark:text-white mb-4">
              9. Contact Us
            </h2>
            <p>
              For privacy-related inquiries or to exercise your data rights,
              please contact us at{" "}
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
              This policy is governed by the laws of India, including the
              Information Technology Act, 2000 and the Digital Personal Data
              Protection Act, 2023. We reserve the right to update this policy
              at any time. Continued use of our services constitutes acceptance
              of the revised terms.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

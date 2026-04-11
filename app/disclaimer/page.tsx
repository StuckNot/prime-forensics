import type { Metadata } from "next";
import Footer from "@/src/components/footer/footer";

export const metadata: Metadata = {
  title: "Disclaimer | Prime Forensics",
  description:
    "Important legal disclaimers regarding the use of Prime Forensics & Investigative Services website and professional opinions.",
};

export default function DisclaimerPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      {/* Hero */}
      <section className="bg-primary pt-32 pb-12 px-6 border-t border-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-accent font-serif text-4xl md:text-5xl font-bold mb-4">
            Disclaimer
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
              1. General Information
            </h2>
            <p>
              The information provided on this website is for general
              informational purposes only. While Prime Forensics &
              Investigative Services (&quot;the Company&quot;) strives to
              ensure accuracy and completeness, we make no representations or
              warranties of any kind, express or implied, about the
              completeness, accuracy, reliability, or suitability of the
              information, products, services, or related content contained on
              this website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-primary dark:text-white mb-4">
              2. No Legal Advice
            </h2>
            <p>
              Nothing on this website constitutes legal advice, professional
              consultation, or an attorney-client relationship. The content
              published here — including descriptions of forensic
              methodologies, case studies, and service capabilities — is
              intended solely for informational and educational purposes. For
              specific legal or forensic advice, users should engage qualified
              professionals directly.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-primary dark:text-white mb-4">
              3. Forensic Reports & Expert Opinions
            </h2>
            <p>
              All forensic reports, expert opinions, and analytical findings
              produced by Prime Forensics are based on the evidence and
              materials submitted to us. Our conclusions reflect the
              application of established scientific methodologies to the
              available data. We do not guarantee any specific legal outcome,
              court ruling, or adjudicative result based on our findings.
              Forensic analysis is inherently limited by the quality, quantity,
              and condition of the evidence provided.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-primary dark:text-white mb-4">
              4. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by applicable law, Prime
              Forensics shall not be liable for any loss or damage — including
              but not limited to indirect, incidental, consequential, or
              punitive damages — arising out of or in connection with the use
              of this website, reliance on any information contained herein, or
              engagement of our services. This limitation applies regardless of
              whether the claim is based in contract, tort, negligence, strict
              liability, or any other legal theory.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-primary dark:text-white mb-4">
              5. Third-Party Links
            </h2>
            <p>
              This website may contain links to external websites or resources
              that are not owned or controlled by the Company. We have no
              control over, and assume no responsibility for, the content,
              privacy policies, or practices of any third-party sites. The
              inclusion of any link does not imply endorsement or affiliation.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-primary dark:text-white mb-4">
              6. Case References & Testimonials
            </h2>
            <p>
              Any case references, client testimonials, or success metrics
              mentioned on this website are presented for illustrative purposes
              only. They do not guarantee identical results in future cases.
              Each engagement is unique and outcomes depend on the specific
              facts, evidence, and circumstances involved.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-primary dark:text-white mb-4">
              7. Professional Standards
            </h2>
            <p>
              Prime Forensics operates in accordance with applicable Indian
              laws, including the Bhartiya Sakshya Adhiniyam (Indian Evidence
              Act), the Information Technology Act, 2000, and industry best
              practices. Our methodologies are designed to meet
              court-admissibility standards; however, the admissibility of any
              report or testimony is ultimately determined by the presiding
              judicial authority.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-primary dark:text-white mb-4">
              8. Changes to This Disclaimer
            </h2>
            <p>
              The Company reserves the right to modify this Disclaimer at any
              time without prior notice. Any changes will be effective
              immediately upon posting to this website. Continued use of the
              website following any modifications constitutes acceptance of the
              updated Disclaimer.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-primary dark:text-white mb-4">
              9. Contact
            </h2>
            <p>
              If you have any questions about this Disclaimer, please contact
              us at{" "}
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
              This Disclaimer is governed by the laws of India. By accessing
              this website, you acknowledge that you have read, understood,
              and agree to the terms outlined above.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

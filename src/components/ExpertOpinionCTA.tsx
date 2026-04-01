import Button from "./ui/Button";

export default function ExpertOpinionCTA() {
  return (
    <section className="bg-primary dark:bg-primary/50 py-24 px-6 border-y border-secondary/20">
      <div className="max-w-5xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
          Need an Expert Opinion for Court?
        </h2>

        {/* Subtext */}
        <p className="text-white/80 text-lg max-w-3xl mx-auto mb-10">
          Our reports are detailed, scientifically backed, and prepared to
          withstand cross-examination.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-5">

          <Button
            href="/consultation"
            bgColor="bg-accent"
            textColor="text-primary"
            hoverBg="hover:brightness-110"
            className="font-bold"
          >
            Schedule a Consultation
          </Button>

          <Button
            href="/brochure.pdf"
            variant="outline"
            textColor="text-white"
            hoverBg="hover:bg-white"
            hoverText="hover:text-primary"
            className="border-white/30 font-medium"
          >
            Download Corporate Brochure
          </Button>

        </div>
      </div>
    </section>
  );
}
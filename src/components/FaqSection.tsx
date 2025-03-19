import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const faqs = [
  {
    question: "How does the AI Skip Tracer obtain owner contact details?",
    answer: "Our AI Skip Tracer leverages a proprietary blend of public records, multiple databases, and intelligent algorithms to identify property owners and their contact information. It automatically searches through various data sources, including property records, tax assessments, corporate filings, and other publicly available information to compile comprehensive owner profiles."
  },
  {
    question: "What types of properties can the AI Skip Tracer be used for?",
    answer: "The AI Skip Tracer is specifically designed for commercial real estate properties, including office buildings, retail spaces, industrial properties, multi-family units, and land. It's optimized to find ownership information for commercial assets where contact details are often harder to obtain than residential properties."
  },
  {
    question: "How accurate is the information provided by the AI Skip Tracer?",
    answer: "Our AI Skip Tracer consistently achieves high accuracy rates, with information verified across multiple data sources. However, as with any data service, accuracy can vary based on the recency and completeness of public records. We continuously refine our algorithms to improve accuracy and provide the most up-to-date information possible."
  },
  {
    question: "How does the AI Skip Tracer integrate into my existing workflow?",
    answer: "The AI Skip Tracer is designed to complement your existing commercial real estate workflow seamlessly. Simply enter a property address, and within minutes, you'll receive comprehensive owner contact information. This allows you to quickly move to the outreach phase of your prospecting process without the hours typically spent on manual research."
  },
  {
    question: "What are the subscription options and pricing?",
    answer: "We offer a Pro plan at $239/month per seat, which includes 80 skip traces per month and unlimited users. For larger teams or firms with higher volume needs, we provide custom enterprise solutions with flexible skip trace limits, API access, and priority support. Contact our team for custom pricing tailored to your specific requirements."
  },
  {
    question: "How can I get started with the AI Skip Tracer?",
    answer: "Getting started is simple! Click the 'Start search' button on our website to book a demo and free trial. During the onboarding process, our team will provide you with access credentials and a walkthrough of the platform. You can immediately begin searching for property owner information and accelerating your lead generation process."
  }
];

const FaqSection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-start mb-16">
          <span className="text-sm text-gray-500 mb-2">your questions answered</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            FAQ
          </h2>
          <div className="flex items-center mt-4">
            <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center mr-3">
              <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            </div>
            <p className="text-gray-600">
              Additional questions? Reach out to us: chris@admyral.ai
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 text-left font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

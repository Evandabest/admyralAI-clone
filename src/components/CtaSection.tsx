import Link from 'next/link';
import { Button } from './ui/button';

const CtaSection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Get your trial
          </h2>
          <div className="flex justify-center items-center mb-6">
            <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center mx-1">
              <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            </div>
          </div>
          <p className="text-lg text-gray-600 mb-8">
            Save 15+ Hours Researching Per Week.<br />
            Other brokers are not hesitating to win listings.
          </p>
          <div className="flex justify-center">
            <Link href="https://calendar.app.google/n9AafugTwE6r95uG7" target="_blank" rel="noopener noreferrer">
              <Button className="px-8 py-6 bg-black text-white hover:bg-gray-800 text-lg">
                Start search
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

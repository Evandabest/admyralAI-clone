import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-medium bg-orange-100 text-orange-800 rounded-full mb-4">NEW!</span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                AI Skip Tracer for <br className="hidden md:block" />Commercial Real Estate
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Enter an address and our AI will find the contact details of the owner within 1 minute.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="https://calendar.app.google/n9AafugTwE6r95uG7" target="_blank" rel="noopener noreferrer">
                <Button className="w-full sm:w-auto px-8 py-6 bg-black text-white hover:bg-gray-800 text-lg">
                  Start search
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://ext.same-assets.com/345293410/1448262271.png"
              alt="Admyral AI Skip Tracer Platform"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
              priority
            />
          </div>
        </div>

        <div className="mt-24 py-8 border-t border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Level-up your lead game.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900 mb-2">40%</p>
              <p className="text-sm text-gray-600">time saved</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900 mb-2">4x</p>
              <p className="text-sm text-gray-600">Lead generation capacity</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900 mb-2">96%</p>
              <p className="text-sm text-gray-600">Client satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

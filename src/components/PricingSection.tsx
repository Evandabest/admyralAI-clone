import Link from 'next/link';
import { Button } from './ui/button';
import { Check } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

const PricingSection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-start mb-16">
          <span className="text-sm text-gray-500 mb-2">Land one listing, 100x your investment</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transparent Pricing
          </h2>
          <div className="flex items-center mt-4">
            <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center mr-3">
              <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            </div>
            <p className="text-gray-600">
              Get more listing opportunities through diligent skip tracing.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pro Plan */}
          <Card className="border-0 shadow-md overflow-hidden">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-bold">Pro</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">$239</span>
                <span className="text-gray-500 ml-2">/month /seat</span>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">80 skip traces per month</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Unlimited users</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Founder support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link
                href="https://calendar.app.google/n9AafugTwE6r95uG7"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="w-full bg-black text-white hover:bg-gray-800">
                  Start searching
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Custom/Enterprise Plan */}
          <Card className="border-0 shadow-md overflow-hidden">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-bold">Firm License</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">Custom</span>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Custom skip trace limits</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">API access</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Enterprise features and support</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Priority founder support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link
                href="https://calendar.app.google/TZeVjSWUs4yQn9aRA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button variant="outline" className="w-full border-gray-300">
                  Talk to us
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
